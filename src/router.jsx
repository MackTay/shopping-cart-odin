import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import HomePage from './components/HomePage/HomePage';
import ShopPage from './components/ShopPage/ShopPage';
import CartPage from './components/CartPage/CartPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "cart", element: <CartPage /> },
    ]
    },
]);

export default router;