import React from 'react'
import aboutus from './aboutus'
import cart from './cart'
import contactus from './contactus'
import error from './error'
import home0 from './home'
import login from './login'
import shop from './shop'
import { BrowserRouter , Routes , Route } from 'react-router-dom'

const layout = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='home'element={<home/>}></Route>
        <Route path='contact'element={<contact/>}></Route>
        <Route path='about'element={<about/>}></Route>
        <Route path='cart'element={<cart/>}></Route>
        <Route path='login'element={<login/>}></Route>
        <Route path='shop'element={<shop/>}></Route>
        <Route path='*'element={<error/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default layout
