import { Applayout } from './components/layout/Applayout';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import {About} from './pages/About';
import { Services } from './pages/Services';
import { Team } from './pages/Team';
import {Contact} from './pages/Contact'
import { Singleservice } from './pages/Singleservice';
import { Blog } from './pages/Blog';
import { SingleBlog } from './pages/SingleBlog';
import { Appointment } from './pages/Appointment';
import { Doctors } from './pages/Doctors';
import { Singledoctor } from './pages/Singledoctor';


export const App = () => {

  const router = createBrowserRouter([

    {
      path:'/',
      element:<Applayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"about",
          element:<About/>
        },
        {
          path:"services",
          element:<Services/>
        },
        {
          path:"doctors",
          element:<Doctors/>
        },
        {
          path:"contact",
          element:<Contact/>
        },
        {
          path:"/services/:id",
          element:<Singleservice/>
        },
        {
          path:"/blog/:id",
          element:<SingleBlog/>
        },
        {
          path:"/doctor/:id",
          element:<Singledoctor/>
        },
        {
          path:"blog",
          element:<Blog/>
        },
        {
          path:"appointment",
          element:<Appointment/>
        }
      ]
    }

  ])

  return <RouterProvider router={router}></RouterProvider>

}