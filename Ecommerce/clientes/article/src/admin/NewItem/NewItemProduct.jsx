import { FormControl, InputLabel, MenuItem, Select, TextareaAutosize } from '@material-ui/core';
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { createArticles, showGetCategory } from '../../features/counter/productSlice';
import { mobile } from "../../user/responsive";
import { ItemContex } from './ContextNewItem';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const NewItemProduct = () => {

  const { article, setArticle, AllCategory, handelSend, navigate } = useContext(ItemContex)
  return (

    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="title" onChange={((e) => { setArticle({ ...article, title: e.target.value }) })} />
          {/* <Input placeholder="content" onChange={((e) => { setArticle({ ...article, content: e.target.value }) })} /> */}

          <TextareaAutosize
            maxRows={10}
            aria-label="maximum height"
            placeholder=" taper le description de votre article"
           
           onChange={((e) => { setArticle({ ...article, content: e.target.value }) })}
            style={{ width: 466 ,height:80}}
          />
          <Input placeholder="price" onChange={((e) => { setArticle({ ...article, price: e.target.value }) })} />
          <Input placeholder="urlimage" onChange={((e) => { setArticle({ ...article, image: e.target.value }) })} />
          <Input placeholder="password" />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" >category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={category._id}
              // value={article.category}
              onChange={((e) => { setArticle({ ...article, category: e.target.value }) })}

            // label="Age"
            // onChange={handleChange}
            >
              {AllCategory.map((e, index) => <MenuItem key={index} value={e} >{e.title}</MenuItem>)}


            </Select>
          </FormControl>

          {/* <select name="choice" onChange={((e) => { setArticle({ ...article, category: e.target.value }) })}>
            {AllCategory.map((e)=> <option  value={e._id}>{e.title}</option>) }
           
           
          </select> */}
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handelSend}>CREATE</Button>
          <Button onClick={(() => { navigate('/admin') })}>GoBack</Button>
        </Form>
      </Wrapper>
    </Container>

  )
}

export default NewItemProduct