import './Product.css'
function Product ({product})
{



    return (<div className='Card'>
        <img src={product.imgUrl}
        className='Product'
        ></img>
        <label>{product.name}</label>
        <label>Price: {product.price}₸</label>
        <button>To Bin</button>
    </div>)
}


export default Product;