import axios from 'axios'

const httpRequest = (baseURL: string) => {
  const instance = axios.create({baseURL})

  instance.interceptors.request.use(
    request => request,
    err => {
      return Promise.reject(err)
    }
  )

  instance.interceptors.response.use(
    response => {
      return response.data
    },
    async function (error) {
      return Promise.reject(error)
    }
  )

  return instance
}

export default httpRequest
