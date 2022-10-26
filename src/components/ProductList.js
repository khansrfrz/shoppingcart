import '../App.css';

function ProductList({ product, addToCart }){
    return(
        <div className='flex'>
           {
            product.map((productItem,productIndex)=>{
              return(
                <div style={{ width:'33%'}}>
                <div classname='product-item'>
                    <img src={productItem.url} alt="img"/>
                    <p>{productItem.name} |<br></br> {productItem.description}</p>
                    <p>{productItem.price}</p>
                    <p> Rs. {productItem.price}/- </p>
                    <button onClick={()=>addToCart(productItem) }>Add To Cart</button>
                </div>
             </div> )
            })
           }
        </div>
    )
}

export default ProductList