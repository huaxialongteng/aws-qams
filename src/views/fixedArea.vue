<template>
	<div class="fixedArea">
		<a-tabs v-model="activeTabs" :tabBarGutter="5" @change="changeTabs">
			<a-tab-pane :key="items.code" :tab="items.name" v-for="items in tabsData">
				<div class="status-view">
					<div
						class="status-items-view"
						v-for="(item, index) in statusData"
						:key="item.code"
						:class="[activeStatus === index ? 'status-items-active' : '']"
						@click="changeStatus(items, item, index)"
					>
						<div class="icon-view">
							<i :class="['iconfont', item.icon]"></i>
						</div>
						<font>{{ item.name }}</font>
					</div>
				</div>
				<div class="search-view">
					<a-input-search
						v-model="searchVal"
						@change="onChange"
						@search="handlerSearch"
					></a-input-search>
					<a-button
						type="primary"
						icon="redo"
						title="重置"
						@click="handlerReset"
					/>
				</div>
				<div class="tree-view">
					<a-spin :spinning="treeLoading">
						<a-tree
							showLine
							:expandedKeys.sync="expandedKeys"
							:auto-expand-parent="autoExpandParent"
							:selectedKeys.sync="selectedKeys"
							:tree-data="treeData"
							@expand="onExpand"
							@select="onSelect"
						>
							<template slot="title" slot-scope="{ title, key }">
								<img
									class="iconImg"
									v-if="getHierarchy(key) === 1"
									src="@assets/icon/keti.png"
									alt=""
								/>
								<img
									class="iconImg"
									v-else-if="getHierarchy(key) === 2"
									src="@assets/icon/hetongbianhao.png"
									alt=""
								/>
								<img
									class="iconImg"
									v-else-if="getHierarchy(key) === 3"
									src="@assets/icon/zhengji.png"
									alt=""
								/>
								<img
									class="iconImg"
									v-else
									src="@assets/icon/keti.png"
									alt=""
								/>
								<span v-if="title.indexOf(searchVal) > -1">
									<font>{{ title.substr(0, title.indexOf(searchVal)) }}</font>
									<span style="color: #f50">{{ searchVal }}</span>
									<font>{{
										title.substr(title.indexOf(searchVal) + searchVal.length)
									}}</font>
								</span>
								<span v-else>{{ title }}</span>
							</template>
						</a-tree>
					</a-spin>
				</div>
			</a-tab-pane>
		</a-tabs>
	</div>
</template>

