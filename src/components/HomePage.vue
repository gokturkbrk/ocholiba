<template>
  <div class="container">
      <div class="logo"></div>
    <div class="headline">
      <vue-typed-js
        :strings="[$t('genres.rpg'),$t('genres.sim'),$t('genres.pg'),$t('genres.ag')]"
        :loop="true"
        :backDelay="1000"
        :backSpeed="50"
        :typeSpeed="80"
      >
        <h1>
          {{ $t("message.introduction") }} <br />
          {{ $t("message.paragraph") }} <br/>
          {{ $t("message.playing")}}
          <mark><span class="typing"></span></mark>
        </h1>
      </vue-typed-js>
    </div>
    <div class="social">
      <div class="icon">
        <div class="icon-container"><a href="https://www.twitch.tv/ocholiba" title="Twitch" target="_blank"><i class="lni lni-xl lni-twitch"></i></a></div>
        <div class="icon-container"><a href="https://www.youtube.com/c/Ocholiba/featured" title="Youtube" target="_blank"><i class="lni lni-xl lni-youtube"></i></a></div>
        <div class="icon-container"><a href="https://www.instagram.com/ocholiba/" title="Instagram" target="_blank"><i class="lni lni-xl lni-instagram-original"></i></a></div>
        <div class="icon-container"><a href="https://discord.com/invite/CT7mK9k" title="Discord" target="_blank"><i class="lni lni-xl lni-discord"></i></a></div>
        <div class="icon-container"><a href="https://twitter.com/ocholiba" title="Twitter" target="_blank"><i class="lni lni-xl lni-twitter-original"></i></a></div>
      </div>
    </div>
    <div class="footer">
      <span>Photo by <a href="https://unsplash.com/@chilinik?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Nikita Kostrykin</a> on <a href="https://unsplash.com/s/photos/controller?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css">
.footer{
  position: absolute;
  bottom: 0;
  left: 20px;
}
.footer a{
  text-decoration: none;
  color: inherit;
}
.lni-xl{
  font-size: 3em;
  margin: 0 10px;
}
.social .icon{
  display: flex;
  justify-content: center;
}
.social .icon a{
  text-decoration: none;
  color: inherit;
}
.logo{
    background-image: url('../assets/ocholiba.png');
    background-blend-mode: overlay;
    width: 120px;
    height: 120px;
  margin-top: 10vh;
  margin-left: auto;
  margin-right: auto;
  background-size: cover;
}
mark {
  background: #552ebf;
}
.typing {
  color: wheat;
}
.typed-element {
  justify-content: center;
}
.typed-element span.typed-cursor {
  font-size: 3vw;
  color: wheat;
}
h1 {
  font-size: 3vw;
}
.paragraph{
    font-size: 12px;
}
@media screen and (max-width: 767px) {
  .typed-element span.typed-cursor,
  h1 {
    font-size: 6vw;
  }
  .paragraph{
      font-size: 19px;
  }

.lni-xl{
  font-size: 2em;
}
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .typed-element span.typed-cursor,
  h1 {
    font-size: 5vw;
  }
}
</style>
