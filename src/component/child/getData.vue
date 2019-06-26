<template>
    <div>
        <ul>
            <router-link :to="'/getData/routeAfter'">导航完成之后获取</router-link>
            <router-link :to="'/getData/routeBefore'">导航完成之前获取</router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "get-data"
    }
</script>

<style scoped>

</style>