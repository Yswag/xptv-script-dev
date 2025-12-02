import axios from 'axios'

const $fetch = {
    get: async (url, options = {}) => {
        const response = await axios.get(url, { ...options, responseType: 'text' })
        return { data: response.data }
    },
    download: async (url, options = {}) => {
        const response = await axios.get(url, { ...options, responseType: 'arraybuffer' })
        return { data: response.data }
    },
    post: async (url, data = {}, options = {}) => {
        const response = await axios.post(url, data, { ...options, responseType: 'text' })
        return { data: response.data }
    },
}

const jsonify = (obj) => JSON.stringify(obj)
const argsify = (str) => JSON.parse(str)

export { $fetch, jsonify, argsify }
