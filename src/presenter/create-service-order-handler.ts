import { CreateServiceOrderService } from '@application/services/create-service-order.service'
import { createServiceOrderMiddleware } from '@common/middleware/create-service-order.middleware'
import { CreateServiceOrderDto } from '@domain/dtos/create-service-order.dto'
import { ServiceOrderRepository } from '@infrastructure/repositories/service-order.repository'
import type middy from '@middy/core'
import {
  type APIGatewayProxyEvent,
  type APIGatewayProxyHandler,
  type APIGatewayProxyResult,
  type Context
} from 'aws-lambda'

const createServiceOrderHandler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent) => {
  try {
    const createServiceOrderService = new CreateServiceOrderService(new ServiceOrderRepository())
    const serviceOrder = event.body as unknown as CreateServiceOrderDto

    const order = await createServiceOrderService.execute(serviceOrder)

    return {
      statusCode: 201,
      body: JSON.stringify(order)
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message })
    }
  }
}

export const handler: middy.MiddyfiedHandler<APIGatewayProxyEvent, APIGatewayProxyResult, Error, Context> =
  createServiceOrderMiddleware(createServiceOrderHandler)
