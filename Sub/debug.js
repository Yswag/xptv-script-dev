let api = argsify($config_str).api ? argsify($config_str).api : 'http://192.168.50.68:3000'

async function getConfig() {
    let result = (await $fetch.get(`${api}/getConfig`)).data
    return result
}

async function getCards(ext) {
    let result = (await $fetch.post(`${api}/getCards`, ext)).data
    return result
}

async function getTracks(ext) {
    let result = (await $fetch.post(`${api}/getTracks`, ext)).data
    return result
}

async function getPlayinfo(ext) {
    let result = (await $fetch.post(`${api}/getPlayinfo`, ext)).data
    return result
}

async function search(ext) {
    let result = (await $fetch.post(`${api}/search`, ext)).data
    return result
}
