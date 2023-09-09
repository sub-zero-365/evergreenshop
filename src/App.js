import { Routes, Route, createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import RootElement from './components/RootElement';
import Home from './pages/Home';
import About from './pages/About';
import Product, { loader as productLoader } from './pages/Product';
import ErrorElement from './components/ErrorElement';

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
