<script lang="ts">
  import '$lib/styles/global.css';
  import { page } from '$app/stores';
  import Logo from '$lib/components/Logo.svelte';

  function onPrintClick(): void {
    window.print();
  }

  function isActive(path: string): boolean {
    return $page.url.pathname === path;
  }
</script>

<div class="layout {$$restProps.class}">
  <header class="layout__header">
    <a class="layout__menu-item layout__menu-item--logo" href="/"><Logo /></a>
    <a class="layout__menu-item" class:layout__menu-item--active={isActive('/')} href="/">Welcome</a>
    <a class="layout__menu-item" class:layout__menu-item--active={isActive('/custom-frame')} href="/custom-frame">Create your frame</a>
  </header>
  <main class="layout__main"><slot name="paper" /></main>
  <div class="layout__rotate">
    <span class="icon">stay_primary_landscape</span>
    <span>Please rotate to landscape</span>
  </div>
  <aside class="layout__sidebar">
    <div class="layout__sidebar-content"><slot /></div>
  </aside>
  <div class="layout__right">
    <button class="layout__print icon" on:click={onPrintClick}>print</button>
  </div>
  <footer class="layout__footer">
    <span>
      Square Duck is
      <a href="https://github.com/ilmente/square-duck" target="_blank">hand made</a>
      with &#9829; by
      <a href="https://ilmente.com" target="_blank">ilmente</a>
    </span>
  </footer>
</div>

<style>
  :root {
    --section-spacing: 5rem;
    --sheet-height: calc(100vh - var(--section-spacing) * 2);
    --sheet-width: calc(71vh - var(--section-spacing) * 2);
  }

  .layout {
    display: grid;
    grid-template-rows: auto var(--sheet-height) auto;
    grid-template-columns: auto var(--sheet-width) var(--section-spacing);
    grid-template-areas:
      'header header right'
      'left main right'
      'left footer footer';
    height: 100vh;
    width: 100vw;
  }

  .layout__header {
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: var(--section-spacing);
    border-right: var(--border);
  }

  .layout__menu-item:not(:last-child) {
    margin-right: 3rem;
  }

  .layout__menu-item--active {
    text-decoration: none;
    color: var(--color-text-0);
  }

  .layout__main {
    position: relative;
    grid-area: main;
    border: var(--border);
  }

  .layout__rotate {
    display: none;
    grid-area: main;
    border: var(--border);
  }

  .layout__sidebar {
    grid-area: left;
    border-top: var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    overflow-y: auto;
  }

  .layout__sidebar-content {
    max-width: 40rem;
    margin: 5rem;
  }

  .layout__right {
    grid-area: right;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;
    border-bottom: var(--border);
  }

  .layout__print {
    color: var(--color-text-1);
  }

  .layout__footer {
    grid-area: footer;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: var(--section-spacing);
    padding-right: 1rem;
    border-left: var(--border);
    text-align: center;
  }

  @media screen and (max-width: 1100px) and (orientation: landscape) {
    .layout__sidebar {
      align-items: flex-start !important;
    }

    .layout__sidebar-content {
      margin: 1.5rem;
    }
  }

  @media screen and (max-width: 1100px) and (orientation: portrait) {
    .layout {
      grid-template-rows: var(--section-spacing) auto var(--section-spacing);
      grid-template-columns: var(--section-spacing) auto var(--section-spacing);
    }

    .layout__menu-item.layout__menu-item--logo {
      margin: 0;
    }

    .layout__main,
    .layout__print,
    .layout__menu-item:not(.layout__menu-item--logo) {
      display: none;
    }

    .layout__rotate {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .layout__sidebar-content {
      display: none;
    }
  }

  @media print {
    .layout__header,
    .layout__rotate,
    .layout__sidebar,
    .layout__right,
    .layout__footer {
      display: none;
    }

    .layout,
    .layout__main {
      display: block;
      border: 0;
      background-color: transparent;
      overflow: visible;
    }
  }
</style>
