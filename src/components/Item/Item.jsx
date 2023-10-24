import { Link, useNavigate } from "react-router-dom"

//desestructuro las propiedadaes del obj
const Item = ({ id, title, img, price, stock }) => {

    //para manejar la navegacion de mi app
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.stopPropagation()
        console.log('click en el item')
    }

    return (
        <div onClick={handleClick} style={{ marginBottom: 20}}>
            <h2>{title}</h2>
            <img src={img} style={{ width: 200}}/>
            <h3 className="info">stock disponible: {stock}</h3>
            <h4 className="precio">{price}$UYU</h4>
            <button onClick={() => navigate('/item')}>+ info</button>
            {/* <Link to={`/item/${id}`}>Ver detalle</Link> */}
        </div>
    )
}

export default Item