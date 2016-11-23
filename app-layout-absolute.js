Ext.application({
    name: "Hello name",
    launch: function(){
        Ext.create("Ext.panel.Panel", {
            title: 'Absolute布局',
            width: 300,
            height: 200,
            x: 20,
            y: 20,
            layout: "absolute",
            defaultType: "textfield",
            items: [
                {
                    x: 10,
                    y: 10,
                    xtype: "label",
                    text: "Send To"
                },
                {
                    x: 80,
                    y: 10,
                    name: "To",
                    anchor: "90%"
                },
                {
                    X: 10,
                    y: 40,
                    xtype: "label",
                    text: "Subject"
                },
                {
                    x: 80,
                    y: 40,
                    name: "subject",
                    anchor: "90%"
                },{
                    x: 0,
                    y: 80,
                    xtype: "textareafield",
                    name: "msg",
                    anchor: "100% 100%"
                }
            ],
            renderTo: Ext.getBody()
        });
    }
});