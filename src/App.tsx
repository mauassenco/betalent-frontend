import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/globals';
import { theme } from './styles/theme';
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div>HOME</div>
      </ThemeProvider>
    </>
  );
}

export default App;
