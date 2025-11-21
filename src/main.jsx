import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './app/store.js'
import { Provider } from 'react-redux'
import { fetchProducts } from './Slices/ProductSlice.js'

const root=createRoot(document.getElementById('root'));

async function mountMain(){
  await store.dispatch(fetchProducts());

  root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
}

mountMain();




