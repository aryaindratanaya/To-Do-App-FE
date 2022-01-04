const base = {
  COOKIE_NAME: '',
  API_HOST: 'http://localhost:8000/',
  DB_HOST: '',
}

const production = {
  ...base,
  API_HOST: process.env.API_HOST,
  DB_HOST: process.env.DB_HOST,
}

const env = process.env.STAGE || 'development'

export default env === 'production' ? production : base
