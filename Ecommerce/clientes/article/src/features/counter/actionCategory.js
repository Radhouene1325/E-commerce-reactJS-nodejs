import axios from 'axios'
export const getCategory = async () => {
    const res = await axios.get('http://127.0.0.1:5000/apiCategory/show=category')
    console.log(res)
    const data = await res.data
    console.log(data)
    return data.data
}


export const createCategory = async (category) => {
    const res = await axios.put('http://127.0.0.1:5000/apiCategory/create=category',category)
   
}

export const deleteCategory=async(id)=>{
    const res=await axios.delete(`http://127.0.0.1:5000/apiCategory/delet=owncategory/${id}`)
}