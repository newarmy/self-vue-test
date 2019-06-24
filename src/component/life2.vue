<template>
    <div v-xj-touch="func">---- life2 ---</div>
</template>

<script>
    export default {
        name: "life2",
        beforeCreate () {
            console.log('life-2 - befereCreate');
        },
        created () {
            console.log('life-2 - created');
        },
        beforeMount() {
            console.log('life-2 - beforeMount');
        },
        mounted () {
            console.log('life-2 - mounted');
        },
        methods: {
            func (type) {
                console.log('event : ' + type);
            }
        }
    }
</script>

<style scoped>

</style>