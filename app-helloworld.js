Ext.application({
    name : "hello world",
    launch: function(){
        Ext.create("Ext.container.Viewport", {
            layout: "fit",
            items: [
                {
                    title: "Hello World",
                    html: "<h1>Hello! Welcome to my home</h1>"
                }
            ]
        })
    }
});