import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const produts = [
  {
    id: 1,
    title: "Product1",
    price: 23.0,
    description: "The first product desc",
  },
  {
    id: 2,
    title: "Product2",
    price: 55.0,
    description: "The second product desc",
  },
  {
    id: 3,
    title: "Product3",
    price: 6.0,
    description: "The third product desc",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {produts.map((p) => (
          <ProductItem
            title={p.title}
            price={p.price}
            description={p.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
