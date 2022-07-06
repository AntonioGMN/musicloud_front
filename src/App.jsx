import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useToken } from './hooks/useToken';
import { UserProvider } from './contexts/UserContext';
import { PlayerProvider } from './contexts/PlayerContext';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import AllSongs from './pages/Dashboard/AllSongs';

function App () {
  return (
    <>
      <ToastContainer position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <UserProvider>
        <PlayerProvider>
          <Router>
            <Routes>
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-in" element={<SignIn />} />

              <Route
                path="/"
                element={
                  <ProtectedRouteGuard>
                    <Dashboard />
                  </ProtectedRouteGuard>
                }
              >
                <Route path="allsongs" element={<AllSongs />} />
              </Route>
            </Routes>
          </Router>
        </PlayerProvider>
      </UserProvider>
    </>
  );
}

function ProtectedRouteGuard ({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  return <>
    {children}
  </>;
}

export default App;
