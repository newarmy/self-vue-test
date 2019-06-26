
<template>
    <div>
        <h2 class="hello">Hello {{name}} {{ $attrs }}</h2>
    </div>
</template>

<script>
    export default {
        name: "route-param-child",
        props: {
            name: {
                type: String,
                default: 'Vue!'
            }
        }
    }
</script>