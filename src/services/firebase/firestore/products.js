//traigo los productos desde mi db
import { database } from "../firebaseConfig"

//funcion que me permite leer datos = getDocs
//funcion para crear referencia a mi db = collection
import { getDocs, collection, query, where, getDoc, doc, QuerySnapshot } from "firebase/firestore"

//funcion para obtener todos mis productos
export const myProducts = (categoryId) => {
        return new Promise((resolve, reject) => {
            //referencia a los productos con la funcion collection que va a estar en mi db y paso el nombre que le puse a la coleccion
           //si tengo categoryId hago una consulta filtrada, sino busco todos los productos
            const prodsRef = categoryId
            ? query (collection (database, 'products'), where ('category', '==', categoryId))
            :collection (database, 'products')

        //la idea es: creo la referencia a mi db y se la paso a la funcion que lee los documentos 
        getDocs(prodsRef)
        .then (QuerySnapshot=> {
            // console.log(QuerySnapshot) hice console.log para ver que contiene 

            //accedo a la propiedad docs de QuerySnapshot que es donde esta el array
            //array que transformare con metodo .map en un nuevo array de objetos 
            const adaptedProducts= QuerySnapshot.docs.map (documentSnapshot => {
                //los datos que no sean id los obtengo al ejecutar la f data
                const fields = documentSnapshot.data()

                //indico las propiedades del objeto 
                return (
                    {
                        //id se obtiene directamente
                        id: documentSnapshot.id,
                        ...fields

                    }
                )
            })
            console.log (adaptedProducts)
            resolve (adaptedProducts)
        })
        .catch (error =>{
            reject(error)
        }
            )
    })
}


export const myProductsById = (itemId) => {
    const prodRef = doc(database, 'products', itemId)

    return getDoc(prodRef)
    //aca no tengo que mapear un array
                .then(documentSnapshot => {
                    const fields = documentSnapshot.data()
                    const adaptedProduct = { id: documentSnapshot.id, ...fields }
                    return adaptedProduct 
                })
                .catch(error => {
                    return error
                })
}

// export default myProducts