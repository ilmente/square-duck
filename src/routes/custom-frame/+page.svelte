<script lang="ts">
  import { parse } from '$lib/helpers/markdown';
  import Layout from '$lib/components/Layout.svelte';
  import Paper from '$lib/components/Paper.svelte';
  import Input from '$lib/components/Input.svelte';

  let title = '';
  let text = '';
</script>

<Layout>
  <Paper slot="paper" {title} text={parse(text)} placeholder="Customize your frame" />
  <h1>Custom frame</h1>
  <p>Use the form below to create your frame.</p>
  <form>
    <fieldset>
      <Input label="Title" placeholder="Big heading goes here" bind:value={title} />
    </fieldset>
    <fieldset>
      <Input
        label="Text"
        placeholder="Long description goes here"
        multiline
        bind:value={text}
        tooltip="
          Add 2 or more new lines to separate paragraphs.
          Wrap anything around 2 asterisks (*text*) for italic.
          Wrap anything around 4 asterisks (**text**) for bold.
      " />
    </fieldset>
  </form>
  <p>
    <small> </small>
  </p>
</Layout>

<style>
</style>
