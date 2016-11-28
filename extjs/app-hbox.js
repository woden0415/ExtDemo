// 创建HBox布局

Ext.onReady(function(){
	var d1 = Ext.create("Ext.panel", {
		title: "HBox 顶对齐，且组件在容器的左边",
		frame: true,
		width: 600,
		height: 100,
		items: [
			anchor: "100%",
			layout: {
				type: "hbox",
				padding: 
			}
		]
	});
});