<template>
    <div class="toolbar">
        <el-button> JSON </el-button>
        <el-button> 撤销 </el-button>
        <el-button> 重做 </el-button>
        <label for="input" class="insert">
            插入图片
            <input id="input" type="file" hidden>
        </label>
        <el-button style="margin-left: 10px;">预览</el-button>
        <el-button style="margin-left: 10px;">保存</el-button>
        <el-button style="margin-left: 10px;">清空画布</el-button>
        <el-button style="margin-left: 10px;">组合</el-button>
        <el-button style="margin-left: 10px;">拆分</el-button>
        <el-button style="margin-left: 10px;">锁定</el-button>
        <el-button style="margin-left: 10px;">解锁</el-button>
        <el-button style="margin-left: 10px;">截图</el-button>
        <div class="canvas-config">
            <span>画布大小</span>
            <input />
            <span>*</span>
            <input />
        </div>
        <div class="canvas-config" style="width: 150px;">
            <span>画布比例</span>
            <input>%
        </div>
    </div>
</template>
<style scoped lang="scss">
.toolbar {
    border-bottom: 1px solid #dcdfe6;
    overflow-x: auto;
    @apply flex justify-center items-center py-1 px-10 mx-4;
    // width: 0;

    .canvas-config {
        display: inline-block;
        margin-left: 10px;
        font-size: 14px;
        width: 200px;
        color: #606266;

        input {
            width: 50px;
            margin-left: 4px;
            outline: none;
            padding: 0 5px;
            border: 1px solid #ddd;
            color: #606266;
        }

        span {
            margin-left: 10px;
        }
    }

    .insert {
        display: block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: 0;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        padding: 9px 15px;
        font-size: 12px;
        border-radius: 3px;
        margin-left: 10px;

        &:active {
            color: #3a8ee6;
            border-color: #3a8ee6;
            outline: 0;
        }

        &:hover {
            background-color: #ecf5ff;
            color: #3a8ee6;
        }
    }
}
</style>