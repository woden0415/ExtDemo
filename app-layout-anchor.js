Ext.application({
    name: "Hello Ext",
    launch: function(){
        Ext.create("Ext.Panel", {
            width: 500,
            height: 400,
            title: "anchor",
            layout: "anchor",
            x: 60,
            y: 60,
            items: [
                {
                    xtype: "panel",
                    title: "75% Width and 25% Height",
                    anchor: "75% 25%"
                },
                {
                    xtype: "panel",
                    title: "Offset -300 Width & -200 Height",
                    anchor: "300 -250"
                },
                {
                    xtype: "panel",
                    title: "Mixed Offset and Percent",
                    anchor: "-250 30%"
                }
            ],
            renderTo: Ext.getBody()
        })
    }
});