<script lang='ts'>
  import ColorRamp from './ColorRamp.svelte';
	import CopyIcon from '$lib/icons/copyIcon.svelte';
	import CopyToClipboard from './CopyToClipboard.svelte';
  import type { ColorHexLabelPair } from '$lib/types/ColorHexLabelPair';

	export let baseName: string;
	export let baseHex: string;

	const SHADE_NUM: number = 10;

  // Arrays to hold the generated hex codes (shades) and labels (tokens)
	const shades: string[] = generateColorShades(baseHex);
	const tokens: string[] = generateColorNames(baseName);

  // rampShades is an array of objects - hex/label pairs for each generated color
	const rampShades: ColorHexLabelPair[] = [];

  // String to hold the CSS from color ramp generation
	let rampCSS: string = '';

	// Initialize the rampShades array
	for (let i = 0; i < SHADE_NUM; i++) {
		rampShades.push({ hex: shades[i], label: tokens[i] });
		rampCSS = rampCSS + `${rampShades[i].label}: ${rampShades[i].hex};\n`;
	}

	/**
	 * generateColorShades()
	 * @param {string} hexColor : The base hex color used to generate color shades and tints.
	 * Generate different colors based on a single color.
	 */
	function generateColorShades(hexColor: string) {
		// Convert the hex color to RGB format
		hexColor = hexColor.replace(/^#/, '');
		const red = parseInt(hexColor.slice(0, 2), 16);
		const green = parseInt(hexColor.slice(2, 4), 16);
		const blue = parseInt(hexColor.slice(4, 6), 16);

		// Calculate lighter and darker shades
		const shades = [];
		const stepMultiplier = 0.2;

		// Generate and add the first (lightest) tint
		const lightestTintFactor = 0.9;
		const r0 = Math.round(red + (255 - red) * lightestTintFactor);
		const g0 = Math.round(green + (255 - green) * lightestTintFactor);
		const b0 = Math.round(blue + (255 - blue) * lightestTintFactor);
		shades.push(`#${((r0 << 16) | (g0 << 8) | b0).toString(16).padStart(6, '0')}`);

		// Generate and add the next four tints
		for (let i = 1; i <= 4; i++) {
			const factor = 1 - i * stepMultiplier;
			const r = Math.round(red + (255 - red) * factor);
			const g = Math.round(green + (255 - green) * factor);
			const b = Math.round(blue + (255 - blue) * factor);
			shades.push(`#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`);
		}

		// Add original color
		shades.push(`#${hexColor}`);

		// Generate and add the last four shades
		for (let i = 1; i <= 4; i++) {
			const factor = 1 - i * stepMultiplier;
			const r = Math.round(red * factor);
			const g = Math.round(green * factor);
			const b = Math.round(blue * factor);
			shades.push(`#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`);
		}
		return shades;
	}

	function generateColorNames(name: string) {
		const names: string[] = [];
		for (let i = 0; i < SHADE_NUM; i++) {
			names.push(`--${name.toLocaleLowerCase().replace(/\s/g, "-")}-${i.toString()}`);
		}
		return names;
	};

</script>

<section class="color-ramp-wrap f-col" style="border-color:{rampShades[5].hex};">
	<!-- Color name and basic info -->
	<div class="f-col gap-xxs">
		<h3>{baseName}</h3>
		<p class="ramp-label">Base color: <span class="color-preview" style="background-color:{baseHex};"></span> <span>{baseHex}</span></p>
	</div>

	<!-- ColorRamp for based on baseHex -->
  <ColorRamp rampShades={rampShades} />

	<!-- User opens disclosure to copy CSS snippet  -->
	<details>
		<summary>CSS Tokens</summary>
		<div class="f-col f-start">
			<!-- Click label to copy the color CSS token-variable pairs -->
			<CopyToClipboard
				stringToCopy={rampCSS}
				copyMessage="CSS Copied"
				classes="copy-CSS-btn f-row gap-xxs"
				>
				<span>Copy CSS</span><CopyIcon/>	
			</CopyToClipboard>
		
			<!-- Add click to copy functionality on the code snippet -->
			<CopyToClipboard
				stringToCopy={rampCSS}
				copyMessage="CSS Copied"
			>
				<div 
					class="token-list" 
					style="background-color: {rampShades[0].hex};"
				>
					{#each rampShades as shade, i}
						{shade.label}: {shade.hex};<br />
					{/each}
				</div>
			</CopyToClipboard>
		</div>
	</details>
</section>

<style>
	.color-ramp-wrap {
		border: solid 1px;
		padding: var(--m);
	}

  .ramp-label {
		display: flex;
		align-items: center;
		justify-content: start;
		gap: var(--xs);
	}

	.color-preview {
		display: inline-block;
		width: 1rem;
		height: 1rem;
		border-radius: var(--br-xl);
	}

  details div.f-col:first-of-type {
    padding-top: var(--gap-m);
  }

	.token-list {
		padding: var(--gap-m);
		font-family: monospace;
    width: max-content;
	}
</style>
