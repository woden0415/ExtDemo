Ext.application({
    name: "HelloExt",
    launch: function(){
        Ext.create("Ext.panel.Panel", {
            title: "Column Layout",
            width: 350,
            height: 250,
            x: 20,
            y: 200,
            layout: "column",
            items:[
                {
                    title: "Column 1",
                    columnWidth: .25,
                    html: "Column 1"
                },
                {
                    title: "Column 2",
                    columnWidth: .5,
                    html: "Column 2"
                },
                {
                    title: "Column 3",
                    columnWidth: .25,
                    html: "Column 3"
                }
            ],
            renderTo: Ext.getBody()
        })
    }
});