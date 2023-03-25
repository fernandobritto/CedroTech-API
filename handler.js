'use strict'

module.exports.hello = async (event) => {
  return {
    success: true,
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Centro Tech! Your function executed successfully!!!',
        input: event
      },
      null,
      2
    )
  }
}
