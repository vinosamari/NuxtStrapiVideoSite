<template>
  <div>
    <h1>This is the <strong>Videos Page</strong></h1>
    <div v-for="video in videos" :key="video.id">
      <nuxt-link :to="`/videos/${video.id}`">{{ video.Title }}</nuxt-link>
    </div>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  async asyncData({$axios}) {
    let resp = await $axios.get("/videos");
    let videos = resp.data;
    return {
      videos
    }
  },
  computed: {
    video() {
      return this.videos.find(v => v.id == this.$route.params.id);
    }
  }
};
</script>

<style></style>
