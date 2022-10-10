import React from 'react'
import { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { Container, Arrow, Wrapper, Slide, ImgContainer, Image, InfoContainer, Title, Desc, Button } from './sliderStyles'
import { displayNoneSlider } from '../../features/counter/productSlice';
import { useSelector } from 'react-redux';
const sliderItems = [
    {
        id: 1,
        img: "https://i.ibb.co/XsdmR2c/1.png",
        title: "SUMMER SALE",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
        bg: "f5fafd",
    },
    {
        id: 2,
        img: "https://i.ibb.co/DG69bQ4/2.png",
        title: "AUTUMN COLLECTION",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
        bg: "fcf1ed",
    },
    {
        id: 3,
        img: "https://i.ibb.co/cXFnLLV/3.png",
        title: "LOUNGEWEAR LOVE",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
        bg: "fbf0f4",
    },
];

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };
    const slidere = useSelector(displayNoneSlider)
    console.log(slidere)
    return (
        <div>
            { slidere&&<Container>
                <Arrow direction="left" onClick={() => handleClick("left")}>
                    <ArrowLeftOutlined />
                </Arrow>
                <Wrapper slideIndex={slideIndex}>
                    {sliderItems.map((item) => (
                        <Slide bg={item.bg} key={item.id}>
                            <ImgContainer>
                                <Image src={item.img} />
                            </ImgContainer>
                            <InfoContainer>
                                <Title>{item.title}</Title>
                                <Desc>{item.desc}</Desc>
                                <Button>SHOW NOW</Button>
                            </InfoContainer>
                        </Slide>
                    ))}
                </Wrapper>
                <Arrow direction="right" onClick={() => handleClick("right")}>
                    <ArrowRightOutlined />
                </Arrow>
            </Container>}

        </div>
    )
}

export default Slider