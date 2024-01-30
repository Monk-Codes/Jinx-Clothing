import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import Product from "./components/Product.jsx";
import ContextProvider from "./store/ShoppingCart.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";

function App() {
 return (
  <ContextProvider>
   <Header />
   <Shop>
    {DUMMY_PRODUCTS.map((product) => (
     <li key={product.id}>
      <Product {...product} />
     </li>
    ))}
   </Shop>
  </ContextProvider>
 );
}

export default App;
