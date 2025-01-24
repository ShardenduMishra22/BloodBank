import { Route, Routes } from 'react-router-dom';
import NotFound from './Pages/NotFound';
import Landing from './Pages/Landing';
import Register from './Pages/Auth/Register';
import Login from './Pages/Auth/Login';
import Home from './Pages/Home';
import Protected from './components/Route/Protected';
import UnProtected from './components/Route/Unprotected';
import Account from './Pages/Auth/Account';
import Donor from './components/NavLinks/Donor';
import Organisation from './components/NavLinks/Organisation';
import Hospital from './components/NavLinks/Hospital';

const App = () => {
  return (
    <Routes>
      <Route
        path="/donor"
        element={
          <Protected>
            <Donor />
          </Protected>
        }
      />
      <Route path="/organisation" element={<Organisation />} />
      <Route path="/hospital" element={<Hospital />} />
      <Route
        path="/home"
        element={
          <Protected>
            <Home />
          </Protected>
        }
      />
      <Route
        path="/account"
        element={
          <Protected>
            <Account />
          </Protected>
        }
      />
      <Route
        path="/"
        element={
          <UnProtected>
            <Landing />
          </UnProtected>
        }
      />
      <Route
        path="/login"
        element={
          <UnProtected>
            <Login />
          </UnProtected>
        }
      />
      <Route
        path="/register"
        element={
          <UnProtected>
            <Register />
          </UnProtected>
        }
      />
      <Route
        path="*"
        element={
          <UnProtected>
            <NotFound />
          </UnProtected>
        }
      />
    </Routes>
  );
};

export default App;
