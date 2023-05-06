import '../styles/Home.css';
import { useRef } from 'react';

const Prod_cards = (props) => {
    const cardRef = useRef();
    return ( 
        <div className="card" ref={cardRef}>
            <div className="card-image-container">
                <img className='card-image' src = "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/FRONX/9243/1673943130006/front-left-side-47.jpg?tr=w-456" alt="img"/>
            </div>
            <div className="card-details">
                <h2 className='card-brand'>{props.brand}</h2>
                <h2 className='card-model'>{props.model}</h2>
                <h4 className='card-price'>{props.price}</h4>
            </div>
        </div>
     );
}
 
export default Prod_cards;