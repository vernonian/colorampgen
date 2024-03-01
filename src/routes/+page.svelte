<script lang="ts">
  import TextInputUnit from '$lib/components/TextInputUnit.svelte';
  import InteractiveButton from '$lib/components/InteractiveButton.svelte';
  import ColorCube from '$lib/components/ColorCube.svelte';
	import ColorRamp from '$lib/components/ColorRamp.svelte';

  // let shades = ["#fffae6", "#fff5cc", "#ffeb99", "#fee266", "#fed833", "#fece00", "#cba500", "#987c00", "#665200", "#332900"];
  //generate function


// function handleCreateColorRamp(hexColor:string, hexName:string, insertTarget:HTMLElement) {
//   // Handle errors
//   // If there is no hashtag, add it
//   if (hexColor[0] != "#") {
//     hexColor = "#" + hexColor;
//   }

//   // If there is no name, give it a default
//   if (!hexName || hexName == "") {
//     hexName = "my-color";
//   }

//   // Validate string as a hex code
//   if (isValidHexCode(hexColor)) {
//     // Create color ramp and instert it into the target
//     let ramp = new ColorRamp(hexColor, hexName);
//     // insertTarget.appendChild(ramp.htmlList);
//     insertTarget.insertBefore(ramp.htmlList, insertTarget.firstChild);
//   }
//   else {
//     console.log("Error: Invalid hex code");
//   }
// }

// /**
//  * ColorRamp Object
//  * @param {string} color : The base color used to generate the color ramp in hex format.
//  * @param {string} name  : The name the user wants to assign the color.
//  * 
//  * Properties
//  * this.baseColor : String of the hex value
//  * this.baseName  : String of the base color name
//  * this.colorNum  : Used for looping, has a value of 9.
//  * this.hexShades : An array to hold the generated hex values. 
//  * ths.colorCubes : An array to hold the child ColorCube objects
//  * this.htmlList  : A <ul> element to hold the html of the color cubes. * 
//  */
// class ColorRamp {
//   constructor(color:string, name:string = "My Color") {
//     this.baseColor = color.toLowerCase();
//     this.baseName = name.toLowerCase().replace(' ', '-');
//     this.colorNum = 10;
//     this.hexShades = generateColorShades(this.baseColor);
//     this.colorCubes = [];
//     this.htmlList = document.createElement('ul');
//     this.htmlList.classList.add('color-ramp');
    
//     //Initialize cubes and add them to the DOM
//     for (let i=0; i < this.colorNum; i++) {
//       // Initialize colorCubes array with cubes
//       let tempCube = new ColorCube(this.hexShades[i], this.baseName, i);
//       this.colorCubes.push(tempCube);
      
//       // Append cube's list items to htmlList
//       this.htmlList.appendChild(this.colorCubes[i].htmlCube);
//     }
//     // this.debugValues();
//   }
  
//   // Debug
//   // debugValues() {
//   //   this.printValue("color", this.baseColor);
//   //   this.printValue("name", this.baseName);
//   //   this.printValue("hexShades", this.hexShades);
//   //   this.printValue("colorCubes", this.colorCubes);
//   //   this.printValue("htmlList", this.htmlList);
//   // }
// }




// /**
//  * Validates a string as a hex code.
//  * @param {string} input 
//  */
// function isValidHexCode(input:string) {
//   const hexCodeRegex = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
//   return hexCodeRegex.test(input);
// }

</script>

<section class="f-col">
  <h2>ColoRampGen</h2>
  <p>Enter a hex code and click "Generate" to create a color ramp of tints and shades.</p>
  <p>Once the colors are generated, click to copy the hex code.</p>
</section>
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
      <InteractiveButton
        id="generate-btn"
        text="Generate Color Ramp"
        handleClick={() => console.log("wow")}
      ></InteractiveButton>
    </form>
  </aside>
  <section id="target">
    <ColorRamp baseName="yellow" baseHex="AACE00" />
  </section>
</section>


<style>
  #main-grid {
    grid-template-columns: 200px 1fr;
  }
</style>