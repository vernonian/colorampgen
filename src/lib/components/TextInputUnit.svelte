<script lang="ts">
  export let placeholder:string = "Enter text";
  export let inputId:string;
  export let label:string = "Label"
  export let boundValue:string;
  export let required:boolean = true;
</script>

<div class="text-input-unit f-col gap-s">
  <label for={inputId}>{label}</label>
  <input type="text"
          class="text-input"
          id={inputId}
          placeholder={placeholder}
          required={required}
          autocomplete="off"
          bind:value={boundValue}
          />
</div>

<style>
  .text-input-unit label {
    color: var(--gray-8);
    font-size: var(--fontsizebody-xs);
  }

  .text-input {
    font-size: var(--fontsizebody-m);
    padding: var(--gap-s);
    border: solid 1px;
    border-color: var(--gray-3);
    color: var(--black);
    transition: var(--transition-m);
  }

  .text-input:hover, .text-input:focus {
    border-color: var(--gray-8);
  }

  .text-input[type='text']::placeholder {
    color: var(--gray-8);
  }
</style>