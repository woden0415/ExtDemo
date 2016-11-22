Ext.application({
    name: "HelloExt",
    launch: function(){
        var navigate = function(panel, direction){
            var layout = panel.getLayout();
            layout[direction]();
            Ext.getCmp("move-prev").setDisabled(!layout.getPrev());
            Ext.getCmp("move-next").setDisabled(!layout.getNext());
        };
        Ext.create("Ext.panel.Panel", {
            title: "Card layout demo",
            width: 300,
            height: 200,
            layout: "card",
            activeItem: 0,
            x: 30,
            y: 50,
            bodyStyle: "padding: 15px",
            defaults: {
                border: false
            },
            bbar: [
                {
                    id: "move-prev",
                    text: "back",
                    handler: function(btn){
                        navigate(btn.up("panel"), "prev");
                    },
                    disabled: true
                },
                "->",
                {
                    id: "move-next",
                    text: "next",
                    handler: function(btn){
                        navigate(btn.up("panel"), "next");
                    }
                }
            ],
            items: [
                {
                    id: "card-0",
                    html: "<h1>welcom to my home</h1>!"
                },
                {
                    id: "card-1",
                    html: "<h1>they are my families</h1>!"
                },
                {
                    id: "card-2",
                    html: "<p>you will be my wife</p>."
                }
            ],
            renderTo: Ext.getBody()
        });
    }
});