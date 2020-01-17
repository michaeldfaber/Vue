<template>
    <div id="test">
        <p id="text">{{ text }}</p>
    </div>
</template>

<script>
export default {
    name: 'test',
    props: ['text']
}
</script>

<style lang="scss">
    #text {
        color: blue
    }
</style>