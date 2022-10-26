import { useState, useEffect } from "react" //una funcion que me retorna un array

import { gFetch } from "../../../helpers/gFetchs"
import Input from "../../Input/Input"
import {collection, getDocs, getFirestore} from 'firebase/firestore'


//const task = new Promise ((res, rej)=>{ // res= aceptado y rej = rechazado
 // res([
   // {id:1, name: 'sebastian', apellido: 'pastor', age: 33, carrera: 'casi Historiador'}
  //])
  //rej('404 not found')
//})

const ItemListConteiner = () => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)


useEffect(()=>{
  const db = getFirestore()
  const queryCollection = collection(db,'productos')
  getDocs(queryCollection)
  .then(resp => setProductos(resp.docs.map(prod => ({id:prod.id, ...prod.data()}))))
  .catch(err => console.log(err))
  .finally(()=> setLoading(false))

},[])






  //task
  //.then((respuesta)=> {
    //throw new Error('Error forzado')
 //    return respuesta * 2 })
// useEffect(()=>{
 //gFetch() // simulacion de Fetch --> Mock
  //  .catch(err => console.log(err))
   // .then(resSgte => setProductos(resSgte))
   // .finally (()=> setLoading(false))
 // },[])
  console.log(productos)
  


    const [cont, setCont] = useState(0)
    const [fecha, setFecha] = useState(Date())
    //set booleano
    const [bool, setBool] = useState(true)

    //useEffect (() => { // se ejecuta siempre que hay un renderizado
      //  console.log('holi1') 
    //})

    //useEffect (() => { // se ejecuta siempre que hay un renderizado pero con una rray vacio no se vuelve a renderizar
      //  console.log('holi1')
    //}, [])

   // useEffect (() => { // se ejecuta siempre que hay un renderizado
   //     console.log('holi1')
   // }, [bool]) // me admite props y booleanos y estados





    //let contador = 0 // variable de estado    
    const handleClick = () =>{
        setCont(cont + 1)      //contador++ // esto es igual a const contador = contador + 1
        setFecha(Date())
    }
//entonces asi el procedimiento apra le contador

  return (
    <div>      
        <div>{ cont }</div>
        <div>{ fecha }</div>
        {loading ?
        <h2>Cargando...</h2>
        : 
        productos.map(producto => <li key={producto.id}>{producto.name}</li>)}
        <button onClick= { () => setBool (!bool)}> CLick</button>
        <button onClick= { handleClick }>Click</button>
        <Input/>
    </div>
  )
}

export default ItemListConteiner