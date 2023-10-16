const products = [
    {
        id: '1',
        title: 'taza',
        price: '500',
        stock: '5',
        description: 'taza metal estilo gastada'
    },
    {
        id: '2',
        title: 'alfombra',
        price: '700',
        stock: '7',
        description: 'alfombra entrada'
    },
    {
        id: '3',
        title: 'jabonera',
        price: '600',
        stock: '3',
        description: 'jabonera para dos jabones'
    },
    {
        id: '4',
        title: 'jarron',
        price: '1000',
        stock: '2',
        description: 'pieza unica jarron'
    },

]

export const myProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}