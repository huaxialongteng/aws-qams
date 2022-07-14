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
								src="http://192.168.8.78:8088/portal/r/w/"
								frameborder="0"
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
			showDetail: false // 是否展示对应序列号详情
		};
	},
	components: {
		BomTree: (resolve) => require(["./fixedArea"], resolve),
		Message: (resolve) => require(["./message"], resolve),
		Detail: (resolve) => require(["./detail"], resolve)
	},
	methods: {},
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
