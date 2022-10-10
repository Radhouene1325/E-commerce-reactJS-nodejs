import React from 'react'
import { Add, Remove } from "@material-ui/icons";
import { Bottom, Button, Container, Details, Hr, Image, Info, PriceDetail, Product, ProductAmount, ProductAmountContainer, ProductColor, ProductDetail, ProductId, ProductName, ProductPrice, ProductSize, Summary, SummaryItem, SummaryItemPrice, SummaryItemText, SummaryTitle, Title, Top, TopButton, TopText, TopTexts, Wrapper } from './panierStyles';
import { useDispatch, useSelector } from 'react-redux';
import { addContiter, addp, chekValidePanier, decrementContity, index, loginInformation, panier, prix, verifyPanier } from '../../features/counter/productSlice';
import Alert from '@mui/material/Alert';
import { Navigate, useNavigate } from 'react-router-dom';
import Announcement from './Announcement';
import ValidePanier from './toastValidePanier';

const Panier = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cart = useSelector(panier)
    console.log(cart)

    // const totale=cart.reduce((index,item)=>{return index+item.priceTotale},0)
    // console.log(totale)
    const userlog = useSelector(loginInformation)
    console.log(userlog)
    /************************************valide panier */
    const [opene, setOpene] = React.useState(false);

    const handleClick = () => {
        setOpene(true);
    };

    const handleClosee = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpene(false);
    };

    const valider = useSelector(verifyPanier)
    console.log(valider)

    /*****************************************valide panier */
    const handelChekout = () => {
        if (cart.length === 0) {
            dispatch(chekValidePanier())

        } else
            if (userlog.isAdmin === false) {
                navigate('/chkout')
            } else {
                navigate('/chekouLogin')
            }

    }

    const somme = useSelector(prix)
    console.log(somme)


    return (
        <div>
            <Container>
                <Announcement />
                <Wrapper>

                    <ValidePanier opene={opene} handleClosee={handleClosee} valider={valider} />

                    <Title>YOUR BAG</Title>
                    <Top>
                        <TopButton onClick={(() => { navigate('/') })}>CONTINUE SHOPPING</TopButton>
                        <TopTexts>
                            <TopText>Shopping Bag(2)</TopText>
                            <TopText>Your Wishlist (0)</TopText>
                        </TopTexts>
                        <TopButton type="filled">CHECKOUT NOW</TopButton>
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
                                        <ProductPrice>$ priTotale {

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
                                <SummaryItemPrice>dt {

                                     somme
                                }</SummaryItemPrice>
                            </SummaryItem>
                            <Button onClick={(() => { handelChekout(); handleClick() })}>CHECKOUT NOW</Button>
                        </Summary>
                    </Bottom>
                </Wrapper>

            </Container>
        </div>
    )
}

export default Panier