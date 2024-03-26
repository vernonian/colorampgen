<script lang="ts">
	import ColorCube from './ColorCube.svelte';
	import type { ColorHexLabelPair } from '$lib/types/ColorHexLabelPair';

	export let rampShades: ColorHexLabelPair[] = [];
</script>

<!-- List of ColorCubes for each generated shade -->
<ul class="color-ramp">
	{#each rampShades as rampShade}
		<li>
			<ColorCube color={rampShade.hex} name={rampShade.label} />
		</li>
	{/each}
</ul>

<style>
	.color-ramp {
		display: grid;
		grid-template-columns: repeat(10, 1fr);
		gap: var(--m) var(--xxs);
		list-style: none;
		padding: 0px;
	}

	@media screen and (max-width: 1024px){
		.color-ramp {
			grid-template-columns: repeat(5, 1fr);
		}
	}

	@media screen and (max-width: 768px){
		.color-ramp {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
