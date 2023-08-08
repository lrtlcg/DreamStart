<template>
    <div class="home">
        <toolbar></toolbar>
        <main>
            <!-- 左侧组件列表 -->
            <section class="left">
                <ComponentList />
            </section>
            <!-- 中间画布 -->
            <section class="center">
                <div class="content" @drop="handleDrop" @dragover="e => e.preventDefault()">
                    <Editor />
                </div>
            </section>
            <!-- 右侧属性列表 -->
            <section class="right">
                <el-tabs>
                    <el-tab-pane label="属性" name="attr">
                        <p>属性</p>
                    </el-tab-pane>
                    <el-tab-pane label="动画" name="animation" style="padding-top: 20px;">
                        <p>动画</p>
                    </el-tab-pane>
                    <el-tab-pane label="事件" name="events" style="padding-top: 20px;">
                        <p>事件</p>
                    </el-tab-pane>
                </el-tabs>

            </section>
        </main>
    </div>
</template>

<script setup lang="ts">
import componentList from '@/custom-component/component-list'
import { deepCopy } from '@/utils/utils'
import { useStore } from 'vuex';
import { computed } from 'vue';
const store = useStore();

function handleDrop(this: any, e: any): void {
    e.preventDefault()
    e.stopPropagation()
    // console.log("====" + componentList[e.dataTransfer.getData('index')]);
    const component = deepCopy(componentList[e.dataTransfer.getData('index')])
    store.commit('addComponent', { component });
    const cd = computed(() => store.state.componentData)
    console.log("cccccccccccccccc:" + cd);

}


</script>
<style lang="scss">
.home {
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    background: #fff;
    @apply w-full;

    main {
        height: calc(100% - 64px);
        position: relative;

        .left {
            position: absolute;
            height: 100%;
            width: 200px;
            left: 0;
            top: 0;

            &>div {
                overflow: auto;

                &:first-child {
                    border-bottom: 1px solid #ddd;
                }
            }
        }

        .right {
            position: absolute;
            height: 100%;
            width: 288px;
            right: 0;
            top: 0;

            .el-select {
                width: 100%;
            }
        }

        .center {
            margin-left: 200px;
            margin-right: 288px;
            background: #f5f5f5;
            height: 100%;
            overflow: auto;
            padding: 20px;

            .content {
                width: 100%;
                height: 100%;
                overflow: auto;
            }
        }
    }

    .placeholder {
        text-align: center;
        color: #333;
    }

    .global-attr {
        padding: 10px;
    }
}
</style>