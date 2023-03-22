const getPort = require('get-port')
const http = require('http')
const open = require('open')
const handler = require('serve-handler')

async function main() {
  const port = await getPort()

  const server = http.createServer((request, response) =>
    handler(request, response, { public: '.vitepress/dist' })
  )

  server.listen(port, () => {
    open(`http://localhost:${port}`).then(() => {
      console.log(`Serving docs at http://localhost:${port}`)
    })
  })
}

main()
