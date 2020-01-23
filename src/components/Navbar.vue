<template>
    <div class="navbar">
        <router-link class="navbar-link" to="/">Home</router-link>
        <router-link class="navbar-link" to="/randomPerson">Random Person</router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">

.navbar {
    width: 60%;
    height: 50px;
}

.navbar-link {
    display:block;
    float:left;
    margin-left: 15px;
    margin-right: 10px;
    margin-bottom: 5px;
    margin-top: 10px;
}

</style> 