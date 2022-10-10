import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addItemProduct } from '../../features/counter/productSlice'
import { Circle, Container, Icon, Image, Info } from '../Product/prodPropsStyles'
import './srchc.css'
const PropsFilterProduct = (props) => {
  const{item}=props
  const dispatch=useDispatch()
  const navigate=useNavigate()
  return (
    <div className='serch'>
        <Container >
                <Circle />
                <Image src={item.image} />
                <Info>
                    <Icon>
                        <ShoppingCartOutlined
                          onClick={(()=>{ dispatch(addItemProduct(item))})}
                          />
                       
                    </Icon>
                    <Icon>
                        <SearchOutlined
                          onClick={(()=>{navigate(`/detail/${item._id}`)})}
                         />
                    </Icon>
                    <Icon>
                        <FavoriteBorderOutlined />
                    </Icon>
               
                </Info>
            </Container> 
    </div>
  )
}

export default PropsFilterProduct