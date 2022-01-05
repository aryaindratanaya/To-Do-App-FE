export const columns = [
  {
    title: 'Item',
    dataIndex: 'item',
    key: 'item',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (v) => (v ? 'Done' : 'Not Done Yet'),
  },
]
