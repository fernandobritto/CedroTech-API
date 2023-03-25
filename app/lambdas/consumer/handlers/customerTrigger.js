'use strict'

const { FEEDBACK_MESSAGES } = require('../constants')

const handler = async (event) => {
  try {
    return {
      success: true,
      statusCode: 200,
      body: JSON.stringify({
        data: '',
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
