import "./App.css";
import ProductGallery from "./components/ProductGallery";
import productList from "../src/data/productList.json";

function App() {
  return (
    <div className="App">
      <ProductGallery products={productList.products} />
    </div>
  );
}

export default App;
