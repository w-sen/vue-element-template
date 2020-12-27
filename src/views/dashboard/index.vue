<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <el-button type="primary">获取最新用户管理</el-button>
    <el-button type="primary">获取最新标签管理</el-button>
    <el-button type="primary">获取最新策略线索</el-button>
    <el-button type="primary">获取最新销售线索-浏览行为</el-button>
    <el-button type="primary">获取最新销售线索-浏览行为</el-button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Dashboard',
    computed: {
      ...mapGetters([
        'name'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  .dashboard {
    &-container {
      margin: 30px;
    }
    &-text {
      font-size: 30px;
      line-height: 46px;
    }
  }
</style>
