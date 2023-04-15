import { useEffect } from 'react'
import { Routes,Route } from 'react-router-dom'
import Header from "./components/layout/Header/Index"
import Footer from "./components/layout/Footer/Index"
import Homepage from "./components/homepage/Index"
import Search from "./components/search/Index"
import Product from "./components/product/Index"
import Chekout from "./components/checkout/Index"
import Profile from "./components/profile/Index"
import Notfound from "./components/Notfound"
import Alert from './components/layout/Alert'
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'
// Redux
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react';
import {store,persistor} from "./store"
// private route
import PrivateRoute from './components/routing/PrivateRoute'


if(localStorage.token) {
  setAuthToken(localStorage.setAuthToken);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  },[]);

  return (
    <>
    <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Header />
      <Alert />
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/search/:type' element={<Search />}></Route>
        <Route path='/product/:id' element={<Product />}></Route>
        <Route path='/checkout' element={<Chekout />}></Route>
        <Route path='/' element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path="*" element={<Notfound />}/>
      </Routes>
      <Footer />
      </PersistGate>
    </Provider>
    </>
  );
}

export default App
