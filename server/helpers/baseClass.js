class baseHandler {
  response(data, status) {
    return {
      data,
      status,
    };
  }
}

module.exports = baseHandler;