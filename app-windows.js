// 创建windows窗口

Ext.require('Ext.window.Window');

Ext.onReady(function(){
	var win1 = Ext.create("Ext.Window", {
		width: 450,
		height: 230,
		x: 10,
		y: 10,
		plain: false,
		headerPosition: "left",
		title: "标题在左"
	});
	win1.show();
});

Ext.onReady(function(){
	Ext.create("Ext.Window", {
		width: 450,
		height: 230,
		x: 600,
		y: 10,
		plain: false,
		headerPosition: "right",
		title: "标题在右"
	}).show();
});

Ext.onReady(function(){
	Ext.create("Ext.Window", {
		width: 450,
		height: 230,
		x: 10,
		y: 600,
		plain: false,
		headerPosition: "top",
		title: "标题在上"
	}).show();
});

Ext.onReady(function(){
	Ext.create("Ext.Window", {
		width: 450,
		height: 230,
		x: 600,
		y: 600,
		plain: false,
		headerPosition: "bottom",
		title: "标题在下"
	}).show();
});
