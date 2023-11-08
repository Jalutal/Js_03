function Products() {
    const products = [ "Pikachu", "Salamèche", "Chris de la Piscine"]
    return (   
        <div>     
            {products.map((product) => {
                return (
                    <article>
                    <h2>{product}</h2>
                    </article>
                );
            })}
          
        
        </div>  
    )
} 

export default Products;