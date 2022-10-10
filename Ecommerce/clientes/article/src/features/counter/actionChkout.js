import axios from "axios"

export const createCkout=async(chek)=>{
    const res = await axios.put('http://127.0.0.1:5000/api/chekout',chek)
    console.log(res)
    const data=await res.data
    return data
}

export const getChekout=async()=>{
    const res = await axios.get('http://127.0.0.1:5000/api/chekout')
    const data=await res.data
    return data.data
}

export const deleteCommende=async(id)=>{
    const res=await axios.delete(`http://127.0.0.1:5000/api/delet/${id}`)
    const data=await res.data
    return data
}