<template>
	<div class="message">
		<a-tabs>
			<a-tab-pane tab="消息通知">
				<div class="message-box">
					<div class="message-view">
						<a-spin :spinning="loading">
							<div
								class="message-item-view"
								v-for="item in messageData"
								:key="item.key"
							>
								<div class="left-view">
									{{ item.name }}({{ item.typeName }})
								</div>
								<div class="right-view">{{ item.time }}</div>
							</div>
						</a-spin>
					</div>
					<div class="more-view">
						全部消息&nbsp;({{ messageData.length }})&nbsp;&gt;
					</div>
				</div>
			</a-tab-pane>
		</a-tabs>
	</div>
</template>

<script>
export default {
	name: "Message",
	data() {
		return {
			loading: false,
			messageData: [
				{
					key: "1",
					name: "质量文件制作",
					typeName: "产品编号",
					time: this.$moment().format("YYYY-MM-DD")
				},
				{
					key: "2",
					name: "质量文件制作",
					typeName: "产品编号",
					time: this.$moment().format("YYYY-MM-DD")
				},
				{
					key: "3",
					name: "质量文件制作",
					typeName: "产品编号",
					time: this.$moment().format("YYYY-MM-DD")
				},
				{
					key: "4",
					name: "质量文件制作",
					typeName: "产品编号",
					time: this.$moment().format("YYYY-MM-DD")
				},
				{
					key: "5",
					name: "质量文件制作",
					typeName: "产品编号",
					time: this.$moment().format("YYYY-MM-DD")
				},
				{
					key: "6",
					name: "质量文件制作",
					typeName: "产品编号",
					time: this.$moment().format("YYYY-MM-DD")
				},
				{
					key: "7",
					name: "质量文件制作",
					typeName: "产品编号",
					time: this.$moment().format("YYYY-MM-DD")
				},
				{
					key: "8",
					name: "质量文件制作",
					typeName: "产品编号",
					time: this.$moment().format("YYYY-MM-DD")
				},
				{
					key: "9",
					name: "质量文件制作",
					typeName: "产品编号",
					time: this.$moment().format("YYYY-MM-DD")
				},
				{
					key: "10",
					name: "质量文件制作",
					typeName: "产品编号",
					time: this.$moment().format("YYYY-MM-DD")
				},
				{
					key: "11",
					name: "质量文件制作",
					typeName: "产品编号",
					time: this.$moment().format("YYYY-MM-DD")
				},
				{
					key: "12",
					name: "质量文件制作",
					typeName: "产品编号",
					time: this.$moment().format("YYYY-MM-DD")
				}
			]
		};
	},
	props: {},
	components: {},
	methods: {},
	created() {}
};
</script>

<style lang="less" scoped>
.message {
	width: 270px;
	height: 100%;
	background: #fff;
	.message-box {
		height: 100%;
		padding: 0 0 50px 0;
		position: relative;
		.message-view {
			height: 100%;
			overflow: auto;
			.message-item-view {
				padding: 10px 15px;
				display: flex;
				justify-content: space-between;
				align-items: flex-start;
				cursor: pointer;
				&:hover {
					background: var(--primaryHoverColor);
					.left-view,
					.right-view {
						color: var(--primaryColor);
					}
				}
				.left-view {
					color: #333;
				}
				.right-view {
					color: #999;
					margin-left: 10px;
					white-space: nowrap;
				}
			}
		}
		.more-view {
			position: absolute;
			bottom: 25px;
			left: 50%;
			transform: translate(-50%, 50%);
			color: var(--primaryColor);
			cursor: pointer;
			&:hover {
				text-decoration: underline;
			}
		}
	}
}
/deep/.ant-tabs {
	height: 100%;
}
/deep/.ant-tabs-top-content.ant-tabs-content-animated {
	height: calc(100% - 60px);
}
/deep/.ant-spin-nested-loading,
/deep/.ant-spin-container {
	height: 100%;
}
/deep/.ant-spin-nested-loading > div > .ant-spin {
	max-height: initial;
}
</style>
