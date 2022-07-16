<template>
	<div class="Home">
		<!-- NOTE BOM树 -->
		<a-row :gutter="24" class="rowView">
			<a-col :span="5" class="colView">
				<BomTree />
			</a-col>
			<a-col :span="19" class="colView">
				<div class="contentView">
					<template v-if="showDetail">
						<Detail />
					</template>
					<template v-else>
						<!-- NOTE iframe嵌套 -->
						<div class="iframeView">
							<iframe
								:src="`http://localhost:8088/portal/r/w?sid=${sidVal}&cmd=CLIENT_BPM_WORKLIST_MAIN&processGroupId=obj_f2c2c287432946f7b9454b15bb169892`"
								frameborder="1"
								width="100%"
								height="100%"
							></iframe>
						</div>
						<!-- NOTE 消息通知 -->
						<Message />
					</template>
				</div>
			</a-col>
		</a-row>
	</div>
</template>

<script>
export default {
	name: "Home",
	data() {
		return {
			showDetail: true, // 是否展示对应序列号详情
			sidVal: JSON.parse(localStorage.getItem("sid")),
			formData: {},
			formModel: [
				[
					{
						formCode: "name",
						formLabel: "名称",
						formType: "input",
						rules: [
							{
								required: true,
								message: "请输入名称",
								trigger: ["blur", "change"]
							}
						]
					},
					{},
					{}
				],
				[
					{
						formCode: "text",
						formLabel: "描述",
						formType: "textarea",
						rules: [{ required: true, message: "请输入描述", trigger: "blur" }]
					}
				]
			]
		};
	},
	components: {
		BomTree: (resolve) => require(["./fixedArea"], resolve),
		Message: (resolve) => require(["./message"], resolve),
		Detail: (resolve) => require(["./detail"], resolve)
	},
	watch: {
		"$store.state.taskVal": {
			handler(val) {
				if (val) {
					this.showDetail = true;
				} else {
					this.showDetail = false;
				}
			},
			immediate: true,
			deep: true
		}
	},
	methods: {
		submit() {
			this.$refs.baseForm.submit();
			if (this.$refs.baseForm.valid) {
				// console.log(this.formData);
			}
		}
	},
	created() {}
};
</script>

<style lang="less" scoped>
.Home {
	width: 100%;
	height: 100%;
	overflow: auto;
	background: #ededed;
	.rowView {
		height: 100%;
		margin: 0 !important;
	}
	.colView {
		height: 100%;
		padding: 0 !important;
		& + .colView {
			padding: 12px !important;
		}
		.iframeView {
			height: 100%;
			flex-grow: 1;
			margin-right: 12px;
			background: #fff;
		}
	}
	.contentView {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
	}
}
</style>
