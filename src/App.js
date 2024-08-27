import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Homepage from "../src/pages/homepage.jsx";
import Product from "../src/pages/product.jsx";
import Product1 from "../src/pages/product1.jsx";
import Product2 from "../src/pages/product2.jsx";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route path="/product" element={<Product />} />
          <Route path="/product1" element={<Product1 />} />
          <Route path="/product2" element={<Product2 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
