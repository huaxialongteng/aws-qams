export const columnsUpload = [
  {
    dataIndex: 'index',
    title: '#',
    key: 'index',
    scopedSlots: { customRender: 'index' },
    width: 60
  },
  {
    dataIndex: 'fileName',
    title: '归档内容',
    key: 'fileName',
    scopedSlots: { customRender: 'fileName' },
  },
  {
    dataIndex: 'isSecret',
    title: '是否涉密',
    key: 'isSecret',
    width: 120,
    scopedSlots: { customRender: 'isSecret' },
  },
  {
    dataIndex: 'operate',
    title: '操作',
    key: 'operate',
    width: 80,
    scopedSlots: { customRender: 'operate' },
  },
]

export const columnsPlan = [
  {
    dataIndex: 'index',
    title: '#',
    key: 'index',
    scopedSlots: { customRender: 'index' },
    width: 60
  },
  {
    dataIndex: 'planTime',
    title: '军检计划时间',
    key: 'planTime',
    scopedSlots: { customRender: 'planTime' },
  },
  {
    dataIndex: 'workContent',
    title: '工作内容',
    key: 'workContent',
    scopedSlots: { customRender: 'workContent' },
  }
]

export const columnsOther = [
  {
    dataIndex: 'index',
    title: '#',
    key: 'index',
    scopedSlots: { customRender: 'index' },
    width: 60
  },
  {
    dataIndex: 'fileName',
    title: '文件名称',
    key: 'fileName',
    scopedSlots: { customRender: 'fileName' },
  },
  {
    dataIndex: 'isSecret',
    title: '是否涉密',
    key: 'isSecret',
    width: 120,
    scopedSlots: { customRender: 'isSecret' },
  },
  {
    dataIndex: 'qtx',
    title: '是否齐套',
    key: 'qtx',
    width: 120,
    scopedSlots: { customRender: 'qtx' },
  },
  {
    dataIndex: 'operate',
    title: '操作',
    key: 'operate',
    width: 80,
    scopedSlots: { customRender: 'operate' },
  },
]