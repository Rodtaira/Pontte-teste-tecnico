module.exports = dbHandleError = (error, request, response, next) => {
    response.status(error.status || 500).json({
      status: 'error',
      error: {
        message: error.message || serverErrorMsg,
      },
    })
  }