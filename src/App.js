import { Routes, Route, createBrowserRouter, RouterProvider, Link, redirect } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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
import Auth, { action as AuthAction } from './pages/Auth';
import requireAurthed from './utils/requireAuth';
import User, { loader as UserLoader } from './pages/User';
import Strains from './pages/Strains'
import Recipes from './pages/Recipes.js'
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import "swiper/css/a11y"
import "swiper/css/scrollbar"
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/scrollbar"
import CheckOut from './pages/CheckOut';
import DashboardLayout from './components/DashboardLayout';
import ProtectedLayout from './pages/ProtectedLayout.jsx';
import DashboardHome from './pages/DashboardHome';
import ProductAdmin, { action as AdminProductAction } from './pages/ProductAdmin';
import Messages from './pages/Messages';
import AddProductPage from './pages/AddProductPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import addProductsAction from './utils/addProductsAction'
import BasicTable from './components/BasicTable';
import Profile from './components/Profile';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    element: <RootElement
      queryClient={queryClient}

    />,
    path: "/",
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <Home
        />
      },
      {
        path: "about-us",
        element: <About />
      },
      {
        path: "product/:id",
        element: <Product />,
        loader: productLoader(queryClient),
      },
      {
        path: "shopping-bag",
        element: <ShoppingBag />,

      },
      {
        path: "product-category/:id",
        element: <ProductCategory />,
        loader: ProductCategoryLoader(queryClient)
      },
      {
        path: "shop",
        element: <Shop />,

      },
      {
        path: "auth",
        element: <Auth />,
        action: AuthAction
      },
      {
        path: "user",
        element: <User />,
        loader: UserLoader(queryClient),
        children: [
          {
            index: true,
            element: <Profile />,
            loader: requireAurthed,

          }
        ]
      },
      {
        path: "category/strains",
        element: <Strains />,
        // loader: requireAurthed

      },
      {
        path: "category/recipes",
        element: <Recipes />,
      },
      {
        path: "table",
        element: <BasicTable />,
      },

    ]
  },
  {
    path: "checkout",
    element: <CheckOut />,
    // loader: requireAurthed

  },
  {
    path: "dashboard",
    element: <ProtectedLayout />,
    loader: requireAurthed,
    children: [
      {
        path:"admin",
        element: <DashboardHome />,
        loader: requireAurthed,

      },
      {
        path: "products",
        element: <ProductAdmin />,
        loader: requireAurthed,
        action: AdminProductAction(queryClient)
      },
      {
        path: "orders",
        element: <DashboardHome />, loader: requireAurthed,

      },
      {
        path: "messages",
        element: <Messages />

      },
      {
        path: "addproduct",
        element: <AddProductPage />,
        action: addProductsAction(queryClient)

      },
    ]
  },
  {
    path: "*",
    element: <NotFound />
  },
])
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <ToastContainer />
        <RouterProvider
          router={router}
        />
      </div>
    </QueryClientProvider>
  );
}

export default App;
