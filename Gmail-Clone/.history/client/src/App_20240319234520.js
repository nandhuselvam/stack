import Main from './pages/Main';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route>
        <Route path="" element={} />
      <Route/>

  )
)

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
