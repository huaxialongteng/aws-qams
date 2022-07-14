export const baseFormUpload = [
  {
    formLabel: "提交人",
    formCode: "username",
    rules: [{ required: true, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
  {
    formLabel: "提交时间",
    formCode: "time",
    rules: [{ required: true, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
  {
    formLabel: "产品编号",
    formCode: "cpsn",
    rules: [{ required: true, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
  {
    formLabel: "批次号",
    formCode: "bathchNum",
    rules: [{ required: true, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
  {
    formLabel: "提交数量",
    formCode: "submitNum",
    rules: [{ required: true, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
  {
    formLabel: "产品型号",
    formCode: "CPXH",
    rules: [{ required: true, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
  {
    formLabel: "合同号",
    formCode: "HTH",
    rules: [{ required: true, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
  {
    formLabel: "合同类型",
    formCode: "HTLX",
    rules: [{ required: true, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
  {
    formLabel: "提交类型",
    formCode: "TJLX",
    rules: [{ required: true, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
  {
    formLabel: "监管协议编号",
    formCode: "JGXYBH",
    rules: [{ required: true, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
  {
    formLabel: "所检情况及结论",
    formCode: "SJQKJJL",
    rules: [{ required: false, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
]
export const baseFormPlan = [
  {
    formLabel: "产品编号",
    formCode: "cpsn",
    rules: [{ required: true, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
  {
    formLabel: "产品型号",
    formCode: "CPXH",
    rules: [{ required: true, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
  {
    formLabel: "批次号",
    formCode: "bathchNum",
    rules: [{ required: true, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
  {
    formLabel: "合同号",
    formCode: "HTH",
    rules: [{ required: true, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
  {
    formLabel: "合同类型",
    formCode: "HTLX",
    rules: [{ required: true, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
  {
    formLabel: "监管协议编号",
    formCode: "JGXYBH",
    rules: [{ required: true, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
  {
    formLabel: "质量人员",
    formCode: "username",
    rules: [{ required: false, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
  {
    formLabel: "项目负责人",
    formCode: "itemPerson",
    rules: [{ required: false, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
  {
    formLabel: "计划经理",
    formCode: "planPerson",
    rules: [{ required: false, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
  {
    formLabel: "合同数量",
    formCode: "HTSL",
    rules: [{ required: false, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
  {
    formLabel: "开展数量",
    formCode: "KZSL",
    rules: [{ required: false, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
  {
    formLabel: "是否集中审议",
    formCode: "SFJZSY",
    formType: 'radio',
    searchChild: [{ label: '是', code: '1' }, { label: '否', code: '0' }],
    rules: [{ required: false, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
]
export const baseFormProblem = [
  {
    formLabel: "产品型号",
    formCode: "CPXH",
    rules: [{ required: false, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
  {
    formLabel: "产品名称",
    formCode: "CPMC",
    rules: [{ required: false, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
  {
    formLabel: "产品编号",
    formCode: "CPBH",
    rules: [{ required: false, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
  {
    formLabel: "提交时间",
    formCode: "TJSJ",
    rules: [{ required: false, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
  {
    formLabel: "检验人员",
    formCode: "JYRY",
    rules: [{ required: false, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
  {
    formLabel: "归零责任人",
    formCode: "GLZRR",
    rules: [{ required: false, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
  {
    formLabel: "军种",
    formCode: "JZ",
    rules: [{ required: false, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
  {
    formLabel: "问题来源",
    formCode: "WTLY",
    rules: [{ required: false, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
  {
    formLabel: "问题发生日期",
    formCode: "WTFSRQ",
    rules: [{ required: false, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
  {
    formLabel: "归零截止日期",
    formCode: "GLJZRQ",
    rules: [{ required: false, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
  {
    formLabel: "归零周期",
    formCode: "GLZQ",
    rules: [{ required: false, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
  {
    formLabel: "当前状态",
    formCode: "DQZT",
    rules: [{ required: false, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
  {
    formLabel: "问题类型",
    formCode: "WTLX",
    rules: [{ required: false, message: "", trigger: "blur" }],
    bind: {
      disabled: true
    }
  },
  {
    formLabel: "问题现象",
    formCode: "WTXX",
    formType: 'textarea',
    rules: [{ required: false, message: "", trigger: "blur" }],
    bind: {
      disabled: true,
      autoSize: {
        minRows: 2,
        maxRows: 2
      }
    }
  },
  {
    formLabel: "问题分析",
    formCode: "WTFX",
    formType: 'textarea',
    rules: [{ required: false, message: "", trigger: "blur" }],
    bind: {
      disabled: true,
      autoSize: {
        minRows: 2,
        maxRows: 2
      }
    }
  },
]