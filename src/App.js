import { lazy, Suspense } from 'react';
import { BrowserRouter as Route, Router, Routes } from 'react-router-dom';

import * as ROUTES from './constants/routes';

const Login = lazy(() => import('./pages/login'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Route path={ROUTES.LOGIN} component={Login} />
      </Suspense>
    </Router>
  );
}

export default App;
