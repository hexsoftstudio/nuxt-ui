const { resolve } = require('path')
const fse = require('fs-extra')
// const axios = require('axios')

module.exports = async function (moduleOptions) {
  const options = {
    ...this.options['nuxt-button'],
    ...moduleOptions
  }

  // console.log(moduleOptions.token) // '123'
  // console.log(this.options.exampleMsg) // 'hello'

  // const info = 'Built by nuxt-button - 0.1 alpha on ' + Date.now()

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-button.js',
    options
  })

  /*
  this.nuxt.hook('ready', async nuxt => {
    // console.log('Nuxt is ready...')
  })

  this.nuxt.hook('error', async error => {
      // console.log('Error: What Dah!...')
  })

  this.nuxt.hook('close', async nuxt => {
      // console.log('Nuxt is closing...')
  })

  this.nuxt.hook('listen', async (server, {host, port}) => {
      // console.log('Listening now...')
  })
  */

  const users = await fse.readJson(resolve(__dirname, 'users.json'))
  // console.log('users', users);

  return users

  /*
  return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => res.data.map(user => '/users/' + user.username))
    .then(routes => {
      // Do something by extending Nuxt routes
      // console.log('routes', routes)
    })
  */
}

module.exports.meta = require('../package.json')
