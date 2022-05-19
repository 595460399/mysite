let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://124.220.33.24/mysite-backend-flask-dev'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://124.220.33.24/mysite-backend-flask-dev'
} else {
  BASE_URL = 'http://127.0.0.1:5000/mysite-backend-flask-dev'
}

export { BASE_URL, TIME_OUT }
