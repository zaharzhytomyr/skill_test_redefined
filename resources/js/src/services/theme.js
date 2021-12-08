import { createTheme } from '@material-ui/core';

const theme = createTheme({
	props: {
		// MuiTextField: {
		// 	variant: 'outlined',
		// 	size: 'small',
		// },
	},
	overrides: {
		// MuiFormControl: {
		// 	root: {
		// 		minWidth: 120,
		// 	},
		// },
	},
});

export default theme;
