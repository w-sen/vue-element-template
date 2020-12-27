<template>
  <div class="dashboard-container">
    <el-button type="primary">获取最新用户数据</el-button>
    <el-button type="primary">获取最新标签管理</el-button>
    <!-- <el-button type="primary">获取最新策略线索</el-button> -->
    <el-button type="primary">获取最新销售线索-浏览行为</el-button>
    <el-button type="primary">获取最新销售线索-浏览行为</el-button>
  </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<style lang="scss" scoped>
  .dashboard {
    &-container {
      margin: 30px;
    }
  }
</style>
