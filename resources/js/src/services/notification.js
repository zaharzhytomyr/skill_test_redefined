import React from 'react';
import { useSnackbar } from 'notistack';

const notification = {
	invoke: null,
	close: null,
}

const NotificationService = (props) => {
	const snackbarManager = useSnackbar();
    //
	// React.useEffect(() => {
	// 	notification.invoke = (message, options) => {
	// 		return snackbarManager.enqueueSnackbar(message, options);
	// 	};
    //
	// 	notification.close = (key) => {
	// 		snackbarManager.closeSnackbar(key);
	// 	};
	// }, []);

	return null;
};

export default NotificationService;
