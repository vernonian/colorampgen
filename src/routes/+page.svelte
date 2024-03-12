<script lang="ts">
	import TextInputUnit from '$lib/components/TextInputUnit.svelte';
	import InteractiveButton from '$lib/components/InteractiveButton.svelte';
	import ColorRamp from '$lib/components/ColorRamp.svelte';
	import DetailsDropdown from '$lib/components/DetailsDropdown.svelte';

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

<section class="section-wrap">
	<div class="content-wrap f-col">	
		<h1 class="display-m">Color Ramp Generator</h1>
		<section id="main-grid" class="grid">
			<aside class="f-col">

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
			<section id="target" class="f-col">
				{#each colorRamps as ramp (ramp.id)}
					<ColorRamp baseName={ramp.baseName} baseHex={ramp.baseHex} />
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
