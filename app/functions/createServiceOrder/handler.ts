import { type APIGatewayProxyEvent, type APIGatewayProxyHandler, type APIGatewayProxyResult } from 'aws-lambda'
import { isHttpError } from 'http-errors'

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const response = event.body
    return {
      statusCode: 200,
      body: JSON.stringify('Create Service Order TEST: ' + response)
    }
  } catch (error) {
    if (isHttpError(error)) {
      return {
        statusCode: error.statusCode,
        body: JSON.stringify(error)
      }
    }
    return {
      statusCode: 500,
      body: JSON.stringify(error)
    }
  }
}
