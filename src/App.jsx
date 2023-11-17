import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './Componant/User/Index'
import Create from './Componant/User/Create'
import Details from './Componant/User/Details'
import Edit from './Componant/User/Edit'

function App() {
  return (
<Routes>
<Route path='/' element={<Index />}/>
<Route path='/user/index' element={<Index />} />
<Route path='/user/create' element={<Create />}/>
<Route path='/user/:id' element={<Details />}/>
<Route path='/user/edit/:id' element={<Edit />}/>

<Route path='*' element={<h2>User Not Found</h2>} />



</Routes>  
)
}

export default App