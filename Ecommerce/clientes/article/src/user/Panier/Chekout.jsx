import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addChekout, addContiter, chkout, decrementContity, index, panier, prix, validchekout } from '../../features/counter/productSlice'
import { Bottom, Button, Container, Details, Hr, Image, Info, PriceDetail, Product, ProductAmount, ProductAmountContainer, ProductColor, ProductDetail, ProductId, ProductName, ProductPrice, ProductSize, Summary, SummaryItem, SummaryItemPrice, SummaryItemText, SummaryTitle, Title, Top, TopButton, TopText, TopTexts, Wrapper } from './panierStyles';
import { useNavigate } from 'react-router-dom'
import { Alert } from '@mui/material'
import { Add, Remove, SettingsPowerSharp } from '@material-ui/icons'
import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core'
import AlertDialogSlide from './buttonChekout'

export const ChekoutContext = React.createContext()
const Chekout = () => {
    const somme = useSelector(prix)
    console.log(somme)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [save, setSave] = useState({
        name: '',
        telephone: '',
        product: '',
        cin: '',
        adress: '',
        totale: somme

    })
    const cart = useSelector(panier)
    console.log(cart)



    const handelChekout = () => {
        dispatch(chkout(save))
    }

    const [show, setShow] = useState([])
    const getChek = async () => {
        const res = await axios.get('http://127.0.0.1:5000/api/chekout')
        const data = await res.data
        setShow(data)
    }
    useEffect(() => { getChek() }, [])
    console.log(save)






    return (
        <div>

            <Container>

                <Wrapper>
                    <Title>YOUR BAG</Title>
                    <Top>
                        <TopButton >CONTINUE SHOPPING</TopButton>

                        <TopTexts>
                            <TopText>Shopping Bag(2)</TopText>
                            <TopText>Your Wishlist (0)</TopText>
                        </TopTexts>
                        <TopButton type="filled">
                            <ChekoutContext.Provider value={{ save, setSave, cart, handelChekout }}>
                                <AlertDialogSlide />
                            </ChekoutContext.Provider>
                        </TopButton>
                    </Top>
                    <Bottom>
                        <Info>
                            {cart.length === 0 ? <Alert variant="filled" severity="error">
                                Il n'y a plus d'articles dans votre panier
                            </Alert> : cart.map((e) =>
                                <Product>
                                    <ProductDetail>
                                        <Image src={e.image} />
                                        <Details>
                                            <ProductName>
                                                <b>Product:</b> JESSIE THUNDER SHOES
                                            </ProductName>
                                            <ProductId>
                                                <b>ID:</b> 93813718293
                                            </ProductId>
                                            <ProductColor color="black" />
                                            <ProductSize>
                                                <b>Price:{e.price} </b>
                                            </ProductSize>
                                        </Details>
                                    </ProductDetail>
                                    <PriceDetail>
                                        <ProductAmountContainer>

                                            <Add onClick={(() => { dispatch(addContiter(e)); dispatch(index()) })} />
                                            <ProductAmount>{e.quantity}</ProductAmount>
                                            <Remove onClick={(() => { dispatch(decrementContity(e)); dispatch(index()) })} />
                                        </ProductAmountContainer>
                                        <ProductPrice>$ {

                                            e.quantity === 1 ? e.price : e.priceTotale
                                            // e.priceTotale

                                        }</ProductPrice>


                                    </PriceDetail>
                                </Product>

                            )}
                            <Hr />

                        </Info>
                        <Summary>
                            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice>$ 80</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Estimated Shipping</SummaryItemText>
                                <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Shipping Discount</SummaryItemText>
                                <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type="total">
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice>$ {somme}</SummaryItemPrice>
                            </SummaryItem>

                            {/* <Button onClick={(() => { navigate('/chkout') })}>continuer</Button> */}
                        </Summary>
                    </Bottom>
                </Wrapper>

            </Container>
        </div>
    )
}

export default Chekout