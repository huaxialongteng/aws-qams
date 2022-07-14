<template>
	<div id="app">
		<a-config-provider :locale="zh_CN">
			<router-view />
		</a-config-provider>
	</div>
</template>

<style lang="less">
:root {
	--primaryColor: #1890ff;
	--primaryHoverColor: rgba(#1890ff, 0.1);
	// --primaryColor: #de7960;
	// --primaryHoverColor: rgba(#de7960, 0.1);
}
#app {
	width: 100%;
	height: 100%;
	// background: #ebf0f2;
}
</style>
