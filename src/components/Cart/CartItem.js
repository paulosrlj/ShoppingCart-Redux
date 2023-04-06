import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart';

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;

  const dispatch = useDispatch();

  function handleIncreaseItem () {
    dispatch(cartActions.increaseProductQty(title));
  }

  function handleDecreaseItem () {
    dispatch(cartActions.decreaseProductQty(title));
  }
  
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleDecreaseItem}>-</button>
          <button onClick={handleIncreaseItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
