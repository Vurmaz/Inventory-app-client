import { createTheme, responsiveFontSizes } from '@mui/material/styles'
export let theme = createTheme({
    palette: {
        primary : {
            main : '#F7D716',
        },
        secondary : {
            main: '#15133C',
        },
        third: {
          main:'#CDC2AE'
        }
    },
    typography: {
      fontFamily: [
        'Montserrat',
        'sans-serif',
      ].join(','),
  }
})
theme = responsiveFontSizes(theme)