// CODIGO COMENTADO PARA TENER DE EJEMPLO. EN EL PROYECTO DATOS OBTENIDOS DE FIREBASE.
// const products = [
//     {
//         id: '1',
//         title: 'Escurridor',
//         price: '1200',
//         stock: '5',
//         category: 'cocina',
//         description: 'Escurridor de platos color en negro, acero inoxidable, trae repuestos',
//         img: 'https://f.fcdn.app/imgs/76ae99/www.decohogar.com.uy/decouy/1c0c/webp/catalogo/ML7883_1/460_600/escurridor-doble-c-bandeja-51x28x35cm-cromado-ngo-escurridor-doble-c-bandeja-51x28x35cm-cromado-ngo.jpg'
//     },
//     {
//         id: '2',
//         title: 'Alfombra baño',
//         price: '700',
//         stock: '7',
//         category: 'baño',
//         description: 'Alfombra negra para salida de la ducha, fácil limpieza y rápido secado',
//         img: 'https://f.fcdn.app/imgs/380997/www.decohogar.com.uy/decouy/84f4/webp/catalogo/252123-01_1/460_600/alfombra-40x60cm-bucle-negro-alfombra-40x60cm-bucle-negro.jpg'
//     },
//     {
//         id: '3',
//         title: 'Porta ph',
//         price: '600',
//         stock: '3',
//         category: 'baño',
//         description: 'Porta papel higienico en color negro',
//         img: 'https://f.fcdn.app/imgs/59e3ab/www.decohogar.com.uy/decouy/c370/webp/catalogo/ML7530_1/460_600/soporte-papel-higienico-12x13x64cm-cromado-negro-soporte-papel-higienico-12x13x64cm-cromado-negro.jpg'
//     },
//     {
//         id: '4',
//         title: 'Jarrón',
//         price: '1000',
//         stock: '2',
//         category: 'ceramica',
//         description: 'Pieza unica en cerámica, color marrón',
//         img: 'https://f.fcdn.app/imgs/942b1e/www.leblanc.com.uy/lblauy/501b/webp/catalogo/261206001_1/1000_1000/jarron-marron-gres-82057437.jpg'
//     },
//     {
//         id: '5',
//         title: 'Cafetera italiana',
//         price: '1000',
//         stock: '2',
//         category: 'cocina',
//         description: 'Clásica cafetera italiana color negro',
//         img: 'https://f.fcdn.app/imgs/16f990/www.decohogar.com.uy/decouy/bc97/webp/catalogo/F00420_1/460_600/cafetera-9t-d12x23cm-alum-tiramisu-marble-negro-cafetera-9t-d12x23cm-alum-tiramisu-marble-negro.jpg '
//     },
//     {
//         id: '6',
//         title: 'Posa fuentes de silicona',
//         price: '300',
//         stock: '4',
//         category: 'cocina',
//         description: 'Posa fuente de silicona, varios colores, fácil limpieza y fácil de guardar',
//         img: 'https://f.fcdn.app/imgs/badc95/www.decohogar.com.uy/decouy/ad27/webp/catalogo/BS40110_1/460_600/posa-fuente-d20cm-silicona-gris-rojo-posa-fuente-d20cm-silicona-gris-rojo.jpg'
//     },
//     {
//         id: '7',
//         title: 'Maceta de cerámica',
//         price: '1500',
//         stock: '1',
//         category: 'ceramica',
//         description: 'Maceta de cerámica, diseño único',
//         img: 'https://f.fcdn.app/imgs/8b2e36/www.leblanc.com.uy/lblauy/b8da/webp/catalogo/261202001_0/2000-2000/maceta-blanco-gres-82057487.jpg'
//     },
//     {
//         id: '8',
//         title: 'Florero de cerámica',
//         price: '1900',
//         stock: '1',
//         category: 'sale',
//         description: 'Florero de ceramica, color blanco, ÚLTIMA pieza',
//         img: 'https://f.fcdn.app/imgs/a02896/www.decohogar.com.uy/decouy/513b/webp/catalogo/4651713_1/460_600/florero-ceramica-12x8-5x20cm-blanco-florero-ceramica-12x8-5x20cm-blanco.jpg'
//     },
//     {
//         id: '9',
//         title: 'Florero de cerámica',
//         price: '2300',
//         stock: '3',
//         category: 'ceramica',
//         description: 'Florero de ceramica, color verde',
//         img: 'https://f.fcdn.app/imgs/6788f6/www.decohogar.com.uy/decouy/28a5/webp/catalogo/4651710_1/460_600/florero-ceramica-d12x31cm-formas-verde-oscuro-florero-ceramica-d12x31cm-formas-verde-oscuro.jpg'
//     },
//     {
//         id: '10',
//         title: 'Aromatizador de ambiente',
//         price: '1000',
//         stock: '3',
//         category: 'sale',
//         description: 'Aromatizador de ambiente 500ml con sticks, variedad de aromas',
//         img: 'https://static.zarahome.net/8/photos4/2023/I/4/1/p/8412/703/250/8412703250_2_7_2.jpg?t=1694010429768&imwidth=819&imformat=chrome'
//     },
//     {
//         id: '11',
//         title: 'Manta rayas',
//         price: '3000',
//         stock: '3',
//         category: 'living',
//         description: 'Manta a rayas para sillón, producto original',
//         img:'https://static.zarahome.net/8/photos4/2023/I/4/1/p/2327/004/104/2327004104_2_7_1.jpg?t=1695302051436' 
//     },
//     {   id: '12',
//     title: 'Apoya libros',
//     price: '1200',
//     stock: '6',
//     category: 'living',
//     description: 'Apoya libros de metal en varios colores',
//         img:'https://acdn.mitiendanube.com/stores/630/807/products/01741-35860bf93bc08e9c1d16949768224354-1024-1024.webp'
//     }

// ]

// //funcion para obtener todos mis productos
// export const myProducts = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(products)
//         }, 200)
//     })
// }

// //funcion para obtener mis productos por su Id
// export const myProductsById = (id) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(products.find(prod => prod.id === id))
//         }, 500)
//     })
// }

// //funcion para obtener las distintas categorias
// export const myProductsByCategory = (categoryId) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(products.filter(prod => prod.category === categoryId))
//         }, 500)
//     })
// }