import { ServiceOrderDto } from '@domain/dtos/service-order.dto'

export interface IServiceOrderRepository {
  createServiceOrder(order: ServiceOrderDto): Promise<ServiceOrderDto>
  updateServiceOrder(order: ServiceOrderDto): Promise<ServiceOrderDto>
  getServiceOrderById(id: string): Promise<ServiceOrderDto | null>
}
