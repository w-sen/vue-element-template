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
      <el-table-column label="任务ID" />
      <el-table-column label="客户ID" />
      <el-table-column label="京东用户名" />
      <el-table-column label="所属客户池" />
      <el-table-column label="跟进职场" />
      <el-table-column label="跟进小组" />
      <el-table-column label="跟进坐席" />
      <el-table-column label="任务名称" />
      <el-table-column label="任务开始时间" />
      <el-table-column label="黑名单类型" />
      <el-table-column label="任务截至时间" />
      <el-table-column label="任务状态" />
      <el-table-column label="投保人姓名" />
      <el-table-column label="投保人姓氏" />
      <el-table-column label="年龄分段" />
      <el-table-column label="近7天是否登录过" />
      <el-table-column label="婚姻状况" />
      <el-table-column label="出生日期" />
      <el-table-column label="默认收货地址省" />
      <el-table-column label="性别" />
      <el-table-column label="金融会员等级" />
      <el-table-column label="大理财历史最高持仓分段" />
      <el-table-column label="基金理财类型(风险等级)" />
      <el-table-column label="大理财当季日均持仓金额" />
      <el-table-column label="小金库持仓金额分段" />
      <el-table-column label="财富用户生命周期" />
      <el-table-column label="用户持仓风险类型" />
      <el-table-column label="职业预测" />
      <el-table-column label="子女预测" />
      <el-table-column label="有房预测" />
      <el-table-column label="小金保历史犹豫期内/外退保用户" />
      <el-table-column label="小金保保单末次还款时间分段" />
      <el-table-column label="小金保保单贷款时间分段" />
      <el-table-column label="小金保当前持仓用户" />
      <el-table-column label="小金保保单还款金额分段" />
      <el-table-column label="小金保保单贷款金额分段" />
      <el-table-column label="用户末次小金保保单退保金额分段" />
      <el-table-column label="小金保用户当前状态" />
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
