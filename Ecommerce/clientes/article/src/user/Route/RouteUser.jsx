import React from 'react'

import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import { loginInformation } from '../../features/counter/productSlice'
import PropsDetail from '../detailProduct/PropsDetail'
import Inscription from '../InscriptionUser/Inscription'

import Chekout from '../Panier/Chekout'

import {RoutePublic} from '../publicRoute/RoutePublic'
import Notfound from '../serche/Notfound'
import ProdFilterSerch from '../serche/ProdFilterSerch'
import Slider from '../Slider/Slider'
import Progress from './Progress'
import LoginPassChekout from '../Panier/LoginPassChekout'

const LazyOutlette = React.lazy(() => import('../Outlet/Outlette'))
const Lazylogin = React.lazy(() => import('../Login/UserLogin'))
const LazyProduct = React.lazy(() => import('../Product/Products'))
const LazyPanier = React.lazy(() => import('../Panier/Panier'))




const RouteUser = () => {
    const user = useSelector(loginInformation)


    return (


        <Routes>
            {/* <Route path='/admin' element={<OutletAdmin/>}></Route> */}
            <Route element={<RoutePublic user={user} />}>

                <Route path='/' element={  <LazyOutlette />}>

                    <Route path='/' element={
                        <>
                            <Slider />
                            <LazyProduct />
                        </>

                    }></Route>
                    <Route path='/panier' element={
                        <React.Suspense fallback={ <Progress /> }>
                            <LazyPanier />
                        </React.Suspense>

                    }></Route>
                    <Route path='/detail/:id' element={<PropsDetail />}></Route>
                    <Route path='/login' element={
                        <React.Suspense fallback={<Progress />}>
                            <Lazylogin />
                        </React.Suspense>
                    }></Route>
                    <Route path='/inscription' element={<Inscription />}></Route>
                    <Route path='/filter' element={<ProdFilterSerch />}></Route>
                    <Route path='/notfound' element={<Notfound />}></Route>
                    <Route path='/chkout' element={<Chekout/>}></Route>

                    <Route path='/chekouLogin' element={<LoginPassChekout/>}></Route>




                </Route>

            </Route>
        </Routes>


    )

}

export default RouteUser


