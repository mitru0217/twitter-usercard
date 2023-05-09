import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header';

const SharedLayout = () => {
  return (
    <Suspense fallback={null}>
      <Header />
      <main>
        <Outlet />
      </main>
    </Suspense>
  );
};

export default SharedLayout;
