Ext.application({
    name: "Hello name",
    launch: function(){
        Ext.create("Ext.panel.Panel", {
            title: "Accordion Layout",
            width: 300,
            height: 200,
            x: 20,
            y: 20,
            layout: "accordion",
            defaults: {
                bodyStyle: "padding: 15px"
            },
            layoutConfig: {
                titleCollapse: false,
                animate: true,
                activeOnTop: false
            },
            items: [
                {
                    title: "panel 1",
                    html: "panel content 1"
                },
                {
                    title: "panel 2",
                    html: "panel content 2"
                },
                {
                    title: "panel 3",
                    html: "panel content 3"
                }
            ],
            renderTo: Ext.getBody()
        });
    }
});