<template>
    <div class="post">
        <div class="loading" v-if="loading">
            Loading...
        </div>

        <div v-if="error" class="error">
            {{ error }}
        </div>

        <div v-if="post" class="content">
            <h2>{{ post.title }}</h2>
            <p>{{ post.body }}</p>
        </div>
    </div>
</template>

<script>
    function getPost(callback) {
        setTimeout(function () {
            callback(null, {
                title: "before data title",
                body: "before data body"
            })
        }, 1000);
    }
    export default {
        name: 'before',
        data () {
            return {
                loading: false,
                post: null,
                error: null
            }
        },
        beforeRouteEnter (to, from, next) {
            getPost( (err, post) => {
                next(vm => vm.setData(err, post))
            })
        },
        // 路由改变前，组件就已经渲染完了
        // 逻辑稍稍不同
        beforeRouteUpdate (to, from, next) {
            this.post = null
            getPost( (err, post) => {
                this.setData(err, post)
                next()
            })
        },
        methods: {
            setData (err, post) {
                if (err) {
                    this.error = err.toString()
                } else {
                    this.post = post
                }
            }
        }
    }
</script>

<style scoped>

</style>