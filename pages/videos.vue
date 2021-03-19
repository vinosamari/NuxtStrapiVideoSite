<template>
    <div>
        <nuxt-child />
    </div>
</template>

<script>
    export default {
        // THE TITLETEMPLATE STAYS AT THE TOPMOST PART OF THE TITLE FOR ALL CHILDREN PAGES/COMPONENTS
        head:{
            titleTemplate: "Videos | %s"
        }
    }
</script>

<style scoped>

</style>