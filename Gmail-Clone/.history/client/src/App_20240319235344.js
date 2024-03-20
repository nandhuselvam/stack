import Main from './pages/Main';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { routes } from '../''
const router = createBrowserRouter(
  createRoutesFromElements(
      <Route>
        <Route path="SENT" element={}/>

      </Route>

  )
)

useNavigate()
const navigate = useNavigate();
navigate('/sent');

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
