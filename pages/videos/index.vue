<template>
  <div class="videoList">
    <h1>This is the <strong>Videos Page</strong></h1>
    <!-- ACCESS THE VIDEOS FROM THE STORE.STATE.VIDEOS ARRAY -->
    <div class="links" v-for="video in $store.state.videos" :key="video.id">
      <nuxt-link :to="`/videos/${video.id}`">{{ video.Title }}</nuxt-link>
    </div>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  head : {
    'title': "Nuxt Video List"
  },
  // USE THE FETCH HOOK AND ADD THE STORE TO ACCESS IT
  async fetch({$axios, store}) {
    let resp = await $axios.get("/videos");
    let videos = resp.data;
    // COMMIT THE MUTATION (LIKE CALLING THE METHOD)
    store.commit('SET_VIDEOS', videos)

  },
  // COMPUTED IS JUST LIKE A LOGIC HANDLER FOR YOUR DATA e.g return this.something + " " + this.else = something else
  computed: {
    video() {
      return this.videos.find(v => v.id == this.$route.params.id);
    }
  }
};
</script>

<style scoped>
.videoList {
  text-align: center;
}

h1 {
  margin-top: 20px;
}

.links a{
  margin-top: 10px;
  color:aliceblue;
  text-decoration: none;
  letter-spacing: .3rem;
  font-weight: bold;
}

.links a:hover{
  color:green;
  transform: scale(1.5, 1.5);

}
</style>
