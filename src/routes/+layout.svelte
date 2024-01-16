<script lang="ts">
  import "./styles.css";
  import Logo from "$lib/components/Logo.svelte";
  import Sheet from "$lib/components/Sheet.svelte";

  function onPrintClick(): void {
    window.print();
  }
</script>

<div class="app">
  <header class="section">
    <a href="/" class="logo"><Logo /></a>
    <nav>
      <span>SQUARE DUCK</span>
      <a href="/">Create your document</a>
    </nav>
  </header>
  <main class="sheet"><Sheet /></main>
  <div class="section rotate">
    <span class="icon">stay_primary_landscape</span>
    <span>Please rotate to landscape.</span>
  </div>
  <aside class="section">
    <div class="sidebar"><slot /></div>
  </aside>
  <div class="section right">
    <button class="icon" on:click={onPrintClick}>print</button>
  </div>
  <footer class="section">
    <span>Handmade with ❤️ by&nbsp;<a href="https://ilmente.com" target="_blank"
      >ilmente</a
    ></span>
  </footer>
</div>

<style>
  :root {
    --section-spacing: 5rem;
    --sheet-height: calc(100vh - var(--section-spacing) * 2);
    --sheet-width: calc(75vh - var(--section-spacing) * 2);
  }

  .app {
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: auto var(--sheet-height) auto;
    grid-template-columns: auto var(--sheet-width) var(--section-spacing);
    grid-template-areas:
      "header header right"
      "left main right"
      "left footer footer";
  }

  .section {
    display: flex;
    align-items: center;
    font-family: var(--font-mono);
    min-height: var(--section-spacing);
    min-width: var(--section-spacing);
    color: var(--color-text-1);
  }

  header {
    grid-area: header;
    border-right: var(--border);
  }

  .logo {
    margin: 0 1.5rem 0 1.5rem;
  }

  nav > * {
    margin-right: 1.5rem;
  }

  main {
    position: relative;
    grid-area: main;
    background-color: var(--color-bg-0);
    border: var(--border);
  }

  .rotate {
    display: none;
    grid-area: main;
    border: var(--border);
  }

  aside {
    grid-area: left;
    border-top: var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    overflow-y: auto;
  }

  .sidebar {
    max-width: 40rem;
    margin: 5rem;
  }

  .right {
    grid-area: right;
    align-items: flex-start;
    justify-content: center;
    margin-top: 1.5rem;
    border-bottom: var(--border);
  }

  footer {
    grid-area: footer;
    border-left: var(--border);
    padding-right: 1rem;
    justify-content: flex-end;
    margin-bottom: 0;
    text-align: right;
  }

  @media screen and (max-width: 1100px) and (orientation: landscape) {
    aside {
      align-items: flex-start !important;
    }

    .sidebar {
      margin: 1.5rem;
    }
  }

  @media screen and (max-width: 1100px) and (orientation: portrait) {
    .app {
      grid-template-rows: var(--section-spacing) auto var(--section-spacing);
      grid-template-columns: var(--section-spacing) auto var(--section-spacing);
    }

    .sheet {
      display: none;
    }

    .rotate {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .sidebar {
      display: none;
    }
  }
</style>
