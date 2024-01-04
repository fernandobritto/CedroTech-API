import { handler } from '@functions/createServiceOrder/handler'
import { type APIGatewayProxyEvent } from 'aws-lambda'
import { isHttpError } from 'http-errors'

describe('API Gateway handler test', () => {
  it('should return statusCode 500 and the error body when there is an error', async () => {})
  it('should return statusCode 400 and the error body when there is an http error', async () => {})
  it('should return statusCode 200 and the response body when there is no error', async () => {})
})
