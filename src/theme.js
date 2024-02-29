import { createTheme } from '@mui/material/styles';

const generateSafariSpacingOverrides = () => {
  const spacings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const newGridSpacing = {};
  spacings.forEach(spacing => {
    newGridSpacing[`spacing-xs-${spacing}`] = {
      width: `calc(100% + ${8 * spacing + 1}px)`,
    };
  });
  return newGridSpacing;
};

export default createTheme(
  {
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            color: '#071413',
            textTransform: 'none',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
          },
        },
      },
      MuiGrid: {
        styleOverrides: {
          ...generateSafariSpacingOverrides(),
        },
      },
    },
    styleOverrides: {
      root: () => ({
        padding: 8,
        overflow: 'clip',
        backgroundColor: '#fff',
        border: '1px solid',
        borderColor: gray[100],
        ':before': {
          backgroundColor: 'transparent',
        },
        '&:first-of-type': {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
        '&:last-of-type': {
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        },
          backgroundColor: gray[900],
          borderColor: gray[800],
        
      }),
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: ({ theme }) => ({
          border: 'none',
          borderRadius: 8,
          '&:hover': { backgroundColor: gray[100] },
            '&:hover': { backgroundColor: gray[800] },
          
        }),
      },
    },
    typography: {
      fontFamily: 'Exo',

      h1: {
        fontSize: '32px',
        fontWeight: '500',
      },
      h2: {
        fontSize: '28px',
        fontWeight: '700',
      },
      h3: {
        fontSize: '24px',
        fontWeight: '700',
      },
      h4: {
        fontSize: '20px',
        fontWeight: '700',
      },
      h5: {
        fontSize: '20px',
        fontWeight: '500',
      },
      h6: {
        fontSize: '18px',
        fontWeight: '500',
        textTransform: 'none',
      },
      subtitle1: {
        fontSize: '16px',
        fontWeight: '500',
        textTransform: 'none',
      },
      subtitle2: {
        fontSize: '40px',
        fontWeight: '700',
      },
      body1: {
        fontSize: '18px',
        fontWeight: '400',
      },
      body2: {
        fontSize: '12px',
        fontWeight: '500',
      },
      caption: {
        fontSize: '12px',
      },
      button: {
        fontWeight: 'bold',
        textTransform: 'none',
        fontSize: '18px',
      },
    },
  }
);
