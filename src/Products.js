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
        title: "Chris de la Piscine (AKA Miaouss de Galar)",
        price: 40000,
        isPublished: true
    }
    ]
    return (   
        <div>     
            {products.map((product) => {
                return (
                    <article>
                        {product.isPublished ? (
                            <>
                            <h2>{product.title}</h2>
                            <p>{product.price}</p>
                            </>
                        ) 
                        : 
                        (
                            <>
                            <p>Rien à afficher</p>
                            </>
                        )
                        }
                    </article>
                        )
            })}  
        </div>  
    )
} 

export default Products;