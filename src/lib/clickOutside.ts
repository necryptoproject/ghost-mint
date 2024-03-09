import { browser } from '$app/environment';

/**
 * Handle click outside specific element
 * @param node
 * @param handler
 * @returns
 */
export const clickOutside = (node: Node, handler: Function) => {
	if (!browser) return;

	var onClick = function (event: any) {
		return node && !node.contains(event.target) && !event.defaultPrevented && handler(event);
	};
	document.addEventListener('click', onClick, true);

	return {
		destroy: function () {
			document.removeEventListener('click', onClick, true);
		}
	};
};
