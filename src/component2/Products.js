import Product from "./Product"

function Products ( { products}) 
{

    return (<div>
        {console.log(products, "IT's me")}

        <ul>
        {products.map(product => (
          <li key={product.id}>
            <Product product = {product}></Product>
          </li>
        ))}
      </ul>
    </div>)
}   

export default Products