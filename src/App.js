import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'ui/GlobalStyle';
import { theme } from 'ui/theme';
const TweetsPage = lazy(() => import('Pages/TweetsPage/TweetPage'));
const SharedLayout = lazy(() => import('components/SharedLayout'));
const HomePage = lazy(() => import('Pages/HomePage/HomePage'));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/tweets" element={<TweetsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;

