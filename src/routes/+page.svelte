<script>
  import TextInputUnit from '$lib/components/TextInputUnit.svelte';
</script>
<h2>ColoRampGen</h2>
<p>Enter a hex code and click "Generate" to create a color ramp of tints and shades.</p>
<p>Once the colors are generated, click to copy the hex code.</p>
<section id="main-grid" class="grid">
  <aside>
    <form class="f-col">
      <TextInputUnit 
        label="Hex Code" 
        inputId="hex-input" 
        placeholder="#FECE00" 
      />
      <TextInputUnit 
        label="Token Name" 
        inputId="name-input" 
        placeholder="My Color" 
      />
      <button type="button"
              id="generate-btn">Generate Color Ramp</button>
      </form>
  </aside>
  <section id="target">

  </section>
</section>


<style>
  #main-grid {
    grid-template-columns: 200px 1fr;
  }
</style>