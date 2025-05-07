// AppRoutes.jsx
import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import UserRoutes from './routes/UserRoutes';
import UserLayout from './layouts/UserLayout';
import Register from './views/Register';

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    const loadCSS = async () => {
      if (location.pathname === '/login' || location.pathname === '/register') {
        await import('./assets/clients/css/register.css');
        // await import('./assets/clients/css/login.css');
      } else if (location.pathname.startsWith('/user')) {
        await import('./assets/clients/css/bootstrap.min.css');
        await import('./assets/clients/css/owl.carousel.min.css');
        await import('./assets/clients/css/ticker-style.css');
        await import('./assets/clients/css/flaticon.css');
        await import('./assets/clients/css/slicknav.css');
        await import('./assets/clients/css/animate.min.css');
        await import('./assets/clients/css/magnific-popup.css');
        await import('./assets/clients/css/fontawesome-all.min.css');
        await import('./assets/clients/css/themify-icons.css');
        await import('./assets/clients/css/slick.css');
        await import('./assets/clients/css/nice-select.css');
        await import('./assets/clients/css/style.css');
      }
    };

    loadCSS();
  }, [location.pathname]);

  return (
    <Routes>
   
   <Route
  path="/register"
  element={<Register key={location.key} />}
/>


      {UserRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.layout + route.path}
          element={
            <UserLayout>
              <route.component />
            </UserLayout>
          }
        />
      ))}

      <Route path="*" element={<Navigate to="/user/home" replace />} />
    </Routes>
  );
}

export default AppRoutes;
