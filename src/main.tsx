import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import GlobalStyle from './globalStyles.ts';
import { ThemeProvider } from 'styled-components';
import { Helmet, HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <Helmet>
        <title>Avatar Creater</title>
        <link
          rel="canonical"
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;600;700&display=swap"
        />
        <link
          rel="canonical"
          href="https://fonts.googleapis.com/css2?family=Zen+Tokyo+Zoo&display=swap"
        />
      </Helmet>
      <ThemeProvider theme={{}}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>
);
