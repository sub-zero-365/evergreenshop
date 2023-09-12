import { Routes, Route, createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import RootElement from './components/RootElement';
import Home from './pages/Home';
import About from './pages/About';
import Product, { loader as productLoader } from './pages/Product';
import ErrorElement from './components/ErrorElement';
import ShoppingBag from './pages/ShoppingBag';
import Shop from './pages/Shop';
import ProductCart from './components/ProductCart';
import ProductCategory, { loader as ProductCategoryLoader } from './pages/ProductCategory';

const router = createBrowserRouter([
  {
    element: <RootElement />,
    path: "/",
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about-us",
        element: <About />
      },
      {
        path: "product/:id",
        element: <Product />,
        loader: productLoader
      },
      {
        path: "shopping-bag",
        element: <ShoppingBag />,

      },
      {
        path: "product-category/:id",
        element: <ProductCategory />,
        loader: ProductCategoryLoader
      },
      {
        path: "shop",
        element: <Shop />,

      },
    ]
  }
])
function App() {
  return (
    <div className="App">
      <RouterProvider
        router={router}
      />
    </div>
  );
}

export default App;
