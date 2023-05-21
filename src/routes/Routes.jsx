import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Services from "../pages/Services";
import About from "../pages/About";
import Contact from "../pages/Contact";
import EditTodo from "../components/EditTodo";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement : <ErrorPage></ErrorPage>,
      children : [
        {
            path : '/',
            element : <Home></Home>,
            loader: ()=> fetch('http://localhost:5000/todos')
        },
        {
            path : '/todos/:id',
            element : <EditTodo></EditTodo>,
            loader: ({params})=> fetch(`http://localhost:5000/todos/${params.id}`)
        },
        {
            path : '/about',
            element : <About></About>
        },
        {
            path : '/contact',
            element : <Contact></Contact>
        },
        
      ]
    },
  ]);

  export default router