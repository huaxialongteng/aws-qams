export const baseFormUpload = [
  [
    {
      formLabel: "提交人",
      formCode: "username",
      formType: 'input',
      rules: [{ required: true, message: "", trigger: "blur" }],
      bind: {
        disabled: true
      }
    },
    {
      formLabel: "提交时间",
      formCode: "time",
      formType: 'input',
      rules: [{ required: true, message: "", trigger: "blur" }],
      bind: {
        disabled: true
      }
    },
    {
      formLabel: "产品编号",
      formCode: "cpsn",
      formType: 'input',
      rules: [{ required: true, message: "", trigger: "blur" }],
      bind: {
        disabled: true
      }
    },
    {
      formLabel: "批次号",
      formCode: "bathchNum",
      formType: 'input',
      rules: [{ required: true, message: "", trigger: "blur" }],
      bind: {
        disabled: true
      }
    }
  ],
  [
    {
      formLabel: "提交数量",
      formCode: "submitNum",
      formType: 'input',
      rules: [{ required: true, message: "", trigger: "blur" }],
      bind: {
        disabled: true
      }
    },
    {
      formLabel: "产品型号",
      formCode: "CPXH",
      formType: 'input',
      rules: [{ required: true, message: "", trigger: "blur" }],
      bind: {
        disabled: true
      }
    },
    {
      formLabel: "合同号",
      formCode: "HTH",
      formType: 'input',
      rules: [{ required: true, message: "", trigger: "blur" }],
      bind: {
        disabled: true
      }
    },
    {
      formLabel: "合同类型",
      formCode: "HTLX",
      formType: 'input',
      rules: [{ required: true, message: "", trigger: "blur" }],
      bind: {
        disabled: true
      }
    }
  ],
  [
    {
      formLabel: "提交类型",
      formCode: "TJLX",
      formType: 'input',
      rules: [{ required: true, message: "", trigger: "blur" }],
      bind: {
        disabled: true
      }
    },
    {
      formLabel: "监管协议编号",
      formCode: "JGXYBH",
      formType: 'input',
      rules: [{ required: true, message: "", trigger: "blur" }],
      bind: {
        disabled: true
      }
    },
    {
      formLabel: "所检情况及结论",
      formCode: "SJQKJJL",
      formType: 'input',
      rules: [{ required: false, message: "", trigger: "blur" }],
      bind: {
        disabled: true
      }
    },
    {}
  ],
]
export const baseFormPlan = [
  [
    {
      formLabel: "产品编号",
      formCode: "cpsn",
      formType: 'input',
      rules: [{ required: true, message: "", trigger: "blur" }],
      bind: {
        disabled: true
      }
    },
    {
      formLabel: "产品型号",
      formCode: "CPXH",
      formType: 'input',
      rules: [{ required: true, message: "", trigger: "blur" }],
      bind: {
        disabled: true
      }
    },
    {
      formLabel: "批次号",
      formCode: "bathchNum",
      formType: 'input',
      rules: [{ required: true, message: "", trigger: "blur" }],
      bind: {
        disabled: true
      }
    },
    {
      formLabel: "合同号",
      formCode: "HTH",
      formType: 'input',
      rules: [{ required: true, message: "", trigger: "blur" }],
      bind: {
        disabled: true
      }
    }
  ],
  [
    {
      formLabel: "合同类型",
      formCode: "HTLX",
      formType: 'input',
      rules: [{ required: true, message: "", trigger: "blur" }],
      bind: {
        disabled: true
      }
    },
    {
      formLabel: "监管协议编号",
      formCode: "JGXYBH",
      formType: 'input',
      rules: [{ required: true, message: "", trigger: "blur" }],
      bind: {
        disabled: true
      }
    },
    {
      formLabel: "质量人员",
      formCode: "username",
      formType: 'input',
      rules: [{ required: false, message: "", trigger: "blur" }],
      bind: {
        disabled: true
      }
    },
    {
      formLabel: "项目负责人",
      formCode: "itemPerson",
      formType: 'input',
      rules: [{ required: false, message: "", trigger: "blur" }],
      bind: {
        disabled: true
      }
    }
  ],
  [
    {
      formLabel: "计划经理",
      formCode: "planPerson",
      formType: 'input',
      rules: [{ required: false, message: "", trigger: "blur" }],
      bind: {
        // disabled: true
      }
    },
    {
      formLabel: "合同数量",
      formCode: "HTSL",
      formType: 'input',
      rules: [{ required: false, message: "", trigger: "blur" }],
      bind: {
        disabled: true
      }
    },
    {
      formLabel: "开展数量",
      formCode: "KZSL",
      formType: 'input',
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
    }
  ]
]
export const baseFormProblem = [
  [
    {
      formLabel: "产品型号",
      formCode: "CPXH",
      formType: 'input',
      rules: [{ required: false, message: "", trigger: "blur" }],
      bind: {
        disabled: true
      }
    },
    {
      formLabel: "产品名称",
      formCode: "CPMC",
      formType: 'input',
      rules: [{ required: false, message: "", trigger: "blur" }],
      bind: {
        disabled: true
      }
    },
    {
      formLabel: "产品编号",
      formCode: "CPBH",
      formType: 'input',
      rules: [{ required: false, message: "", trigger: "blur" }],
      bind: {
        disabled: true
      }
    },
    {
      formLabel: "提交时间",
      formCode: "TJSJ",
      formType: 'input',
      rules: [{ required: false, message: "", trigger: "blur" }],
      bind: {
        disabled: true
      }
    }
  ],
  [
    {
      formLabel: "检验人员",
      formCode: "JYRY",
      formType: 'input',
      rules: [{ required: false, message: "", trigger: "blur" }],
      bind: {
        disabled: true
      }
    },
    {
      formLabel: "归零责任人",
      formCode: "GLZRR",
      formType: 'input',
      rules: [{ required: false, message: "", trigger: "blur" }],
      bind: {
        disabled: true
      }
    },
    {
      formLabel: "军种",
      formCode: "JZ",
      formType: 'input',
      rules: [{ required: false, message: "", trigger: "blur" }],
      bind: {
        disabled: true
      }
    },
    {
      formLabel: "问题来源",
      formCode: "WTLY",
      formType: 'input',
      rules: [{ required: false, message: "", trigger: "blur" }],
      bind: {
        disabled: true
      }
    }
  ],
  [
    {
      formLabel: "问题发生日期",
      formCode: "WTFSRQ",
      formType: 'input',
      rules: [{ required: false, message: "", trigger: "blur" }],
      bind: {
        disabled: true
      }
    },
    {
      formLabel: "归零截止日期",
      formCode: "GLJZRQ",
      formType: 'input',
      rules: [{ required: false, message: "", trigger: "blur" }],
      bind: {
        disabled: true
      }
    },
    {
      formLabel: "归零周期",
      formCode: "GLZQ",
      formType: 'input',
      rules: [{ required: false, message: "", trigger: "blur" }],
      bind: {
        disabled: true
      }
    },
    {
      formLabel: "当前状态",
      formCode: "DQZT",
      formType: 'input',
      rules: [{ required: false, message: "", trigger: "blur" }],
      bind: {
        disabled: true
      }
    }
  ],
  [
    {
      formLabel: "问题类型",
      formCode: "WTLX",
      formType: 'textarea',
      rules: [{ required: false, message: "", trigger: "blur" }],
      bind: {
        disabled: true
      }
    }
  ],
  [{
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
  }],
  [{
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
  }]
]