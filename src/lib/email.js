const heml = require('heml')
const {send} = require('micro')


module.exports = (string, ...args) => async (req, res) => {

  const template = createTemplate(string, args)
  const {html} = await heml(template)

  send(res, 200, html)
}



const createTemplate = (parts, args) => {
  const template = parts.map((part, index) => {
    let arg = args[index] || ''
    return `${part}${arg}`
  })

  return template.join('')
}
