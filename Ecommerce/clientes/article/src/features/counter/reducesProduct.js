

export const reduce = {

  addItemProduct: (state, action) => {
    let index = state.value.findIndex(item => item._id === action.payload._id)
    if (index >= 0) {


      if (state.value[index].quantity >= 1) {

        alert('votre achat est existe au panier')

      } else {
        state.value[index].quantity = state.value[index].quantity + 1

      }
      // const totaleItems=state.value.reduce((totalep, item) => { return totalep + item.price * item.quantity },0)
      //state.value[index].priceTotale =  state.value[index].price* state.value[index].quantity
    } else {
      //state.value.push({ ...action.payload, quantity: 1, priceTotale: 1 })

      state.value = [...state.value, action.payload]
    }
  },

  index: (state, action) => {
    state.x = state.value.reduce((s, e) => {
      return (
        e.quantity === 1 ? s + e.price : s + e.priceTotale
      )
    }, 0)
  },



  addContiter: (state, action) => {
    let quantityItem = state.value.find(item => item._id === action.payload._id)
    //let prixtotal = state.value.findIndex(item => item._id === action.payload._id)
    quantityItem.quantity = quantityItem.quantity + 1

    quantityItem.priceTotale = quantityItem.price * quantityItem.quantity
    // state.value.reduce((initialValue, item) => { return initialValue + item.price * item.quantity },0)
    //
    // 
    // state.value=[...state.value,action.payload]
  },
  decrementContity: (state, action) => {
    let quantityItem = state.value.find((item) => item._id === action.payload._id)
    quantityItem.quantity = quantityItem.quantity - 1
    quantityItem.priceTotale = quantityItem.price * quantityItem.quantity
    if (quantityItem.quantity < 1) {
      state.value = state.value.filter(item => item._id !== action.payload._id)

    }
    // state.value=[...state.value,action.payload]
  },

  deletItem: (state, action) => {
    state.value = state.value.filter((item) => item._id !== action.payload)
  },

  filterItem: (state, action) => {
    let value = action.payload
    state.getitem.product = state.getitemSerch.product.filter((item) => { return item.category.title.toLowerCase().includes(value) })
  },

  filterInA: (state, action) => {
    let value = action.payload
    state.getitem.product = state.getitemSerch.product.filter((item) => { return item.category.title.toLowerCase().includes(value) })
  },


  filterWithSelect: (state, action) => {
    let index = state.getitem.categoryProd.find((item) => item.title.includes(action.payload))
    console.log(index)
    if (index.title === "All") {
      state.getitem.product = state.getitemSerch.product
    } else {

      state.getitem.product = state.getitemSerch.product.filter((item) => {
        return item.category.title === action.payload
      })
    }

  },

  addChekout: (state, action) => {
    state.newvaluechekout = []
  },
  seccesChekout: (state) => {
    state.newvaluechekout = []
    state.value = []
  },

  filedPassword: (state) => {
    state.loginUser = []
    state.condition = false
  },

  afiche: (state) => {

    state.condition = true
    state.status = "secces"

  },
  deleteDelete: (state) => {
    // state.condition = false
    state.loginUser = []
    state.condition = false
    // state.loginUser.isCorrect=[]
    state.status = "secces"
  },
  secces: (state) => {
    state.valider = true
    state.condition = false

  },
  deleteToken: (state, action) => {

    state.loginUser = []
    state.valider = false
  },
  chekValidePanier: (state) => {

    state.validePanier = true


  },
  /************for admin*****************/
  filterCin: (state, action) => {
    let value = action.payload
    state.chekoutGet = state.chekoutGetfilter.filter((item) => { return item.cin.toLowerCase().includes(value) })
  },

  cacherSlider:(state)=>{
    state.slider=false
  },
  aficheSlider:(state)=>{
    state.slider=true
  }


}