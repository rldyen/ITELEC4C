function Product(props) {

    const onCart = () => {
        alert(`${props.name} has been added to Cart.`)
    }

    const onFave = () => {
        alert(`${props.name} has been added to Favorites.`)
    }

    return (
        <div className="product">
            <img 
                className="productImage"
                src={props.img} 
                alt={props.alt} />
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
            <h4>{props.price}</h4>

            <button
                className="btnCart"
                onClick = {onCart}>
                Add to Cart
            </button>

            <button
                className="btnFave"
                onClick = {onFave}>
                Add to Favorites
            </button>

        </div>
    )
}

export default Product;