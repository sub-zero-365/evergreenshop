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
import NotFound from './pages/NotFound';
import Auth from './pages/Auth';
import requireAurthed from './utils/requireAuth';
import User, { loader as UserLoader } from './pages/User';
import Strains from './pages/Strains'
import Recipes from './pages/Recipes.js'
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
      {
        path: "auth",
        element: <Auth />,
      },
      {
        path: "user",
        element: <User />,
        loader: requireAurthed

      },
      {
        path: "category/strains",
        element: <Strains />,
        // loader: requireAurthed

      },
      {
        path: "category/recipes",
        element: <Recipes />,
        // loader: requireAurthed

      },
    ]
  }, {
    path: "*",
    element: <NotFound />
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
