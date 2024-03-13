<script lang='ts'>
  export let summary:String;

</script>

<details>
  <summary>{summary}</summary>
  <div class="details-inner">
    <slot></slot>
  </div>
</details>

<style>

  details {
    color: var(--gray-8);
    font-size: var(--fontsizebody-s);
  }


  summary {
    padding: var(--xs);
    cursor: pointer;
    transition: var(--transition-m);
  }

  summary:hover {
    background-color: var(--gray-1);
  }

  .details-inner {
    padding: var(--xs) var(--s);
    background-color: var(--gray-1);
    display: flex;
    flex-direction: column;
    gap: var(--s);
    font-size: var(--fontsizebody-xs);
  }
</style>