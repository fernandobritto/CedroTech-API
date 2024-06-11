import { ServiceOrderDto } from '@domain/dtos/service-order.dto'
import { IServiceOrderRepository } from '@domain/infrastructure/repositories/service-order.interface'
import { DynamoDBProvider } from '@infrastructure/providers/dynamodb.provider'
import { v4 as uuidv4 } from 'uuid'
export class ServiceOrderRepository implements IServiceOrderRepository {
  private readonly dynamoDBProvider: DynamoDBProvider

  constructor() {
    this.dynamoDBProvider = new DynamoDBProvider('us-east-1')
  }

  async createServiceOrder(order: ServiceOrderDto): Promise<ServiceOrderDto> {
    const id = uuidv4()
    const orderDate = new Date().toISOString()
    const orderCedroSk = `ORDER#${orderDate}`
    const params = {
      TableName: 'centro-tech-table',
      Item: { PK: id, SK: orderCedroSk, ...order }
    }
    await this.dynamoDBProvider.create(params)
    return { ...order, id }
  }

  async updateServiceOrder(order: ServiceOrderDto): Promise<ServiceOrderDto> {
    const params = {
      TableName: 'centro-tech-table',
      Item: order
    }
    await this.dynamoDBProvider.updateOne(params)
    return order
  }

  async getServiceOrderById(id: string): Promise<ServiceOrderDto | null> {
    const params = {
      TableName: 'centro-tech-table',
      Key: {
        id
      }
    }
    const result = await this.dynamoDBProvider.getOne(params)
    if (result.Item) {
      return {} as ServiceOrderDto
    }
    return null
  }
}
