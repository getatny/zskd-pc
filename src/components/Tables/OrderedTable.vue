<template>
  <div>
    <Table :columns="columns" :data="companyApplies"></Table>
  </div>
</template>

<script>
export default {
  name: 'ordered-table',
  props: {
    tableHeaderColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selected: [],
      companyApplies: [
        {
          id: 1,
          comName: '谷川联行有限公司',
          applyType: 1,
          time: '2018-10-28 13:30pm',
          status: 1
        },
        {
          id: 2,
          comName: '谷川联行有限公司',
          applyType: 2,
          time: '2018-10-28 13:30pm',
          status: -1
        },
        {
          id: 3,
          comName: '谷川联行有限公司',
          applyType: 1,
          time: '2018-10-28 13:30pm',
          status: 0
        },
        {
          id: 4,
          comName: '谷川联行有限公司',
          applyType: 1,
          time: '2018-10-28 13:30pm',
          status: 1
        },
        {
          id: 5,
          comName: '天津优胜教育集团有限公司第一分公司',
          applyType: 1,
          time: '2018-10-28 13:30pm',
          status: 1
        },
      ],
      columns: [
        {
          title: '企业名',
          key: 'comName'
        },
        {
          title: '申请类型',
          key: 'applyType',
          render: (h, params) => {
            const row = params.row
            const color = row.applyType === 1 ? 'primary' : 'warning'
            const text = row.applyType === 1 ? '宣讲' : '信息'

            return h('Tag', {
              props: {
                type: 'dot',
                color: color
              }
            }, text)
          }
        },
        {
          title: '时间',
          key: 'time'
        },
        {
          title: '审核状态',
          key: 'status',
          render: (h, params) => {
            const row = params.row
            const color = row.status === 0 ? 'default' : row.status === -1 ? 'error' : 'success'
            const text = row.status === 0 ? '未审核' : row.status === -1 ? '拒绝' : '通过'

            return h('Tag', {
              props: {
                color: color
              }
            }, text)
          }
        },
        {
          title: '操作',
          key: 'actions',
          align: 'center',
          render: (h, param) => {
            return h('div', [
              h('md-button', {
                'class': {
                  'md-just-icon': true,
                  'md-simple': true,
                  'md-success':true
                }
              }, [
                h('md-icon', 'done'),
                h('md-tooltip', {
                  props: {
                    mdDirection: 'top'
                  }
                }, '通过')
              ]),
              h('md-button', {
                'class': {
                  'md-just-icon': true,
                  'md-simple': true,
                  'md-danger':true
                }
              }, [
                h('md-icon', 'close'),
                h('md-tooltip', {
                  props: {
                    mdDirection: 'top'
                  }
                }, '拒绝')
              ])
            ])
          }
        }
      ]
    }
  }
}
</script>
