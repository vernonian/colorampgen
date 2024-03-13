<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { copyToClipboard } from "$lib/index";
  import Snackbar from "./Snackbar.svelte";
  import { onMount } from 'svelte';

  
  // Props
  export let stringToCopy:string;

  // Create custom event 
  const dispatch = createEventDispatcher();
  let sb:Snackbar;

  // Use onMount() to make sure the document exists since target is document
  onMount(() => {
    // Create new snackbar
    sb = new Snackbar(
    {
      target: document.body,
      props: {
        message: "Copied to Clipboard",
        duration: 2000
      }
    });
  })
  
  // Event handler that issues the custom event 
  function handleCopytoClipboard() {
      // Issue event 
      dispatch('copy');
      
      // Copy string to clipboard
      copyToClipboard(stringToCopy);
      
      // Show snackbar
      sb.showSnackbar();
    }
</script>

<button on:click={handleCopytoClipboard}>
  <slot/>
</button>