<script>
import * as qams from "@api";
export default {
	name: "FixedArea",
	data() {
		return {
			activeTabs: "overallUnit", //
			activeStatus: 0, // 提交状态
			searchVal: "", // 搜索值
			autoExpandParent: false,
			treeLoading: false,
			expandedKeys: [],
			selectedKeys: [],
			treeData: [
				{
					key: "1",
					title: "产品型号001",
					children: [
						{
							key: "1-1",
							title: "合同号0001",
							children: [
								{ key: "1-1-1", title: "SN-ZJ-0001" },
								{ key: "1-1-2", title: "SN-ZJ-0002" },
								{ key: "1-1-3", title: "SN-ZJ-0003" }
							]
						},
						{
							key: "1-2",
							title: "合同号0002",
							children: [
								{ key: "1-2-1", title: "SN-ZJ-0001" },
								{ key: "1-2-2", title: "SN-ZJ-0002" },
								{ key: "1-2-3", title: "SN-ZJ-0003" }
							]
						},
						{
							key: "1-3",
							title: "合同号0003",
							children: [
								{ key: "1-3-1", title: "SN-ZJ-0001" },
								{ key: "1-3-2", title: "SN-ZJ-0002" },
								{ key: "1-3-3", title: "SN-ZJ-0003" }
							]
						}
					]
				},
				{
					key: "2",
					title: "产品型号002",
					children: [
						{
							key: "2-1",
							title: "合同号0001",
							children: [
								{ key: "2-1-1", title: "SN-ZJ-0001" },
								{ key: "2-1-2", title: "SN-ZJ-0002" },
								{ key: "2-1-3", title: "SN-ZJ-0003" }
							]
						},
						{
							key: "2-2",
							title: "合同号0002",
							children: [
								{ key: "2-2-1", title: "SN-ZJ-0001" },
								{ key: "2-2-2", title: "SN-ZJ-0002" },
								{ key: "2-2-3", title: "SN-ZJ-0003" }
							]
						},
						{
							key: "2-3",
							title: "合同号0003",
							children: [
								{ key: "2-3-1", title: "SN-ZJ-0001" },
								{ key: "2-3-2", title: "SN-ZJ-0002" },
								{ key: "2-3-3", title: "SN-ZJ-0003" }
							]
						}
					]
				},
				{
					key: "3",
					title: "产品型号003",
					children: [
						{
							key: "3-1",
							title: "合同号0001",
							children: [
								{ key: "3-1-1", title: "SN-ZJ-0001" },
								{ key: "3-1-2", title: "SN-ZJ-0002" },
								{ key: "3-1-3", title: "SN-ZJ-0003" }
							]
						},
						{
							key: "3-2",
							title: "合同号0002",
							children: [
								{ key: "3-2-1", title: "SN-ZJ-0001" },
								{ key: "3-2-2", title: "SN-ZJ-0002" },
								{ key: "3-2-3", title: "SN-ZJ-0003" }
							]
						},
						{
							key: "3-3",
							title: "合同号0003",
							children: [
								{ key: "3-3-1", title: "SN-ZJ-0001" },
								{ key: "3-3-2", title: "SN-ZJ-0002" },
								{ key: "3-3-3", title: "SN-ZJ-0003" }
							]
						}
					]
				}
			],
			dataList: [],
			tabsData: [
				{ code: "overallUnit", name: "整机" },
				{ code: "spareUnit", name: "备件" },
				{ code: "afterSale", name: "售后" },
				{ code: "partUnit", name: "部件" }
			],
			statusData: [
				{ code: "1", icon: "iconqiyong_huaban1", name: "准备提交" },
				{ code: "2", icon: "iconfabu", name: "军检提交" },
				{ code: "3", icon: "iconxuanzhong", name: "已完成" }
			]
		};
	},
	props: {},
	components: {},
	methods: {
		changeTabs(tabsVal) {
			this.activeTabs = tabsVal;
			this.treeLoading = true;
			this.$store.commit("setTaskVal", null);
			this.initData();
			setTimeout(() => {
				this.treeLoading = false;
			}, 1000);
		},
		initData() {
			this.activeStatus = 0;
			this.searchVal = "";
			this.expandedKeys = [];
			this.selectedKeys = [];
		},
		// 切换提交状态
		changeStatus(tabsKeys, statusKeys, activeIndex) {
			// console.log(tabsKeys, statusKeys, activeIndex);
			this.treeLoading = true;
			this.$store.commit("setTaskVal", null);
			this.initData();
			this.activeStatus = activeIndex;
			setTimeout(() => {
				this.treeLoading = false;
			}, 1000);
		},
		// 搜索
		handlerSearch(value) {
			if (value.replace(/\s+/g, "").length === 0) {
				this.searchVal = "";
				return;
			}
			const expandedKeys = this.dataList
				.map((item) => {
					if (item.title.indexOf(value) > -1) {
						return this.getParentKey(item.key, this.treeData);
					}
					return null;
				})
				.filter((item, i, self) => item && self.indexOf(item) === i);
			Object.assign(this, {
				expandedKeys: [...expandedKeys],
				searchVal: value,
				autoExpandParent: true
			});
		},
		// 重置
		handlerReset() {
			this.treeLoading = true;
			this.initData();
			setTimeout(() => {
				this.treeLoading = false;
			}, 1000);
		},
		// 展开TreeNode
		onExpand(expandedKeys) {
			this.expandedKeys = expandedKeys;
			this.autoExpandParent = false;
		},
		//
		onSelect(_, e) {
			const treeNode = e.node.dataRef.key;
			const num = treeNode.split("-").length;
			if (!this.selectedKeys.includes(treeNode)) {
				this.selectedKeys.push(treeNode);
			}
			if (num < 3) this.selectedKeys = [];
			if (!this.expandedKeys.includes(treeNode)) {
				this.expandedKeys.push(treeNode);
			}
			if (num >= 3) {
				this.$store.commit("setTaskVal", e.node.dataRef);
			}
		},
		onChange(e) {
			this.handlerSearch(e.target.value);
		},
		getParentKey(key, tree) {
			let parentKey;
			for (let i = 0; i < tree.length; i++) {
				const node = tree[i];
				if (node.children) {
					if (node.children.some((item) => item.key === key)) {
						parentKey = node.key;
					} else if (this.getParentKey(key, node.children)) {
						parentKey = this.getParentKey(key, node.children);
					}
				}
			}
			return parentKey;
		},
		generateList(data) {
			for (let i = 0; i < data.length; i++) {
				const node = data[i];
				const key = node.key;
				const title = node.title;
				this.dataList.push({ key, title: title });
				if (node.children) {
					this.generateList(node.children);
				}
			}
		},
		getHierarchy(key) {
			return parseFloat(key.split("-").length);
		},
		getTreeData() {
			qams.getTreeDataApi({ productType: 1, productState: 1 }).then((resp) => {
				console.log(resp);
			});
		}
	},
	created() {
		// this.getTreeData();
		this.generateList(this.treeData);
	}
};
</script>

<style lang="less" scoped>
.fixedArea {
	width: 100%;
	height: 100%;
	border-right: 1px solid #e8e8e8;
	background: #fff;
	.status-view {
		width: 100%;
		height: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.status-items-view {
			padding: 0 10px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			color: #c0c0c0;
			cursor: pointer;
			&:hover {
				.icon-view {
					border: 1px solid var(--primaryColor);
					background: var(--primaryColor);
					color: #fff;
				}
			}
			.icon-view {
				width: 32px;
				height: 32px;
				margin-bottom: 10px;
				border-radius: 50%;
				border: 1px solid #c0c0c0;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 16px;
				color: #c0c0c0;
			}
		}
		.status-items-active {
			font {
				color: #333;
			}
			.icon-view {
				border: 1px solid var(--primaryColor);
				background: var(--primaryColor);
				color: #fff;
			}
		}
	}
	.search-view {
		width: 100%;
		margin: 10px 0;
		padding: 0 10px;
		display: flex;
		align-items: center;
		button {
			margin-left: 15px;
		}
	}
	.tree-view {
		width: 100%;
		height: calc(100% - 63px - 52px);
		padding: 0 10px 10px;
		overflow: auto;
		.iconImg {
			width: 16px;
		}
	}
}
/deep/.ant-tabs {
	height: 100%;
}
/deep/.ant-tabs-top-content.ant-tabs-content-animated {
	height: calc(100% - 60px);
	padding-bottom: 10px;
}
/deep/.ant-spin-nested-loading,
/deep/.ant-spin-container {
	height: 100%;
}
/deep/.ant-spin-nested-loading > div > .ant-spin {
	max-height: initial;
}

// 聚焦高亮treeNode
/deep/.ant-tree
	li
	.ant-tree-node-content-wrapper.ant-tree-node-selected
	.ant-tree-title {
	color: var(--primaryColor);
}
</style>
