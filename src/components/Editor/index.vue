<template>
    <div id="editor" class="editor" :class="{ edit: isEdit }">
        <!-- 网格线 -->
        <Grid />
    </div>
    <!-- 页面组件展示 -->
    <Shape v-for="(item, index) in componentData" :key="item.id" :index="index" :default-style="item.style"
    :style="getShapeStyle(item.style)">
        <component :is="item.component" :id="'component' + item.id" class="component" :prop-value="item.propValue"
            :element="item" />
    </Shape>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { computed, watch } from 'vue';
const store = useStore();
defineProps({
    isEdit: {
        type: Boolean,
        default: true,
    }
});

let componentData = computed(() => store.state.componentData);

watch(componentData, (newVal, oldVal) => {
    console.log(componentData, "改变的值", toRaw(newVal));
    console.log("旧", oldVal);
    console.log("**************************" + componentData);
}, { immediate: true, deep: true })
</script>

<style lang="scss" scoped>
.editor {
    position: relative;
    background: #fff;
    margin: auto;

    // border: 1px solid red;
    height: 820px;

    .lock {
        opacity: .5;

        &:hover {
            cursor: not-allowed;
        }
    }
}

.edit {
    .component {
        outline: none;
        width: 100%;
        height: 100%;
    }
}
</style>