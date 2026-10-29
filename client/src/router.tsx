import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { Home } from "./pages/Home";
import { Carta } from "./pages/Carta";
import { Locales } from "./pages/Locales";
import { Franquicia } from "./pages/Franquicia";
import { Page404 } from "./pages/Page404";
import { Items } from "./pages/items";
import { SignUp } from "./pages/signup/SignUp";
import { LogIn } from "./pages/login/LogIn";

export const router = createBrowserRouter([{
    path: "/",
    element: <RootLayout/>,
    children: [
        {index: true, element: <Home/>},
        {path: "/carta", element: <Carta/>},
        {path: "/locales", element: <Locales/>},
        {path: "/franquicia", element: <Franquicia/>},
        {path: "*", element: <Page404/>},
        {path: "/itemcrud", element: <Items/>},
        {path: "/register", element: <SignUp/>},
        {path: "/login", element: <LogIn/>}
    ]
}])