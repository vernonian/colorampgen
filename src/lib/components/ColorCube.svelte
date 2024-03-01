<script lang="ts">
	/**
	 * ColorCube Componenet
	 * @param {string}
	 *
	 * Props
	 * color: A hex string to represent the color.
	 * name: A string used for the cube's token name.
	 * index index: An integer or string used for the cube's token name.
	 * hexLabel : The hex string of the color.
	 * tokenLabel : The css variable name string.
	 */
	export let color: string;
	export let name: string;
	export let index: number | string;

	const hexLabel: string = color.toUpperCase();
	const tokenLabel: string = `--${name}-${index.toString()}`;

	/**
	 * Copy a string of text to the clipboard
	 * @param {string} textToCopy
	 */
	function copyToClipboard(textToCopy: string) {
		const copyContent = async () => {
			try {
				// TODO: give the user feedback that something has been copied
				await navigator.clipboard.writeText(textToCopy);
				console.log(textToCopy);
			} catch (err) {
				console.error('Failed to copy: ', err);
			}
		};
		copyContent();
	}
</script>

<div class="color-cube-wrap f-col f-center-end gap-xxs">
	<button
    type="button"
		class="color-cube"
		style="background-color: {hexLabel}"
		on:click={() => {
			copyToClipboard(hexLabel);
		}}
	></button>
	<button
    type="button"
		class="hex-label"
		on:click={() => {
			copyToClipboard(hexLabel);
		}}
	>
		{hexLabel}
	</button>
	<button
    type="button"
		class="token-label"
		on:click={() => {
			copyToClipboard(tokenLabel);
		}}
	>
		{tokenLabel}
	</button>
</div>

<style>
	.color-cube {
		width: 100px;
		height: 100px;
		border: solid 1px transparent;
		transition: all 0.2s;
		cursor: copy;
	}

	.color-cube:hover {
		transform: scale(1.025);
		border: solid 1px black;
	}

  .hex-label, .token-label {
    border: none;
    background-color: transparent;
    display: flex;
		align-items: center;
		justify-content: center;
    text-align: center;
    padding: var(--gap-xs);
    margin: 0px;
    font-family: monospace;
    cursor: copy;
  }

	.hex-label {		
		background-color: rgba(0, 0, 0, 0.05);
		color: rgba(0, 0, 0, 0.75);
		transition: all 0.1s;
		border: solid 1px transparent;
	}

	.hex-label:hover {
		background-color: rgba(0, 0, 0, 0.1);
		transform: scale(1.025);
	}

  .color-cube:active,
  .color-cube:focus,
	.hex-label:active,
	.hex-label:focus {
		background-color: rgba(0, 0, 0, 0);
		border-color: var(--blue-5);
	}

	.token-label {
		border: none;
	}
</style>
