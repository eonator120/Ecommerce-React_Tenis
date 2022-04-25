import { Link } from 'react-router-dom';
import '../styles/Button.scss';
import '../styles/ProductList.scss';

const Item = ({producto }) => {
    // const loadImage = imageName => (require(`../images/${imageName}`).default);
    
    return (
    <article className='sunglass'>
        <img src={producto.imagen}  className="sunglass__img" alt={producto.nombre}/>
            <p className="sunglass__name">{producto.marca}</p>
            <span className="sunglass__name">{producto.nombre} - {producto.categoria}</span>
            <span className="sunglass__price">${producto.precio}</span>
            <Link className='button-outline' to={`/detalle/${producto.id}`}>Ver Producto</Link>
    </article>
    )
}

export default Item;