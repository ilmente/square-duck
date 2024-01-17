<script lang="ts">
  export let title = '';
  export let text = '';
  export let placeholder = '';
</script>

<section class="paper {$$restProps.class}" data-paper>
  <div class="paper__frame">
    <div class="paper__title">
      {#if title}<h1>{title}</h1>{/if}
      {#if !title && !text}<span class="placeholder no-print">{placeholder}</span>{/if}
    </div>
    <article class="paper__text">{@html text}</article>
  </div>
</section>

<style>
  :root {
    --frame-margin: 5cqw;
  }

  .paper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--color-bg-1);
    box-shadow: var(--shadow);
    container-type: inline-size;
  }

  .paper__frame {
    position: absolute;
    top: var(--frame-margin);
    bottom: var(--frame-margin);
    left: var(--frame-margin);
    right: var(--frame-margin);
    display: grid;
    gap: var(--frame-margin);
    grid-template-rows: auto min-content;
    border: var(--outline);
    overflow: hidden;
  }

  .paper__title {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .paper__text {
    column-count: 2;
    column-gap: 2cqw;
    text-align: justify;
  }

  @media print {
    .paper {
      background-color: transparent;
      box-shadow: none;
    }

    .paper__frame {
      position: static;
      height: 100vh;
      width: 100vw;
      padding: 1cqw;
      background-color: transparent;
      border: none;
    }
  }
</style>
