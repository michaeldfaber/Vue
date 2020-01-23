<template>
    <div class="hero">
        <img class="image" :src="image" :alt="alt">
    </div>
</template>

<script>
export default {
    props: ['image', 'alt']
}
</script>

<style scoped lang="scss">

.hero {
    width: 100%;
    margin: 0 auto;
    padding: 0px;
    align-content: center;
}

.image {
    width: 100%;
    height: 600px;
    object-fit: cover;
}

</style>