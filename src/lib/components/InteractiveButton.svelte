<script lang="ts">
	import type { MouseEventHandler } from "svelte/elements";

  export let id:string;
  export let buttonType: "button" | "submit" | "reset" = "button";
  export let text:string;
  export let handleClick:MouseEventHandler<any>;
</script>

<button 
  class="interactive-button"
  type={buttonType}
  id={id}
  on:click={handleClick}
  >{text}</button>

<style>
  .interactive-button {
    padding: var(--padding-inline);
    background-color: var(--gray-8);
    color: var(--white);
    transition: var(--transition-m);
  }

  .interactive-button:hover {
    background-color: var(--gray-9);
  }
</style>