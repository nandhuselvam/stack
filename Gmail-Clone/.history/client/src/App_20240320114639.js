import Main from './pages/Main';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate } from 'react-router-dom'
import { routes } from './routes/routes';
const router = createBrowserRouter(
  createRoutesFromElements(
      <Route>
        <Route path={/>
        <Route path={routes.main.path} element={<routes.main.element/> } />
        <Route path={`${routes.main.path}/:type`} element={<routes.main.element />} />
      </Route>

  )
)

client/src/App.js


function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
