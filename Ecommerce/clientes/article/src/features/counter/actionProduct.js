import axios from 'axios'
export const create = async (article) => {
    const res = await axios.put('http://127.0.0.1:5000/api/create=product', article)
    console.log(res)
    const data=await res.data
    console.log(data)
    return data
   
}


export const showArticle = async () => {
   
   
    const res = await axios.get('http://127.0.0.1:5000/api/show=product')
    const data = await res.data
    console.log(data)
    return data.data


}

export const detailItemProduct = async (id) => {
    const res = await axios.get(`http://127.0.0.1:5000/api/detail=itemDetail/${id}`)
    const data = await res.data
    console.log(data)
    return data.detail
}


export const suprimer=async (id) => {
    const res = await axios.delete(`http://127.0.0.1:5000/api/delet=itemProduct/${id}`)

}

export const updateItem=async(id)=>{
    const res=await axios.post(`http://127.0.0.1:5000/api/update=itemUpdate/${id}`,{
        // body:JSON.stringify({
        //     title:update.title,
        //     content:update.content,
        //     image:update.image
        // })
    })
    console.log(res)

    const data=await res.data
    console.log(data)
    return data.data
}

export const getUpdate=async(id)=>{
    const res=await axios.get(`http://127.0.0.1:5000/api/update=itemUpdate/${id}`)
    console.log(res)
    const data=await res.data
    return data.data
}

export const findserch=async(id)=>{
    const res=await axios.get(`http://127.0.0.1:5000/api/searchArticle/${id}`)
    console.log(res)

}



/******************category */
