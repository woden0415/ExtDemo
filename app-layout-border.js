Ext.application({
    name: "Hello Ext",
    launch: function() {
        Ext.create("Ext.panel.Panel", {
            width: 800,
            height: 500,
            layout: "border",
            items: [
                {
                    title: "footer",
                    region: "south",
                    xtype: "panel",
                    height: 100,
                    split: false,
                    html: "welcom to login"
                },
                {
                    title: "west region is collapsible",
                    region: "west",
                    xtype: "panel",
                    margins: "5",
                    width: 200,
                    collapsible: true,
                    split: true,
                    id: "west-region-container",
                    layout: "fit"
                },
                {
                    title: "center region",
                    region: "center",
                    xtype: "panel",
                    layout: "fit",
                    margins: "5",
                    html: "this is center ,必须指定。"
                }
            ],
            renderTo: Ext.getBody()
        });
    }
});