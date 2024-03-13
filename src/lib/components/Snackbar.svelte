<script lang="ts">
  // Props
  export let message:string = "Default Text";
  export let duration:number = 2000; // milliseconds

  let isVisible:boolean = false;

  export function showSnackbar() {
    isVisible = true;
    setTimeout(() => {
      isVisible = false;
    }, duration);
  }
</script>

{#if isVisible}
  <div class="snackbar">
    <p>{message}</p>
  </div>
{/if}

<style>
  .snackbar {
    padding: var(--padding-inline);
    background-color: var(--gray-9);
    color: var(--white);
    box-shadow: 0px var(--xs) var(--s) 0px rgba(0,0,0,0.5);
    position: fixed;
    top: var(--m);
    left: 50%;
    font-size: var(--fontsizebody-s);
    transform: translateX(-50%);
    z-index: var(--z-max);
    transition: var(--transition-m);
  }
</style>