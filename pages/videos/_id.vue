<template>
  <div>
    <nuxt-child :video="video" />
  </div>
</template>

<script>
export default {
  // USING THE EMPTY TITLE VALUE HELPS FOR ELEMENTS WITHOUT TITLES FOR THE TITLETEMPLATE
  head() {
    return {
      title: '',
      titleTemplate : `%s ${this.video.Title}`
    }
  },
  async asyncData({$axios, params}) {
    let resp = await $axios.get(`/videos/${params.id}`);
    let video = resp.data;
    return {
      video
    };
  }
};
</script>

<style scoped></style>
