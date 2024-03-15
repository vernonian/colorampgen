<script lang="ts">
  import { fade } from 'svelte/transition';

  // Props
  export let message:string = "Default Text";
  export let duration:number = 2000; // milliseconds

  let isVisible:boolean = false;
  let classes:string;

  export function showSnackbar() {
    isVisible = true;
    setTimeout(() => {
      isVisible = false;
    }, duration);
  }
</script>

<!-- Show the snackbar when the isVisible prop is true -->
{#if isVisible}
  <div class="snackbar" transition:fade={{ duration: 200 }}>
    <p>{message}</p>
  </div>
{/if}

<style>
  .snackbar {
    padding: var(--padding-inline);
    background-color: var(--gray-9);
    color: var(--white);
    box-shadow: 0px var(--xs) var(--s) 0px rgba(0,0,0,0.25);
    position: fixed;
    top: var(--m);
    left: 50%;
    font-size: var(--fontsizebody-s);
    transform: translateX(-50%) translateY(1rem);
    z-index: var(--z-max);
    transition: var(--transition-m);
  }
</style>