import Snackbar from 'node-snackbar';
import colors from 'tailwindcss/colors';

export const notify = (opts: SnackbarOptions = {}) => {
	const options: SnackbarOptions = {
		textColor: colors.gray[50],
		backgroundColor: colors.gray[700],
		actionText: '',
		pos: 'bottom-right'
	};

	Object.assign(options, opts);

	Snackbar.show(options);
};
