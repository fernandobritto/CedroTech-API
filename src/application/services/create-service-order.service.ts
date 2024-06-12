/* eslint-disable prettier/prettier */
import { CreateServiceOrderDto } from '@domain/dtos/create-service-order.dto'
import { IServiceOrderRepository } from '@domain/infrastructure/repositories/service-order.interface'


export class CreateServiceOrderService {
  constructor(private readonly orderRepository: IServiceOrderRepository) { }

  async execute(data: CreateServiceOrderDto): Promise<unknown> {
 
    try {
      const order = await this.orderRepository.createServiceOrder(data)
      return order
    }
    catch (error) {
      throw new Error(error)
    }
  }
}