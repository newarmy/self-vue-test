<template>
    <div class="tab-box">
        <div class="tab">
            <a v-for="(item, index) in arr" v-on:click.prevent="switchTab(index)" href="javascript:;" class="tab-item " v-bind:class="cur === index ? 'on' : ''"  :key="'tab'+index">{{item.label}}</a>

        </div>
        <div class="tab-con">
            <div v-for="(item, index) in arr" class="tab-con-item " v-bind:class="cur === index ? 'cur' : ''">
                tab-content-{{index+1}}
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "tabvue",
        data: function () {
            return {
                arr: [
                    {
                        label: 'tab-1'
                    },
                    {
                        label: 'tab-2'
                    },
                    {
                        label: 'tab-3'
                    }
                ],
                cur: 0,
            }
        },
        methods: {
            switchTab (idx) {
                this.cur = idx
            }
        }
    }
</script>

<style scoped>
     .tab {
         display: flex;
         justify-content: flex-start;
         align-items: center;
         padding: 20px;
         font-size: 20px;
         color:blue;
     }
    .tab-item{
        width: 100px;
        line-height:50px;
        margin-right:10px;
        text-align: center;
    }
    .tab-box .on{
        color:red;
    }

    .tab-con {
        margin-top:20px;
        overflow: hidden;
    }
    .tab-con-item {
        display: none;
    }
     .tab-box .cur{
         display: block;
     }
</style>