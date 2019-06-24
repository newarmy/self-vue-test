<template>
    <div>
        <p>life --1 </p>
        <life2></life2>
    </div>
</template>

<script>
    import life2 from './life2.vue';
    export default {
        name: "life",
        components: {
            life2
        },
        beforeCreate () {
           console.log('life - befereCreate');
        },
        created () {
            console.log('life - created');
        },
        beforeMount() {
            console.log('life - beforeMount');
        },
        mounted () {
            console.log('life - mounted');
        },
    }
</script>

<style scoped>

</style>