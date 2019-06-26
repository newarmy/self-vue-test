<template>
    <div id="routeProp">
        <h1>Route props</h1>
        <ul>
            <li><router-link to="/noParam">/noParam</router-link></li>
            <li><router-link to="/hello/you">/hello/you</router-link></li>
            <li><router-link to="/static">/static</router-link></li>
            <li><router-link to="/dynamic/1">/dynamic/1</router-link></li>
            <li><router-link to="/attrs">/attrs</router-link></li>
        </ul>
        <router-view class="view" foo="123"></router-view>
    </div>
</template>

<script>
    export default {
        name: "route-to-params"
    }
</script>

<style scoped>

</style>