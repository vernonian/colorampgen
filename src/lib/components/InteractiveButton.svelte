<script lang="ts">
  export let id:string;
  export let buttonType: "button" | "submit" | "reset" = "button";
  export let text:string;
  export let handleClick:Function;
</script>

<button 
  class="interactive-button"
  type={buttonType}
  id={id}>
  on:click={handleClick}
  {text}
</button>

<style>
  .interactive-button {
    padding: var(--padding-inline);
    background-color: var(--blue-3);
    color: var(--black);
  }
</style>