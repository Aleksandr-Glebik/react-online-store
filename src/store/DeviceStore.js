import {makeAutoObservable} from 'mobx'

export default class DeiceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Телевизоры'},
            {id: 2, name: 'Ноутбуки'},
            {id: 3, name: 'Смартфоны'},
            {id: 4, name: 'Планшеты'},
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
        ]
        this._devices = [
            {id: 1, name: 'iPhone 9', price: 549, rating: 4.69, img: "https://dummyjson.com/image/i/products/1/1.jpg"},
            {id: 2, name: 'iPhone 9', price: 549, rating: 4.69, img: "https://dummyjson.com/image/i/products/1/1.jpg"},
            {id: 3, name: 'iPhone 9', price: 549, rating: 4.69, img: "https://dummyjson.com/image/i/products/1/1.jpg"},
            {id: 4, name: 'iPhone 9', price: 549, rating: 4.69, img: "https://dummyjson.com/image/i/products/1/1.jpg"},
        ]
        this._selectedType = {}
        makeAutoObservable(this)
    }

    setType(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }

}