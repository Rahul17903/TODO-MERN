import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Layout from './layout/Layout.jsx'
import Login from './features/auth/Login.jsx'
import Register from './features/auth/Register.jsx'
import NotFound from './components/NotFound.jsx'
import NoteForm from './features/notes/NoteForm.jsx'
import NoteEdit from './features/notes/NoteEdit.jsx'
import NotesList from './features/notes/NotesList.jsx'
import PrivateRoute from './features/auth/PrivateRoutes.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <PrivateRoute />,
        children: [
          {
            path: "",
            element: <NotesList />,
          },
          {
            path: "add-note",
            element: <NoteForm />,
          },
          {
            path: "note-edit/:id",
            element: <NoteEdit />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path:"*",
        element:<NotFound />
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
