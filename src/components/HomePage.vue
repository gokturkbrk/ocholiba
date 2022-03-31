<template>
  <div>
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
    <b-modal ref="my-modal" hide-footer title="Yarışma Kuralları">
      <div class="d-block text-center">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores laboriosam maxime cumque, debitis, accusamus quaerat, suscipit similique veniam reiciendis aperiam nostrum. Nemo dicta eveniet voluptas eum placeat vitae alias sunt?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus tenetur asperiores harum! Delectus quisquam alias libero illum temporibus amet ab placeat fuga soluta consequuntur, quaerat hic omnis voluptates exercitationem beatae?</p>
      </div>
      <b-button id="toggle-btn" @click="toggleModal">Kapat</b-button>
    </b-modal>
    </div>
    <div class="footer">
      <div class="credits">
        <span>Photo by <a href="https://unsplash.com/@chilinik?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Nikita Kostrykin</a> on <a href="https://unsplash.com/s/photos/controller?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
      </div>
      <div>
        <b-button id="toggle-btn" @click="toggleModal">Yarışma Kuralları</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleModal () {
    // We pass the ID of the button that we want to return focus to
    // when the modal has hidden
      this.$refs['my-modal'].toggle('#toggle-btn')
    }
  }
}
</script>

<style lang="css">
</style>
