import Main from './pages/Main';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElement } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElement(
      <Route>
        <Route path="" element{} />
      <Route/>

  )
)

function App() {
  return (
      <RouterProvider router={router} />

      

      
      
      
      
  );
}

export default App;
