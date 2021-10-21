import { extendTheme, theme } from 'native-base';

export const defaultTheme = extendTheme({
  colors: {
    primary: {
      500: theme.colors.yellow[400],
      600: theme.colors.yellow[500],
      700: theme.colors.yellow[600],
      800: theme.colors.yellow[700],
    },
    secondary: {
      500: theme.colors.coolGray[700],
      700: theme.colors.coolGray[600],
		},
		background: theme.colors.dark[600],
		text: theme.colors.white,
		border: theme.colors.purple[100],
  },
  components: {
    Button: {
      baseStyle: {
        rounded: 'sm',
        size: "lg" 
      },
    },
    Input: {
      defaultProps: {
        backgroundColor: "white",
        borderColor: "white",
				size: "sm",
				height: 10,
        color: theme.colors.dark[200]
      }
    },
    Heading: {
      defaultProps: {
        color: "coolGray.100"
      }
    },
    Text: {
      defaultProps: {
        color: "coolGray.200"
      }
    },
    FormControlLabel: {
      defaultProps: {
        _text: {
          color: 'coolGray.200',
          fontSize: 'xs', 
          fontWeight: 500
        }
      }
    }
  },
});