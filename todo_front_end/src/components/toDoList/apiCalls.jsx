import {get,post,put} from './actions'

export const getExistingToDos = ()=>{
    return new Promise((resolve,reject)=>{
        get(`ToDos`).then((response)=>{
            if(response.data.result!=null)
            resolve(response.data.result)
            else reject([])
        }).catch((error)=>{
            console.error('getExistingToDos',error)
        })
    })
}