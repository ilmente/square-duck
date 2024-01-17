<script>
  import { onMount } from 'svelte';
  import { getRandomDefinition } from '$lib/helpers/definition';
  import Layout from '$lib/components/Layout.svelte';
  import Logo from '$lib/components/Logo.svelte';
  import Paper from '$lib/components/Paper.svelte';

  let title = '';
  let text = '';

  onMount(async () => {
    const definition = await getRandomDefinition();
    title = definition.title;
    text = definition.text;
  });
</script>

<Layout>
  <Paper slot="paper" {title} {text} placeholder="Looking for a word..." />
  <div class="logo">
    <Logo size={10} />
  </div>
  <h1>Welcome</h1>
  <p>
    Square Duck is a small experiment I did for a friend: Ilaria. She had this idea of printing some words with their
    definition, frame them and attach them to the wall. I saw something like that online for a price, so I choose to
    build it myself.
  </p>
  <p>
    On top of that, I always wanted to fiddle a bit with design and typography. Being a frontend dev I'm constantly
    exposed to UI, but I seldom try to create one myself. This is my try.
  </p>
  <h2>So&#8230; How does it work?</h2>
  <p>
    <a href="/custom-frame">Go here</a>, <strong>choose a title, add some text</strong>, see how it looks in
    preveiw <strong>and print it</strong>.
    <em>That's it!</em>
  </p>
</Layout>

<style>
  .logo {
    float: left;
    margin: 0 1rem 1rem 0;
  }
</style>
