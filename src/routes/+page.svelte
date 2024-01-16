<script>
  import Title from "$lib/components/Title.svelte";
  import Text from "$lib/components/Text.svelte";
  import Logo from "$lib/components/Logo.svelte";
</script>

<div class="page">
  <div class="logo">
    <Logo class="logo" size={10} />
  </div>
  <h1>Welcome</h1>
  <p>
    SQUARE DUCK is a small experiment I did for a friend: Ilaria. She had this
    idea of printing some words with their definition, frame them and attach
    them to the wall. I saw something like that online for a price, so I choose
    to build it myself.
  </p>
  <p>
    On top of that, I always wanted to fiddle a bit with design and typography.
    Being a frontend dev I'm constantly exposed to UI, but I seldom try to
    create one myself. This is my try.
  </p>
  <h2>So&#8230; How does it work?</h2>
  <p>
    <a href="/">Go here</a>, choose a word or a title, add some text, add an
    image (if you want), see how it looks in the preveiw and print it.
    <br /><em>That's it!</em>
  </p>
</div>

<style>
  .logo {
    float: left;
    margin: 0 1rem 1rem 0;
  }
</style>
