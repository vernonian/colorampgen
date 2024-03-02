<script lang="ts">
  export let placeholder:string = "Enter text";
  export let inputId:string;
  export let label:string = "Label"
  export let boundValue:string;
</script>

<div class="text-input-unit f-col gap-s">
  <label for={inputId}>{label}</label>
  <input type="text"
          id={inputId}
          placeholder={placeholder}
          required
          autocomplete="off"
          bind:value={boundValue}
          />
</div>

<style>
  .text-input-unit label {
    color: var(--gray-8);
    font-size: var(--fontsize-s);
  }

  .text-input-unit input[type='text'] {
    padding: var(--gap-s);
    border: solid 1px var(--gray-5);
    color: var(--black);
  }

  .text-input-unit input[type='text']::placeholder {
    color: var(--gray-8);
  }
</style>