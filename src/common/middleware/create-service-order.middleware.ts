import { useValidationSchema } from '@common/helpers/useValidationSchema'
import { CreateServiceOrderDto } from '@domain/dtos/create-service-order.dto'
import { middyfy } from '@infrastructure/libs/middfy'
import { type APIGatewayProxyHandler } from 'aws-lambda'

const useCreateServiceOrderValidator = () => {
  return useValidationSchema({
    body: CreateServiceOrderDto
  })
}

export const createServiceOrderMiddleware = (handler: APIGatewayProxyHandler) => {
  return middyfy(handler).use([useCreateServiceOrderValidator()])
}
