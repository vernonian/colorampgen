<script lang="ts">
	import { copyToClipboard } from "$lib/index";
	import copyIcon from "$lib/icons/copyIcon.svelte";
	import CopyIcon from "$lib/icons/copyIcon.svelte";
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
</script>

<div class="color-cube-wrap f-col f-center-end">
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
		<CopyIcon/>
	</button>
	<p class="token-label">{tokenLabel}</p>
</div>

<style>

	.color-cube-wrap {
		gap: 0px;	
	}

	.color-cube {
		width: 100px;
		height: 100px;
		border: solid 1px transparent;
		transition: all 0.2s;
		cursor: copy;
		font-family: var(--fontfamily-monospace);
	}

	.color-cube:hover {
		transform: scale(1.025);
		border: solid 1px black;
	}

  .hex-label, .token-label {
    border: none;
    background-color: transparent;
		width: 100%;
    display: flex;
		align-items: center;
		justify-content: center;
    text-align: center;
    padding: var(--gap-xs);
    margin: 0px;
    font-family: monospace;
  }

	.hex-label {		
		background-color: rgba(0, 0, 0, 0.05);
		color: rgba(0, 0, 0, 0.75);
		transition: all 0.1s;
		border: solid 1px transparent;
		display: flex;
		gap: var(--gap-xs);
		cursor: copy;
	}

	.hex-label:hover {
		background-color: rgba(0, 0, 0, 0.1);
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
		font-size: 0.75rem;
		color: var(--gray-8);
	}
</style>
