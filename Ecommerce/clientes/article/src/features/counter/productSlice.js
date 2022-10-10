import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { create, detailItemProduct, findserch, getUpdate, showArticle, suprimer, updateItem } from './actionProduct';
import { allvalue, initialState } from './initialValue';
import Alert from '@mui/material/Alert';
import { createCategory, deleteCategory, getCategory } from './actionCategory';
import { Login, registre } from "./authAction"
import { reduce } from './reducesProduct';
import { createCkout, deleteCommende, getChekout } from './actionChkout';



export const createArticles = createAsyncThunk(
  'articleproduct/createArticles',
  create

);
export const showProduct = createAsyncThunk(
  'articleproduct/showProduct',
  showArticle

);

export const detail = createAsyncThunk(
  'articleproduct/detail',
  detailItemProduct
);
export const deletItemProduct = createAsyncThunk(
  'articleproduct/deletItemProduct',
  suprimer
)

export const dataUpdate = createAsyncThunk(
  'articleproduct/dataUpdate',
  updateItem
)

export const valueUpdate = createAsyncThunk(
  "articleproduct/valueUpdate",
  getUpdate
)
/*************************Category****************** */
export const showCategory = createAsyncThunk(
  'articleproduct/showCategory',
  getCategory
)

export const writeCategory = createAsyncThunk(
  'articleproduct/writeCategory',
  createCategory
)
export const categoryDelete = createAsyncThunk(
  'articleproduct/categoryDelete',
  deleteCategory

)
export const serchFind = createAsyncThunk(
  'articleproduct/serchFind',
  findserch
)

////////////authentification
export const loginuseradmin = createAsyncThunk(
  'articleproduct/loginuseradmin',
  Login
)

export const inscription = createAsyncThunk(
  'articleproduct/inscription',
  registre
)


export const chkout = createAsyncThunk(
  'articleproduct/chkout',
  createCkout
)

export const getchekoutAdmin = createAsyncThunk(
  'articleproduct/getchekoutAdmin',
  getChekout
)
export const chekoutDelete=createAsyncThunk(
'articleproduct/chekoutDelete',
  deleteCommende
)


/*************************endCategory******** */

export const productesSlice = createSlice({
  name: 'articleproduct',
  initialState: allvalue,
  reducers: reduce,

  extraReducers: {



    /****chkout****************** */
    [chkout.fulfilled]: (state, action) => {
      state.newvaluechekout = action.payload
    },

    /************* */
    /***************createItemProduct */
    [createArticles.fulfilled]: (state, action) => {
      state.article = action.payload
      state.status = "succes"

    },
    /***************************** */


    /***********aficher Item Product */

    [showProduct.pending]: (state, action) => {
      state.status = 'loadding'
    },
    [showProduct.fulfilled]: (state, action) => {
      state.getitem = action.payload
      state.getitemSerch = action.payload
      state.status = 'secces'
    },
    [showProduct.rejected]: (state, action) => {
      state.status = 'rejeter'
    },
    /***************** */
    [detail.fulfilled]: (state, action) => {
      state.detaille = action.payload
      state.status = 'succes'
    },


    deletItemProduct: (state, action) => {
      state.getitem = state.getitem.filter((e) => e._id !== action.payload)
    },

    [dataUpdate.fulfilled]: (state, action) => {
      state.updateProductions = action.payload
      state.status = "secces"
    },
    // [valueUpdate.fulfilled]:(state,action)=>{
    //   state.updateProductions=action.payload
    //   state.status='secces'
    // },


    /******************Category*************** */
    [showCategory.fulfilled]: (state, action) => {
      state.categoryvalue = action.payload
      state.status = 'succes'
    },

    [writeCategory.fulfilled]: (state, action) => {
      state.createCategory = action.payload
      state.status = 'succes'
    },
    [serchFind.fulfilled]: (state, action) => {
      state.categoryvalue = action.payload
      state.status = 'succes'
    },

    [categoryDelete.fulfilled]: (state, action) => {
      state.categoryvalue = state.categoryvalue.filter((item) => item._id != action.payload)


      state.status = 'secces'
    },
    /*************************end Category****** */
    [loginuseradmin.fulfilled]: (state, action) => {
      state.loginUser = action.payload
      // state.loginToken = action.payload

      // state.verify=action.payload.user


      state.status = 'secces'
    },
    [inscription.fulfilled]: (state, action) => {
      state.signupuser = action.payload
      state.status = "secces"
    },


    /***********authentification */

    [getchekoutAdmin.fulfilled]: (state, action) => {
      state.chekoutGet = action.payload
      state.chekoutGetfilter=action.payload
    },
    [chekoutDelete.fulfilled]:(state,action)=>{
      state.chekoutGet=state.chekoutGet.filter((item)=>item._id!==action.payload)
    }

  }




});

export const { addItemProduct, deletItem, addContiter, decrementContity, filterItem, secces, filterWithSelect, afiche, deleteDelete, deleteToken, addChekout, seccesChekout, filedPassword, chekValidePanier, index,filterCin,filterInAdmin,cacherSlider,aficheSlider } = productesSlice.actions;

export const panier = (state) => state.articleproduct.value;
export const filtrage = (state) => state.articleproduct.getitem


export const itemDetail = (state) => state.articleproduct.detaille



export const showAllProduct = (state) => state.articleproduct.getitem;




/***************Category****** */
export const showGetCategory = (state) => state.articleproduct.categoryvalue
/**************end Category */

export const findtofserch = (state) => state.articleproduct.getitem


/***************sercher */
// export const serchFilter = (state) => state.article.sercher


export const loginInformation = (state) => state.articleproduct.loginUser
export const logintoken = (state) => state.articleproduct.loginToken
export const conditionafiche = (state) => state.articleproduct.condition
export const conditionValider = (state) => state.articleproduct.valider

export const createArticleproduct = (state) => state.articleproduct.article



export const misAjour = (state) => state.articleproduct.updateProductions

export const userCreate = (state) => state.articleproduct.signupuser


export const validchekout = (state) => state.articleproduct.newvaluechekout

export const verifyPanier = (state) => state.articleproduct.validePanier


export const prix = (state) => state.articleproduct.x

export const chkoutAdmin=(state)=>state.articleproduct.chekoutGet



/*********for admin**** */
export const verifyCreate=(state)=>state.articleproduct.article



/*************** */
export const displayNoneSlider=(state)=>state.articleproduct.slider

export default productesSlice.reducer;
