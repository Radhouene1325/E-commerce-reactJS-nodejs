import React from 'react'

import { ContextNewItem } from './ContextNewItem'
import NewItemProduct from './NewItemProduct'
import Toast from './tost'


const PropsNewItem = () => {
  
  return (


      <ContextNewItem>
        <NewItemProduct />
        <Toast/>
      </ContextNewItem>


   
  )
}

export default PropsNewItem