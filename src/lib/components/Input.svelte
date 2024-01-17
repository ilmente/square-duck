<script lang="ts">
  export let label = '';
  export let multiline = false;
  export let value = '';
  export let placeholder = '';
  export let tooltip = '';
</script>

<label class="input {$$restProps.class}">
  <span class="input__label">{label}</span>
  {#if multiline}
    <textarea class="input__control input__control--multiline" {placeholder} bind:value={value}></textarea>
  {:else}
    <input class="input__control" {placeholder} bind:value={value} />
  {/if}
  {#if tooltip}
    <small class="input__tooltip">{tooltip}</small>
  {/if}
</label>

<style>
  .input {
    display: block;
  }

  .input__label {
    display: block;
    margin-bottom: 0.15rem;
  }

  .input__control {
    display: block;
    width: 100%;
    padding: 0.5rem;
    margin: 0;
    border: var(--border);
    background-color: var(--color-bg-1);
    line-height: var(--line-height-wide);
    color: var(--color-text-1);
  }

  .input__control:active,
  .input__control:focus {
    outline: none;
    border: 1px solid var(--color-text-2)
  }

  .input__control.input__control--multiline {
    min-height: 20rem;
  }

  .input__tooltip {
    display: block;
    padding: 0.5rem;
    background-color: var(--color-bg-2);
  }
</style>
