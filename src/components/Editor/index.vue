<template>
    <div id="editor" class="editor" :class="{ edit: isEdit }">
        <!-- 网格线 -->
        <Grid />
    </div>
</template>

<script setup lang="ts">

defineProps({
    isEdit: {
        type: Boolean,
        default: true,
    }
});
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