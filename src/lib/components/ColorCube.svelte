<script lang="ts">
	import { copyToClipboard } from "$lib/index";
	import CopyIcon from "$lib/icons/copyIcon.svelte";
	import CopyToClipboard from "./CopyToClipboard.svelte";
	
	/**
	 * ColorCube Componenet
	 * @param {string}
	 *
	 * Props
	 * color: A hex string to represent the color.
	 * name: A string used for the cube's token name.
	 * hexLabel : The hex string of the color.
	 */
	export let color: string;
	export let name: string;

	const hexLabel: string = color.toUpperCase();
</script>

<div class="color-cube-wrap f-col f-center-end">
	<!-- Color cube to visualize the color -->
	<CopyToClipboard 
		on:click={() => {
			copyToClipboard(hexLabel);
		}}	
		stringToCopy={hexLabel}
		classes="color-cube"
		>
		<div
			class="color-cube"
			style="background-color: {hexLabel}">
		</div>
	</CopyToClipboard>

	<!-- Hex label for matching color -->
	<CopyToClipboard 
		on:click={() => {
			copyToClipboard(hexLabel);
		}}
		classes="full-width"
		stringToCopy={hexLabel}>
		<div class="hex-label">
			<span>{hexLabel}</span>
			<CopyIcon/>
		</div> 
	</CopyToClipboard>

	<!-- Token label for matching color -->
	<p class="token-label">{name}</p>
</div>

<style>

	.color-cube-wrap {
		gap: 0px;	
		width: 100%;
	}

	.color-cube {
		width: 100%;
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
    font-family: var(--fontfamily-monospace);
		word-break: break-all;
  }

	.hex-label {		
		background-color: rgba(0, 0, 0, 0.05);
		color: rgba(0, 0, 0, 0.75);
		transition: var(--transition-m);
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
