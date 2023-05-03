import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header';

import { LayoutStyled, ContentContainer } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Suspense fallback={null}>
      <LayoutStyled className="container">
        <ContentContainer>
          <Header />

          <main>
            <Outlet />
          </main>
        </ContentContainer>
      </LayoutStyled>
    </Suspense>
  );
};

export default SharedLayout;
