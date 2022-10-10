import { MenuItem, Select } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { dataUpdate, detail, itemDetail, misAjour, showAllProduct, showGetCategory, showProduct, valueUpdate } from '../../features/counter/productSlice'
import { Button, Container, Form, Input, Link, Title, Wrapper } from '../../user/Login/styleUserLogin'

const Update = () => {
    let { idprod } = useParams()
    
    const updateRef=useRef()

    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => { dispatch(dataUpdate(idprod)) }, [dispatch,idprod])
    const formdataupdate = useSelector(misAjour)
    console.log(formdataupdate)

    const [update, setUpdate] = useState("")

    useEffect(() => {
        if (formdataupdate) {
            setUpdate(formdataupdate)
        }
    }, [formdataupdate])
    

    const { title, content, image, price } = update
    const handelUpdate = () => {

        dispatch(dataUpdate(update))
        .then(navigate('/admin'))
    }
    // console.log(update)

    const functionUpdate = async () => {

        const data = {
            title: title,
            content: content,
            image: image,
            price: price
        }
        const res = await axios.post(`http://127.0.0.1:5000/api/update=itemUpdate/${idprod}`, data).then(navigate('/admin'))
        // .then(navigate("/admin"))
        console.log(res)
    }


    // const article = useSelector(showAllProduct).categoryProd
    // console.log(article)
    // useEffect(() => { dispatch(showProduct()) }, [dispatch])

    return (
        <div>

            < Container >
                {!formdataupdate ? <div>lodding...</div> :
                    <Wrapper>
                        <Title>SIGN IN</Title>

                        <Input placeholder="title"  value={title} onChange={((e) => setUpdate({ ...update, title: e.target.value }))} />
                        <Input placeholder="content"  value={content} onChange={((e) => setUpdate({ ...update, content: e.target.value }))} />
                        <Input placeholder="image"  value={image} onChange={((e) => setUpdate({ ...update, image: e.target.value }))} />
                        <Input placeholder="price"  value={price} onChange={((e) => setUpdate({ ...update, price: e.target.value }))} />

                        {/* <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={category._id}
                            // value={article.category}
                            onChange={((e) => { setUpdate({ ...update, category: e.target.value }) })}

                        // label="Age"
                        // onChange={handleChange}
                        >
                            {article.map((e, index) => <MenuItem key={index} value={title} >{e.title}</MenuItem>)}


                        </Select> */}
                        <Button onClick={functionUpdate}>update</Button>
                        <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                        <Link  >CREATE A NEW ACCOUNT</Link>


                    </Wrapper>
                }
            </Container >



        </div>
    )
}

export default Update


