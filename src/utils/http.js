import axios from 'axios'

export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios.get(url, {params})
      .then(resp => resolve(resp.data))
      .catch(err => reject(err))
  })
}

export const post = (url, data) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(resp => resolve(resp.data))
      .catch(err => reject(err))
  })
}
