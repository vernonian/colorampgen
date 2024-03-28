<script lang="ts">
	import TextInputUnit from '$lib/components/TextInputUnit.svelte';
	import InteractiveButton from '$lib/components/InteractiveButton.svelte';
	import ColorUnit from '$lib/components/ColorUnit.svelte';
	import DetailsDropdown from '$lib/components/DetailsDropdown.svelte';
	import {type ColorRampItem } from '$lib/types/ColorRampItem';

	// Vars
	let inputHex: string = '#CACACA';
	let inputName: string;
	let colorRamps: ColorRampItem[] = [ {baseName: "Gray", baseHex: "#CACACA", id:0} ];

	const colorsLocalStorageKey = "baseColorsArray"

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
			// Create color ramp and add it to colorRamps array
			colorRamps = [{ baseName: name, baseHex: hex, id: colorRamps.length }, ...colorRamps];

			// Save updated colorRamps to local storage
			saveColorRampsArrayToLocalStorage();
		} else {
			alert('Error: Invalid hex code. Please enter a valid hex code.');
			return;
		}
	}

	/**
	 * Check for local storage
	*/

	/**
	 * Set local storage
	*/
	function saveColorRampsArrayToLocalStorage() {
		let jsonString = JSON.stringify(colorRamps);
		localStorage.setItem(colorsLocalStorageKey, jsonString);
	}
</script>

<section class="section-wrap">
	<div class="content-wrap f-col">	
		<h1 class="display-m">Color Ramp Generator</h1>
		<section id="main-grid" class="grid">

			<!-- Right side menu for inputs -->
			<aside class="f-col">
				<form class="f-col">

					<!-- Hex code input -->
					<TextInputUnit
						label="Hex Code *"
						inputId="hex-input"
						placeholder="#FECE00"
						bind:boundValue={inputHex}
					/>

					<!-- Color name input -->
					<TextInputUnit
						label="Token Name *"
						inputId="name-input"
						placeholder="My Color"
						bind:boundValue={inputName}
					/>

					<!-- Submit form button -->
					<InteractiveButton
						id="generate-btn"
						text="Generate Color Ramp"
						handleClick={() => handleCreateColorRamp(inputHex, inputName)}
					></InteractiveButton>
				</form>
				
				<!-- Informational disclosures -->
				<DetailsDropdown summary="How do I use this?">
					<p>
						Enter a hex code and click "Generate" to create a color ramp of tints and shades. Once the
						colors are generated, click to copy the hex code.
					</p>
				</DetailsDropdown>
				<DetailsDropdown summary="What is this?">
					<p>
						ColorampGen is a tool to create color ramps from a single hex code.
					</p>
					<p><a href="https://github.com/vernonian/colorampgen" target="_blank">See GitHub repo</a> for more.</p>
				</DetailsDropdown>
			</aside>

			<!-- Section for color units to appear -->
			<section class="f-col">
				{#each colorRamps as ramp (ramp.id)}
					<ColorUnit baseName={ramp.baseName} baseHex={ramp.baseHex} />
				{/each}
			</section>
		</section>
	</div>
</section>

<style>
	#main-grid {
		grid-template-columns: 200px 1fr;
		width: 100%;
		overflow-x: hidden;
		min-height: 95vh;
	}
</style>
