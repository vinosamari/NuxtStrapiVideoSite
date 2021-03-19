<template>
  <div>
    <nuxt-child :video="video" />
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  // USING THE EMPTY TITLE VALUE HELPS FOR ELEMENTS WITHOUT TITLES FOR THE TITLETEMPLATE
  head() {
    return {
      title: '',
      titleTemplate : `%s ${this.video.Title}`
    }
  },
  async fetch({$axios, params, store}) {
    let resp = await $axios.get(`/videos/${params.id}`);
    let video = resp.data;
    store.commit('SET_CURRENT_VIDEO', video)
  },
  computed: {
    // USE MAPSTATE
    ...mapState({
      video: "currentVideo"
    })

    // OR A REGULAR COMPUTE 
    // video(){
    //   return this.$store.state.currentVideo
    // }
  }
};
</script>

<style scoped></style>
