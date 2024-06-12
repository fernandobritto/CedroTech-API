export class ServiceOrderDto {
  id?: string
  order: string
  description: string
  clientCategoryId: string
  clientOrderId: string
  status: string
  flagCedro?: boolean
}
