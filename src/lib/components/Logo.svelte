<script lang="ts">
  export let size = 2;
  $: beakSize = (size / 100) * 23;
  $: eyeSize = size / 8;
</script>

<span class="logo {$$restProps.class}" style:width="{size}rem" style:height="{size}rem">
  <span class="body"></span>
  <span class="beak" style:border-width="0 {beakSize}rem {beakSize * 2}rem {beakSize}rem"></span>
  <span class="eye" style:width="{eyeSize}rem" style:height="{eyeSize}rem"></span>
  <span class="eye right" style:width="{eyeSize}rem" style:height="{eyeSize}rem"></span>
</span>

<style>
  .logo {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }

  .body {
    position: absolute;
    left: 0;
    /* right: 0; */
    display: block;
    height: 100%;
    width: 80%;
    margin: auto;
    background-color: var(--color-outline);
  }

  .beak {
    position: absolute;
    top: 18%;
    right: 0;
    display: block;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-color: transparent transparent var(--color-highlight) transparent;
    transform: rotate(90deg);
  }

  .eye {
    position: absolute;
    top: 10%;
    left: 35%;
    display: block;
    border-radius: 100%;
    background-color: var(--color-bg-0);
  }

  .eye::before {
    content: '';
    display: block;
    width: 70%;
    height: 70%;
    margin: 4% 0 0 4%;
    border-radius: 100%;
    background-color: var(--color-text-0);
  }

  .eye.right {
    left: 65%;
  }
</style>
