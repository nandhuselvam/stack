import Main from './pages/Main';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { routes } from './routes/routes';
const router = createBrowserRouter(
  createRoutesFromElements(
      <Route>
        <Route path={} element={} />

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
