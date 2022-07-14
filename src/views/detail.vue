<template>
	<div class="detail">
		<div class="header-view">
			<font>{{ treeNodeCode }}</font>
			<font>( {{ treeNodeName }} )</font>
		</div>
		<a-spin :spinning="fixedLoading">
			<div class="contanier-view">
				<div class="fixed-view">
					<div
						class="task-item-view"
						:class="{
							index7: item.index === '7',
							index8: item.index === '8',
							activeStatusStyle: item.nodeState !== 'wait',
							endNodeStyle: item.nodeState === 'end',
							waitNodeStyle: item.nodeState === 'wait',
							activeIndexStyle: item.index === activeIndex
						}"
						v-for="item in templateData"
						:key="item.key"
						@click="handlerDetail(item)"
					>
						<font>{{ item.name }}</font>
						<!-- 问号 -->
						<div
							class="question-view"
							:class="{ disabledStyle: item.nodeState === 'wait' }"
							@click.stop="handlerQues(item)"
						>
							?
						</div>
						<!-- 轴线 -->
						<div
							class="line-view"
							v-if="
								item.index !== '1' && item.index !== '7' && item.index !== '8'
							"
							@click.stop
						></div>
						<div v-if="item.index === '6'" class="point6" @click.stop></div>
						<div
							v-if="item.index === '7'"
							class="line-radius line7"
							:class="{ activeStatusStyle: false }"
							@click.stop
						></div>
						<template v-if="item.index === '8' && type === 'zj'">
							<div
								class="line-radius lineLeftTop8"
								:class="{ activeStatusStyle: false }"
								@click.stop
							></div>
							<div
								class="line-radius lineRightTop8"
								:class="{ activeStatusStyle: false }"
								@click.stop
							></div>
							<div
								class="line-radius lineLeftBottom8"
								:class="{ activeStatusStyle: false }"
								@click.stop
							></div>
							<div
								class="line-radius lineRightBottom8"
								:class="{ activeStatusStyle: false }"
								@click.stop
							></div>
						</template>
					</div>
				</div>
				<div class="content-view">
					<TaskDetail :taskData="taskData" :problemStatus="problemStatus" />
				</div>
			</div>
		</a-spin>
		<!-- 归档文件预览 -->
		<FileView v-model="showFileView" />
	</div>
</template>

<script>
export default {
	name: "Detail",
	data() {
		return {
			type: "zj", // 默认整机
			activeIndex: "1",
			codeValue: "HT08313",
			nameValue: "C",
			showFileView: false,
			problemStatus: false,
			fixedLoading: false,
			taskData: {
				key: this.COM.getUUID(),
				name: "军检提交资料上传",
				index: "1"
			},
			templateData: [
				{
					key: this.COM.getUUID(),
					nodeState: "active",
					name: "军检提交资料上传",
					index: "1"
				},
				{
					key: this.COM.getUUID(),
					nodeState: "active",
					name: "审查提交资料",
					index: "2"
				},
				{
					key: this.COM.getUUID(),
					nodeState: "active",
					name: "军检验收计划",
					index: "3"
				},
				{
					key: this.COM.getUUID(),
					nodeState: "end",
					name: "质量复合性检查",
					index: "4"
				},
				{
					key: this.COM.getUUID(),
					nodeState: "wait",
					name: "装箱检查",
					index: "5"
				},
				{
					key: this.COM.getUUID(),
					nodeState: "wait",
					name: "军检资料审签",
					index: "6"
				},
				{
					key: this.COM.getUUID(),
					nodeState: "wait",
					name: "质量文件制作",
					index: "7"
				},
				{
					key: this.COM.getUUID(),
					nodeState: "wait",
					name: "军检活动集中审议",
					index: "8"
				},
				{
					key: this.COM.getUUID(),
					nodeState: "wait",
					name: "产品交付",
					index: "9"
				}
			]
		};
	},
	props: {},
	components: {
		FileView: (resolve) => require(["@components/fileView"], resolve),
		TaskDetail: (resolve) => require(["@components/taskDetail"], resolve)
	},
	computed: {
		treeNodeCode() {
			this.fixedLoading = true;
			setTimeout(() => {
				this.fixedLoading = false;
			}, 800);
			return this.$store.getters.getTaskVal.key;
		},
		treeNodeName() {
			this.fixedLoading = true;
			setTimeout(() => {
				this.fixedLoading = false;
			}, 800);
			return this.$store.getters.getTaskVal.title;
		}
	},
	methods: {
		handlerDetail(data) {
			if (data.nodeState === "wait") return;
			this.problemStatus = false;
			this.activeIndex = data.index;
			this.taskData = data;
		},
		handlerQues(data) {
			if (data.nodeState === "wait") return;
			this.problemStatus = true;
			this.taskData = data;
		},
		openFileView() {
			this.showFileView = true;
		}
	},
	created() {
		// console.log(this.templateData);
	}
};
</script>

