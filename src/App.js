import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {

  const qty = useSelector(state => state.cart.quantity);

  return (
    <Layout>
      {qty > 0 ? <Cart /> : null}
      <Products />
    </Layout>
  );
}

export default App;
