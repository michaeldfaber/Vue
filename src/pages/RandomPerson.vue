<template>
    <div class="randomperson">
        <h1>Random Person Information</h1>
        <div>From: https://randomuser.me/api</div>
        <br /><br />
        <img class="personPhoto" :src="person.picture.large" />
        <div class="personInfo">
            <p><b>Name: </b> {{ this.person.name.first }} {{ this.person.name.last }}</p>
            <p><b>Gender: </b> {{ this.person.gender[0].toUpperCase() + this.person.gender.slice(1) }}</p>
            <p><b>Email: </b> {{ this.person.email }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            person: ""
        }
    },
    created() {
        this.$http.get("https://randomuser.me/api")
            .then(res => {
                this.person = res.body.results[0];
            });
    }
}
</script>

<style>

#personInfo {
    margin: 0 auto;
    width: 30%
}

</style>