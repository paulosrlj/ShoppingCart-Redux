import { useSelector } from 'react-redux';
import classes from './CartButton.module.css';

const CartButton = (props) => {

  const total = useSelector(state => state.cart.quantity)

  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{total}</span>
    </button>
  );
};

export default CartButton;
