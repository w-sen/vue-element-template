<template>
  <div class="app-container">
    <div class="export"><el-button type="primary">导出数据</el-button></div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column label="客户ID" />
      <el-table-column label="进入板块时间" />
      <el-table-column label="进入板块浏览行为" />
      <el-table-column label="进入频道页时间" />
      <el-table-column label="进入频道页浏览行为" />
      <el-table-column label="浏览产品时间" />
      <el-table-column label="浏览产品浏览行为" />
      <el-table-column label="浏览持仓时间" />
      <el-table-column label="浏览持仓浏览行为" />
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    }
  }
}
</script>
<style lang="scss">
  .export{
    text-align: right;
    margin-bottom: 20px;
  }
</style>
