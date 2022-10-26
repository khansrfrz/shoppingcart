import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import React,{ useState } from 'react';

function App() {


  const [product,setProduct] =useState([
    {
      url:'https://cdn.pixabay.com/photo/2016/11/23/06/57/isolated-t-shirt-1852114_960_720.png' ,
      name: 'Cotton Tshirt'   ,
      description:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, eaque.'  ,
      price: 550 
    },
    {
      url:'https://cdn.pixabay.com/photo/2017/01/13/04/56/t-shirt-1976334_960_720.png' ,
      name: 'white Tshirt'   ,
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, eum.'  ,
      price: 250 
    },
    {
      url:'https://cdn.pixabay.com/photo/2016/11/23/06/57/isolated-t-shirt-1852113_960_720.png' ,
      name: 'Cotton Tshirt'   ,
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, labore?'  ,
      price: 550 
    },
  ])
     
  const [cart , setCart] = useState([])
  const [showCart,setShowCart]= useState(false)

  const addToCart =(data)=> {
    setCart([...cart, { ...data , quantity:1 }])

  } 
   

  const handleShow=(value)=>{
   setShowCart(value)

  }

  return (
    <div>
    <Header count={cart.length} 
    handleShow={handleShow}></Header>

    {
      showCart ?
      <CartList cart={cart}></CartList>:
      <ProductList product={product} addToCart={addToCart}></ProductList>
    }
    
    </div>

  );
}

export default App;