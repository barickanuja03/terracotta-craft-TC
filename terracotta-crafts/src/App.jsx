import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Errorpage from "./components/pages/Errorpage";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Product from "./components/pages/Product";
import Login from "./components/pages/Login";
import Contactus from "./components/pages/Contactus";
import Claycombo from "./components/pages/Claycombo";
 const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    errorElement:<Errorpage />,
    children:[
      {
        path:"/",
        element:<Home />,
      },
      {
        path:"about",
        element:<About />,
      },
      {
        path:"product",
        element:<Product />,
      },
      {
         path: "login",  //Dynamic route ":"
        element:<Login />
      },
      {
        path:"contact",
        element:<Contactus />,
      },
      {
        path:"claycombo",
        element:<Claycombo/>,
      },
    ]
  }
 ])
const App = () => {
  return (
    <>
     <RouterProvider router ={router}></RouterProvider>
    </>
  )
}

export default App
