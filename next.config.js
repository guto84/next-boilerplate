// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')

const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true
}

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
