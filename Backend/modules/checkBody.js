function checkBody(body, keys) {
    let validConnection = true;
  
    for (const field of keys) {
      if (!body[field] || body[field] === "") {
        validConnection = false;
      }
    }
  
    return validConnection;
  }
  
  module.exports = { checkBody };