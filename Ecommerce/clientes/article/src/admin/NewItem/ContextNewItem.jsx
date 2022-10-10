
import React, { createContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createArticles, showCategory, showGetCategory, showProduct, verifyCreate } from '../../features/counter/productSlice'
export const ItemContex = createContext()

export const ContextNewItem = (Props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const [article, setArticle] = useState({
        title: '',
        content: '',
        image: '',
        price: '',
        category: ''
    })
    const handelSend = (e) => {
        e.preventDefault()
        dispatch(createArticles(article)).then(dispatch(showProduct())).then(handleClick())
        
        // .then(navigate('/admin'))

    }

    useEffect(() => { dispatch(showCategory()) }, [dispatch])

    const AllCategory = useSelector(showGetCategory)
    // console.log(AllCategory)
    console.log(article)

    const create = useSelector(verifyCreate)
    console.log(create)
    return (
        <>
            <ItemContex.Provider value={{ setArticle, article, AllCategory, navigate, handelSend,open,handleClose,create }}>
                
                {Props.children}

            </ItemContex.Provider>
        </>
    )
}

