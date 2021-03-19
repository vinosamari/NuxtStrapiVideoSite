<template>
    <div>
        <h4>Editing {{video.Title}}</h4>
        <nuxt-link :to="`/videos/${video.id}`">
            <button>Back to videos page</button>
        </nuxt-link>
    </div>
</template>

<script>
    export default {
        props : ['video']
    }
</script>

<style lang="scss" scoped>

</style>