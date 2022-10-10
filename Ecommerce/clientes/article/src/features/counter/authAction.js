import axios from "axios"

export const Login = async (userwrite) => {
    const res = await axios.post('http://127.0.0.1:8800/api/auth/signin', userwrite)
    console.log(res)
    const data = await res.data
    console.log(data)
   return data

}

export const registre = async (formdata) => {
    const res = await axios.post('http://127.0.0.1:8800/api/auth/signup', formdata)
    console.log(res)
    const data=await res.data
    return data
}