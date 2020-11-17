<template>
  <div class="container">
      <div class="logo"></div>
    <div class="headline">
      <vue-typed-js
        :strings="['First text', 'Second Text']"
        :loop="true"
        :backDelay="1000"
        :backSpeed="50"
        :typeSpeed="80"
      >
        <h1>
          Hi, I am Ocholiba <br />
          Optio dolorem porro corrupti assumenda tenetur sint consequuntur
          vitae, veniam modi blanditiis
          <mark><span class="typing"></span></mark>
        </h1>
      </vue-typed-js>
    </div>
    <div class="paragraph">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima porro
        error magnam corrupti amet, doloribus deserunt nam aut quas. Beatae odio
        dolore, alias quia ab dicta. Reiciendis illo quo nostrum.
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css">
.logo{
    background-image: url('../assets/ocholiba.png');
    background-blend-mode: overlay;
    width: 120px;
    height: 120px;
  margin-top: 20vw;
  margin-left: auto;
  margin-right: auto;
  background-size: cover;
}
mark {
  background: tomato;
}
.typing {
  color: wheat;
}
.typed-element {
  justify-content: center;
}
.typed-element span.typed-cursor {
  font-size: 4vw;
  color: wheat;
}
h1 {
  font-size: 4vw;
}
.paragraph{
    font-size: 16px;
}
@media screen and (max-width: 767px) {
  .typed-element span.typed-cursor,
  h1 {
    font-size: 6vw;
  }
  .paragraph{
      font-size: 19px;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .typed-element span.typed-cursor,
  h1 {
    font-size: 5vw;
  }
}
</style>
