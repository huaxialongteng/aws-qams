<template>
	<div class="Task-View">
		<div class="taskForm-view">
			<h3 style="font-weight: bold; margin: 10px 0">{{ taskData.name }}</h3>
			<a-form-model
				v-if="false"
				ref="ruleForm"
				:model="formData"
				:rules="rulesData"
				layout="vertical"
			>
				<a-row :gutter="20">
					<a-col
						:span="item.formType === 'textarea' ? 24 : 8"
						v-for="(item, index) in formModel"
						:key="index"
					>
						<a-form-model-item
							:colon="false"
							:label="item.formLabel"
							:prop="item.formCode"
							:wrapperCol="{ span: 24 }"
						>
							<template v-if="item.formType && item.formType === 'radio'">
								<a-radio-group
									v-model.trim="formData[item.formCode]"
									:disabled="item.bind ? item.bind.disabled : false"
								>
									<a-radio
										v-for="el in item.searchChild"
										:key="el.code"
										:value="el.code"
										>{{ el.label }}</a-radio
									>
								</a-radio-group>
							</template>
							<template
								v-else-if="item.formType && item.formType === 'textarea'"
							>
								<a-textarea
									style="width: 100%"
									v-model.trim="formData[item.formCode]"
									:autoSize="
										item.bind && item.bind.autoSize
											? item.bind.autoSize
											: { minRows: 2 }
									"
									:disabled="item.bind ? item.bind.disabled : false"
									allowClear
								></a-textarea>
							</template>
							<template v-else>
								<a-input
									style="width: 100%"
									:disabled="item.bind ? item.bind.disabled : false"
									v-model="formData[item.formCode]"
									:placeholder="item.placeholder || ''"
									allowClear
								/>
							</template>
						</a-form-model-item>
					</a-col>
				</a-row>
			</a-form-model>
			<baseForm v-model="baseFormData" :model="baseFormModel" :isView="true" />
			<template v-if="!problemStatus">
				<p style="font-weight: bold; margin: 15px 0">所检资料清单</p>
				<a-table :pagination="false" :columns="columns" :dataSource="tableData">
					<template slot="index" slot-scope="text0, record0, index0">{{
						index0 + 1
					}}</template>
					<template slot="isSecret" slot-scope="text, record">
						<template v-if="record.isSecret === '0' || !record.isSecret">
							<a-tag color="green">否</a-tag>
						</template>
						<template v-else>
							<a-tag color="red">是</a-tag>
						</template>
					</template>
					<template slot="qtx" slot-scope="text, record">
						<template v-if="record.qtx === '0' || !record.qtx">
							<a-tag color="red">未齐套</a-tag>
						</template>
						<template v-else>
							<a-tag color="green">齐套</a-tag>
						</template>
					</template>
					<template slot="operate" slot-scope="record">
						<a href="javascript:;" @click="openFile(record)">查看</a>
					</template>
				</a-table>
			</template>
		</div>
		<div class="taskList-view"></div>
	</div>
</template>

<script>
import { baseFormUpload, baseFormPlan, baseFormProblem } from "./config/form";
import { columnsUpload, columnsPlan, columnsOther } from "./config/columns";
export default {
	name: "TaskView",
	data() {
		return {
			formTitleName: "军检提交资料",
			listTitleName: "所检资料清单",
			baseFormData: { SFJZSY: "1" },
			baseFormModel: baseFormPlan,
			columns: columnsOther,
			tableData: [
				{
					key: this.COM.getUUID(),
					fileName: "产品关系装入表",
					workContent: "产品齐套性检查",
					planTime: this.$moment().format("YYYY-MM-DD"),
					isSecret: "0",
					qtx: "1"
				}
			]
		};
	},
	props: {
		taskData: {
			type: Object,
			default: () => {
				return {};
			}
		},
		problemStatus: { type: Boolean, default: false }
	},
	components: {},
	computed: {
		rulesData() {
			var map = {};
			if (this.formModel) {
				this.formModel.forEach((el) => {
					if (el.rules) {
						map[el.formCode] = el.rules;
					}
				});
			}
			return map;
		}
	},
	watch: {
		taskData: {
			handler(val) {
				if (val.index === "1") {
					this.baseFormModel = baseFormUpload;
					this.columns = columnsUpload;
				} else if (val.index === "3") {
					this.baseFormModel = baseFormPlan;
					this.columns = columnsPlan;
				} else {
					this.baseFormModel = [];
					this.columns = columnsOther;
				}
			},
			immediate: true,
			deep: true
		},
		problemStatus: {
			handler(val) {
				if (val === true) {
					this.baseFormModel = baseFormProblem;
				} else {
					if (this.taskData.index === "1") {
						this.baseFormModel = baseFormUpload;
						this.columns = columnsUpload;
					} else if (this.taskData.index === "3") {
						this.baseFormModel = baseFormPlan;
						this.columns = columnsPlan;
					} else {
						this.baseFormModel = [];
						this.columns = columnsOther;
					}
				}
			},
			immediate: true
		}
	},
	methods: {
		// 查看
		openFile(record) {}
	},
	created() {}
};
</script>

<style lang="less" scoped></style>
