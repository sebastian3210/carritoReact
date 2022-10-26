

const productos =[
    {id:'1', name: 'sebastian', apellido: 'pastor', age: 33, carrera: 'casi Historiador'},
    {id:"2", name: 'Melisa', apellido: 'Rota', age: 30, carrera: 'Ingeniera'},
    {id:"3", name: 'Marcos', apellido: 'Mardajian', age: 28, carrera: 'M. Mayor de OBras'},
    {id:"4", name: 'Camila', apellido: 'pastor', age: 27, carrera: 'Diseñadora de interiores'}
]

export const gFetch = () => {
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(productos)
        }, 3000)
        
    })
}