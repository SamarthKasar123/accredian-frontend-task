import { ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import ReferEarnPage from './components/ReferEarnPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#15c630',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ReferEarnPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
