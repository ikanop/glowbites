import {createTheme} from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#facef5',
      light: 'rgb(251, 215, 247)',
      dark: 'rgb(175, 144, 171)'
    },
    secondary: {
      main: '#89cff0',
      light: 'rgb(160, 216, 243)',
      dark: 'rgb(95, 144, 168)'
    },
    background: {
      default: '#1e1e1e',
      elevation1: '#232323',
      elevation2: '#2c2c2c',
      elevation3: '#373737',
      paper: '#333333',
    },
    text: {
      primary: 'rgba(235,235,235,0.64)',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)'
    },
    error: {
      main: '#e57373',
      light: 'rgb(234, 143, 143)',
      dark: 'rgb(160, 80, 80)'
    },
    success: {
      main: '#5fecaf',
      light: 'rgb(127, 239, 191)',
      dark: 'rgb(66, 165, 122)'
    },
  },

  typography: {
    allVariants: {
      color: 'rgba(235,235,235,0.64)',
    },
    fontFamily: '"Inter"'
  }
});