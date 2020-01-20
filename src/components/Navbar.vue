<template>
    <div id="navbar">
        <router-link class="navbar-link" to="/">Home</router-link>
        <router-link class="navbar-link" to="/test">Test Page</router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

#navbar {
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

#logo {
    display:block;
    float:left;
    height: 35px;
    margin-top: 7px;
    margin-right: 10px;
}

</style>