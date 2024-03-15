<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { copyToClipboard } from "$lib/index";
  import Snackbar from "./Snackbar.svelte";
  import { onMount } from 'svelte';

  
  // Props
  export let stringToCopy:string;
  export let copyMessage:string = `Copied: ${stringToCopy}`;
  export let classes:string | undefined = undefined;

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
        message: copyMessage,
        duration: 2000
      }
    });
  })
  
  // Event handler that issues the custom event 
  function handleCopytoClipboard() {
      // Issue custom event 
      dispatch('copy');
      
      // Copy string to clipboard. Function in $lib/copyToClipboard.ts
      copyToClipboard(stringToCopy);
      
      // Show snackbar
      sb.showSnackbar();
    }
</script>

<button on:click={handleCopytoClipboard}
  type="button"
  class={classes}>
  <slot/>
</button>

<style>
  button {
    padding: 0px;
    width: inherit;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>