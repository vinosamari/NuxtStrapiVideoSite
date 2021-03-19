<template>
  <div>
    <nuxt-child :video="video" />
  </div>
</template>

<script>
export default {
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
