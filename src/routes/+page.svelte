<script lang="ts">
	import TextInputUnit from '$lib/components/TextInputUnit.svelte';
	import InteractiveButton from '$lib/components/InteractiveButton.svelte';
	import ColorRamp from '$lib/components/ColorRamp.svelte';

		// Types
		// Define type for object in color ramps array
		type ColorRampItem = {
		baseName: string;
		baseHex: string;
		id: number;
	};

	// Vars
	let inputHex: string = '#FECE00';
	let inputName: string;
	let colorRamps: ColorRampItem[] = [];

	// Functions
	/**
	 * Validates a string as a hex code.
	 * @param {string} input
	 */
	function isValidHexCode(input: string) {
		const hexCodeRegex = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
		return hexCodeRegex.test(input);
	}


	/**
	 * Handles error and validation for text input values
	 * @param hex[string] : The hex code string
	 * @param name[string] : The hex label string
	 */
	function handleCreateColorRamp(hex: string, name: string) {
		// Handle errors
		// If there is no hashtag, add it
		if (hex[0] != '#') {
			hex = '#' + hex;
		}

		// If there is no name, give it a default
		if (!name || name == '') {
			name = 'my-color';
		}

		// Validate string as a hex code
		if (isValidHexCode(hex)) {
			// Create color ramp
			colorRamps = [{ baseName: name, baseHex: hex, id: colorRamps.length + 1 }, ...colorRamps];
		} else {
			alert('Error: Invalid hex code. Please enter a valid hex code.');
			return;
		}
	}
</script>

<section class="f-col">
	<h1>ColoRampGen</h1>
	<section id="main-grid" class="grid">
		<aside class="f-col">
			<details>
				<summary>How do I use this?</summary>
				<p>
					Enter a hex code and click "Generate" to create a color ramp of tints and shades. Once the
					colors are generated, click to copy the hex code.
				</p>
			</details>
			<form class="f-col">
				<TextInputUnit
					label="Hex Code"
					inputId="hex-input"
					placeholder="#FECE00"
					bind:boundValue={inputHex}
				/>
				<TextInputUnit
					label="Token Name"
					inputId="name-input"
					placeholder="My Color"
					bind:boundValue={inputName}
				/>
				<InteractiveButton
					id="generate-btn"
					text="Generate Color Ramp"
					handleClick={() => handleCreateColorRamp(inputHex, inputName)}
				></InteractiveButton>
			</form>
		</aside>
		<section id="target" class="f-col">
			{#each colorRamps as ramp (ramp.id)}
				<ColorRamp baseName={ramp.baseName} baseHex={ramp.baseHex} />
			{/each}
		</section>
	</section>
</section>

<style>
	#main-grid {
		grid-template-columns: 200px 1fr;
		width: 100%;
		overflow-x: hidden;
	}
</style>
