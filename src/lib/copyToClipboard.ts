/**
 * Copy a string of text to the clipboard
 * @param {string} textToCopy
 */
export function copyToClipboard(textToCopy: string) {
	const copyContent = async () => {
		try {
			// TODO: give the user feedback that something has been copied
			await navigator.clipboard.writeText(textToCopy);
			console.log(`Text copied to clipboard: ${textToCopy}`);
			
		} catch (err) {
			console.error('Failed to copy: ', err);
		}
	};
	copyContent();
}