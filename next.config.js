const path = require('path')

const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

// This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
module.exports = (phase) => {
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  // when `next build` or `npm run build` is used
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
  // when `next build` or `npm run build` is used
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'

  // console.log(`isDev:${isDev}  isProd:${isProd}  isStaging:${isStaging}`)

  const env = {
    URL: (() => {
      if (isProd) return 'http://127.0.0.1:8080'

      return 'http://127.0.0.1:8080'
    })(),
  }

  // next.config.js object
  return {
    env,
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    }
  }
}