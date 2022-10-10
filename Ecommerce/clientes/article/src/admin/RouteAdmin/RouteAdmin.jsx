import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { loginInformation, logintoken } from '../../features/counter/productSlice'
import Progress from '../../user/Route/Progress'
import Category from '../CategoryAdmin/Category'
import ItemProductAdmin from '../ItemProdutAdmi/ItemProductAdmin'
import PropsItemProduct from '../ItemProdutAdmi/PropsItemProduct'
import NewItemProduct from '../NewItem/NewItemProduct'
import PropsNewItem from '../NewItem/PropsNewItem'
import OutletAdmin from '../outletteAdmin/OutletAdmin'
import { ProtectRoute } from '../protectRoutesAdmin/ProtectRoute'
import Update from '../updateItemProduct/Update'
import CustomizedTable from '../ListeClient/client'
import Clients from '../ListeClient/client'
import NewUserGlobal from '../NewAdmin/NewUserGlobal'

const LazyOutlette = React.lazy(() => import('../outletteAdmin/OutletAdmin'))
const Lazypropsitem = React.lazy(() => import('../ItemProdutAdmi/PropsItemProduct'))


const RouteAdmin = () => {

    const user = useSelector(loginInformation)


    return (
        <div>
            <Routes>
                <Route element={<ProtectRoute user={user} />}>
                    <Route path='/admin' element={
                        <React.Suspense fallback={<Progress />}>
                            <LazyOutlette />
                        </React.Suspense>}>
                        <Route path='/admin' element={
                            <React.Suspense fallback={<Progress />}>
                                <Lazypropsitem />
                            </React.Suspense>
                        }></Route>

                        <Route path='/admin/create' element={<PropsNewItem />}></Route>
                        <Route path='/admin/category' element={<Category />}></Route>
                        <Route path='/admin/update/:idprod' element={<Update />}></Route>
                        <Route path='/admin/Clients==name/cin/telephone/adress' element={<Clients />}></Route>

                        <Route path='/admin/create===newAdmin' element={<NewUserGlobal />}></Route>


                    </Route>
                </Route>

            </Routes>





        </div>
    )
}

export default RouteAdmin