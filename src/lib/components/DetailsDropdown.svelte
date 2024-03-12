<script lang='ts'>
  export let summary:String;

</script>

<details class="body-s">
  <summary>{summary}</summary>
  <div class="details-inner">
    <slot></slot>
  </div>
</details>

<style>

  details {
    color: var(--gray-8);
  }


  summary {
    padding: var(--xs);
    cursor: pointer;
    transition: var(--transition-m);
  }

  summary:hover {
    background-color: var(--gray-2);
  }

  .details-inner {
    padding: var(--xs) var(--s);
    background-color: var(--gray-2);
    display: flex;
    flex-direction: column;
    gap: var(--s);
  }
</style>