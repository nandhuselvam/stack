import { Suspense } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate } from 'react-router-dom';
import { routes } from './routes/routes';
import ErrorComponent from './components/common/ErrorComponent';


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route>
        <Route path={routes.main.path} element={<Navigate to={`${routes.main.path}/inbox`} /> } />
          <Route path={routes.main.path} element={<routes.main.element/> } >
            <Route path={`${routes.main.path} /:type`} element={<routes.main.element />} errorElement={<ErrorComponent /> } />
            <Route path={routes.view.path} element={<routes.view.element /> } errorElement={<ErrorComponent /> } />
           </Route>

        <Route path={routes.invalid.path} element={<Navigate to={`${routes.emails.path}/inbox`} /> } />

      </Route>

  )
)
function App() {
  return (

      
  );
}

export default App;
