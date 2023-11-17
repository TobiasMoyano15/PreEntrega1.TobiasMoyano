const productos = [
    {
    id: '1',
    nombre: 'jordan 1',
    precio : 30000 ,
    categoria : 'zapatillas',
    img : 'https://media.gq.com.mx/photos/64d65dc5fb852355e03228de/16:9/w_2560%2Cc_limit/Air_Jordan_1_High_OG_Satin_Bred.jpg',
    stock : 25,
    descripcion: 'descripcion de jordan 1'
    },
    {
    id: '2',
    nombre: 'nike airforce',
    precio : 30000 ,
    categoria : 'zapatillas',
    img : 'https://nikearprod.vtexassets.com/arquivos/ids/628235/DV1622_001_A_PREM.jpg?v=638210578990930000',
    stock : 25,
    descripcion: 'descripcion de mike airforce'
    },
    {
    id: '',
    nombre: 'adidas campus 2000',
    precio : 30000 ,
    categoria : 'zapatillas',
    img : 'https://cdn.shopify.com/s/files/1/2358/2817/files/adidas-campus-00s-dark-green-cloud-white-2.png?v=1682603011',
    stock : 25,
    descripcion: 'descripcion de adidas campus 2000'
    }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        },500)
    })
}

export const getProductosByid = (ProductId) => {
    return new Promise((resolve) => {
        setTimeout(productos.find(prod => prod.id === productosId))
    },500)
}