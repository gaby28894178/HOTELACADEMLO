import axios from "axios"
import { useState } from "react"
import getConfigToken from "../services/getConfigToken"


const userCrud = () => {

  const [response, setResponse] = useState()





// GET
const getApi =(url,withToken)=>{
    axios.get(url,withToken? getConfigToken():{})
    .then(res=>setResponse(res.data))
    .catch(err=>console.log(err))
}

// CREATE
const posApi =(url,data,withToken)=>{
    axios.post(url,data,withToken?getConfigToken():{} )
    .then(res => {setResponse(response ? [...setResponse, res.data]:[res.data])


    })
    .catch(err => console.log(err))
    
}


// DELET

const deleteApi =(url,withToken)=>{
    axios.delete(url,withToken? getConfigToken():{})
    .then(res => {
        
        const id = url.split('/').at(-1)
        setResponse(response.filtet( e => id!==e.id))
    })
    .catch(err =>console.log(err))

}


//UPDATE
const updateApi =(url, data, withToken)=>{
    axios.put(url, data, withToken ? getConfigToken() : {})
      .then(res => {
        const updatedItem = res.data;
        setResponse(response.map(item => item.id === updatedItem.id ? updatedItem : item));
      })
      .catch(err => console.log(err))

}

return [response, getApi, posApi, deleteApi, updateApi]
}
export default userCrud
