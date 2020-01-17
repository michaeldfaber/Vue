<template>
    <div id="test">
        <p id="text">{{ text }}</p>
    </div>
</template>

<script>
export default {
    name: 'Text',
    data () {
        return {
            text: "Hello World!"
        }
    }
}
</script>

<style lang="scss">
    #text {
        color: blue
    }
</style>