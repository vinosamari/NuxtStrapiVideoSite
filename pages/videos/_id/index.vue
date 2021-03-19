<template>
    <div>
        <h3>{{video.Title}}</h3>
        <nuxt-link :to="`/videos/${video.id}/edit`">
            <button>Edit</button>
        </nuxt-link>
    </div>
</template>

<script>
    export default {
        props: ['video'],
        head(){
            return {
                title: 'Watch'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>