'use strict'

const AWS = require('aws-sdk')
const { randomUUID } = require('node:crypto')
const dynamoDB = new AWS.DynamoDB.DocumentClient()

const { FEEDBACK_MESSAGES } = require('../constants')

const handler = async (event) => {
  try {
    const data = JSON.parse(event.body)
    const params = {
      TableName: 'Customers',
      Item: {
        ...data,
        id: randomUUID(),
        createdAt: new Date().toDateString()
      }
    }

    await dynamoDB.put(params).promise()

    const insertedItem = await dynamoDB
      .query({
        TableName: 'Customers',
        ExpressionAttributeValues: {
          ':id': params.Item.id
        },
        KeyConditionExpression: 'id = :id'
      })
      .promise()

    return {
      success: true,
      statusCode: 200,
      body: JSON.stringify({
        data: insertedItem,
        message: FEEDBACK_MESSAGES.CUSTOMER_INSERT_SUCCESS
      })
    }
  } catch (error) {
    console.error(error)

    const errorMessage = (error && error.message) || FEEDBACK_MESSAGES.UNEXPECTED_ERROR
    return {
      success: false,
      statusCode: 500,
      body: JSON.stringify({
        message: errorMessage
      })
    }
  }
}

module.exports = { handler }
