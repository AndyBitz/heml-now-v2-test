const {parse: parseURL} = require('url')
const {STATUS_CODES} = require('http')


const paths = {
  '/welcome-mail.js': require('./routes/welcome-mail')
}


module.exports = async (req, res) => {
  const pathname = parseURL(req.url).pathname
  const callback = paths[pathname]

  if (callback) {
    return callback(req, res)
  }

  res.statusCode = 404
  return STATUS_CODES[404]
}
