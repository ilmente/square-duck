<div class="sheet {$$restProps.class}">
  <div class="frame">
    <div class="title">
      <h1>ilaria</h1>
    </div>
    <div class="image"></div>
    <article class="section text">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Consequat semper
        viverra nam libero. Congue eu consequat ac felis donec et. Fermentum
        iaculis eu non diam phasellus vestibulum lorem sed.
      </p>
      <p>
        Ornare arcu odio ut sem nulla pharetra. Natoque penatibus et magnis dis
        parturient montes nascetur ridiculus. Pretium lectus quam id leo.
        Tincidunt augue interdum velit euismod in pellentesque massa placerat
        duis. Ultricies lacus sed turpis tincidunt id. Scelerisque purus semper
        eget duis at tellus at urna condimentum. Pellentesque nec nam aliquam
        sem et tortor consequat id. Massa sapien faucibus et molestie ac feugiat
        sed lectus. Vel eros donec ac odio tempor orci dapibus ultrices in.
        Libero volutpat sed cras ornare arcu dui. Amet purus gravida quis
        blandit turpis cursus in hac. Tincidunt augue interdum velit euismod in
        pellentesque massa placerat. Enim nulla aliquet porttitor lacus.
      </p>
      <p>
        Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Elit eget
        gravida cum sociis natoque. Odio facilisis mauris sit amet massa vitae.
        Donec pretium vulputate sapien nec sagittis aliquam.
      </p>

      <p>
        Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Pharetra
        sit amet aliquam id diam maecenas ultricies mi. In dictum non
        consectetur a erat. Lorem donec massa sapien faucibus et molestie ac
        feugiat sed. Mauris in aliquam sem fringilla ut morbi tincidunt augue.
      </p>
    </article>
  </div>
</div>

<style>
  :root {
    --spacing: 2cqw;
  }

  .sheet {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: var(--shadow);
    font-size: 1em;
    container-type: inline-size;
  }

  .frame {
    position: absolute;
    top: var(--spacing);
    bottom: var(--spacing);
    left: var(--spacing);
    right: var(--spacing);
    display: grid;
    gap: var(--spacing);
    grid-template-rows: auto min-content max-content;
    border: var(--outline);
    overflow: hidden;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title h1 {
    font-family: var(--font-serif);
    text-transform: none;
    font-size: 12cqw;
  }

  .image {
  }

  .text {
    column-count: 2;
    column-gap: var(--spacing);
    text-align: justify;
    font-size: 1.1cqw;
    letter-spacing: 0;
  }

  .text p {
    margin: 0;

  }
</style>
