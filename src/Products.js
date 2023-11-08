function Products() {
    const products = [ {
        title: "Pikachu",
        price: 20,
        isPublished: true
    },
    {
        title: "Salamèche",
        price: 40,
        isPublished: true
    },
    {
        title: "Chris de la Piscine",
        price: 40000,
        isPublished: true
    }
    ]
    return (   
        <div>     
            {products.map((product) => {
                return (
                    <article>
                    <h2>{product.title}</h2>
                    <p>{product.price}€</p>                    
                    </article>
                );
            })}
          
        
        </div>  
    )
} 

export default Products;