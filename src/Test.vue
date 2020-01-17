<template>
    <p id="text">{{ text }}</p>
</template>

<script>
export default {
    name: 'text',
    data () {
        return {
            text: "Hello World!"
        }
    }
}
</script>

<style lang="scss">
    .text {
        color: blue
    }
</style>