<style lang="less" scoped>
.detail {
	width: 100%;
	height: 100%;
	.header-view {
		width: 100%;
		height: 55px;
		margin-bottom: 10px;
		background: #fff;
		display: flex;
		align-items: center;
		padding: 0 20px;
		font {
			font-weight: bold;
			font-size: 18px;
		}
	}
	/deep/.ant-spin-nested-loading {
		height: calc(100% - 65px);
	}
	/deep/.ant-spin-container,
	/deep/.ant-spin-blur {
		height: 100%;
	}
	.contanier-view {
		// height: calc(100% - 65px);
		height: 100%;
		overflow: auto;
		display: flex;
		background: #fff;
		.fixed-view {
			width: 350px;
			height: 100%;
			padding: 30px 20px 10px 10px;
			border-right: 1px solid #ccc;
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			overflow: auto;
			position: relative;
			.task-item-view {
				width: 150px;
				height: 50px;
				padding: 0 15px;
				border-radius: 8px;
				border: 1px dashed var(--primaryColor);
				display: flex;
				justify-content: center;
				align-items: center;
				flex-shrink: 0;
				cursor: pointer;
				position: relative;
				&:hover:not(.activeIndexStyle) {
					background: var(--primaryHoverColor);
					color: var(--primaryColor);
					transition: background 0.3s;
				}
				&::before {
					content: "";
					position: absolute;
					top: 0;
					left: 50%;
					transform: translate(-50%, -50%);
					display: inline-block;
					width: 8px;
					height: 8px;
					border: 1px solid var(--primaryColor);
					background: #fff;
					border-radius: 50%;
					z-index: 1;
				}
				&::after {
					content: "";
					position: absolute;
					bottom: 0;
					left: 50%;
					transform: translate(-50%, 50%);
					display: inline-block;
					width: 8px;
					height: 8px;
					border-radius: 50%;
					background: var(--primaryColor);
					z-index: 1;
				}
				.question-view {
					width: 18px;
					height: 18px;
					border-radius: 50%;
					display: flex;
					justify-content: center;
					align-items: center;
					background: var(--primaryColor);
					border: 1px solid #fff;
					position: absolute;
					top: 0;
					right: 0;
					transform: translate(50%, -50%);
					color: #fff;
					font-size: 15px;
					cursor: pointer;
				}
				.disabledStyle {
					cursor: not-allowed;
				}
				.line-view {
					width: 0px;
					height: 30px;
					border-right: 1px dashed var(--primaryColor);
					position: absolute;
					bottom: 100%;
					left: 50%;
					cursor: default;
				}
				& + .task-item-view {
					margin-top: 30px;
				}
				&:nth-child(1),
				&:nth-child(7) {
					&::before {
						display: none;
					}
				}
				&:nth-child(9) {
					.line-view {
						height: 110px;
					}
				}
				&:nth-child(9) {
					margin-top: 110px;
					&::after {
						display: none;
					}
				}
				.line-radius {
					width: 50px;
					height: 15px;
					border: 1px dashed var(--primaryColor);
					position: absolute;
				}
				.point6 {
					width: 8px;
					height: 8px;
					border-radius: 50%;
					background: #fff;
					border: 1px solid var(--primaryColor);
					position: absolute;
					top: 50%;
					left: 0;
					transform: translate(-50%, -50%);
				}
				.line7 {
					width: 85px;
					height: 55px;
					bottom: 0;
					left: 50%;
					border-width: 0 0 1px 1px;
					border-radius: 0 0 0 8px;
					transform: translate(-1px, 100%);
				}
				.lineLeftTop8 {
					border-radius: 12px 0 0 0;
					top: 0;
					left: 50%;
					transform: translateY(-100%);
					border-width: 1px 0 0 1px;
				}
				.lineRightTop8 {
					border-radius: 0 0 12px 0;
					bottom: calc(100% + 14px);
					right: -51px;
					transform: translateX(-50%);
					border-width: 0 1px 1px 0;
				}
				.lineLeftBottom8 {
					border-radius: 0 0 0 12px;
					bottom: -16px;
					left: 50%;
					border-width: 0 0 1px 1px;
				}
				.lineRightBottom8 {
					border-radius: 0 12px 0 0;
					bottom: -30px;
					left: calc(50% + 50px);
					border-width: 1px 1px 0 0;
				}
			}
			.index7 {
				position: absolute;
				top: 320px;
				right: 180px;
			}
			.index8 {
				position: absolute;
				top: 480px;
				right: 120px;
			}
			.activeStatusStyle {
				border-style: solid !important;
			}
			.activeStatusStyle .line-view {
				border-right: 1px solid var(--primaryColor);
			}
			.endNodeStyle {
				font-weight: bold;
				color: #222;
			}
			.activeIndexStyle {
				background: var(--primaryColor);
				color: #fff;
			}
			.waitNodeStyle {
				cursor: not-allowed;
				&:hover {
					background: transparent !important;
					color: #666 !important;
				}
			}
		}
		.content-view {
			width: calc(100% - 350px);
			height: 100%;
			padding: 10px 15px;
			overflow: auto;
		}
	}
}
</style>
