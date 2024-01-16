<script>
  import Layout from '$lib/components/Layout.svelte';
  import Paper from '$lib/components/Paper.svelte';

  let title = '', text = '';
</script>

<Layout>
  <Paper slot="paper" title={title} placeholder="Use the form on the side to add your content.">
    {@html text}
  </Paper>
  <h1>Custom frame</h1>
  <p>
    This page is still under construction. Sorry for the inconvenience. Come back soon!
  </p>
</Layout>
