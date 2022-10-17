import { $host } from "./index"

export const fetchTypes = async () => {
    const {data} = await $host.get('products/categories')
    // console.log('data', data);
    return data
}

export const fetchDevices = async (type = 'smartphones') => {
    const {data} = await $host.get(`products/category/${type}`)
    // console.log('data', data);
    return data
}
export const fetchOneDevice = async (id) => {
    const {data} = await $host.get(`products/${id}`)
    // console.log('data', data);
    return data
}