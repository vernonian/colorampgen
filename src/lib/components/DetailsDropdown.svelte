<script lang='ts'>
  export let summary:String;

</script>

<details>
  <summary>{summary}</summary>
  <div class="details-inner body-s">
    <slot></slot>
  </div>
</details>

<style>
  .details-inner {
    padding: var(--xs) var(--s);
    background-color: var(--gray-3);
    display: flex;
    flex-direction: column;
    gap: var(--s);
  }
</style>