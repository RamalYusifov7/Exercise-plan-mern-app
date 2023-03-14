 //*                                      React Router Dom 


//^ App.js for react-router
 import './App.css'
 import {
   BrowserRouter as Router,
   Routes,
   Route,
 } from "react-router-dom";
 import { Navbar } from './components/index';
 import { Home } from './pages/index';
 
 
 function App() {
   return (
     <Router>
       <Navbar />
       <Routes>
         <Route path='/' element={<Home />} />
       </Routes>
     </Router>
   )
 }
 
// export default App
 

 
 //*                                Redux toolkit 



// --STORE.js

import { configureStore } from '@reduxjs/toolkit'
export const store = configureStore({
  reducer: {},
})




//  SLICE.js

import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const counterSlice = createSlice({
  name: '',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    }
  },
   extraReducers: (builder) => {
    builder
      .addCase(__, (state, action) => {
        
      })
  }
})

export const {  } = counterSlice.actions
export default counterSlice.reducer





// -createAsyncThunk 

const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (u_, thunkAPI) => {
    const response = await userAPI.fetchById(userId)
    return response.data
  }
)


// main js

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './features/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)


// *                                     Custom Axios



import axios from "axios";

export const globalApi =axios.create({
    baseURL:import.meta.env.VITE_APP_
})


 //*                                       Context API
import { createContext } from "react";

const GlobalContext=createContext()

export const GlobalContextProivder=({children})=>{
    return(
        <GlobalContext value={{}}>
            {children}
        </GlobalContext>
    )
}