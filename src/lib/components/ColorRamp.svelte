<script lang="ts">
	import ColorCube from "./ColorCube.svelte";

  export let baseName:string;
  export let baseHex:string;
  const shades:string[] = generateColorShades(baseHex);

/**
 * generateColorShades()
 * @param {string} hexColor : The base hex color used to generate color shades and tints.
 * Generate different colors based on a single color.
 */
function generateColorShades(hexColor:string) {
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
  shades.push(`#${(r0 << 16 | g0 << 8 | b0).toString(16).padStart(6, '0')}`);
  
  // Generate and add the next four tints
  for (let i = 1; i <= 4; i++) {
    const factor = 1 - i * stepMultiplier;
    const r = Math.round(red + (255 - red) * factor);
    const g = Math.round(green + (255 - green) * factor);
    const b = Math.round(blue + (255 - blue) * factor);
    shades.push(`#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`);
  }

  // Add original color
  shades.push(`#${hexColor}`); 

  // Generate and add the last four shades
  for (let i = 1; i <= 4; i++) {
    const factor = 1 - i * stepMultiplier;
    const r = Math.round(red * factor);
    const g = Math.round(green * factor);
    const b = Math.round(blue * factor);
    shades.push(`#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`);
  }
  return shades;
}

</script>

<ul class="color-ramp">
  {#each shades as shade, i}
    <li>
      <ColorCube
        color={shade}
        name={baseName}
        index={i}
      />
    </li>  
  {/each}
  
</ul>
<style>
  .color-ramp {
    display: flex;
    gap: 1rem;
    list-style: none;
    padding: 0px;
  }
</style>