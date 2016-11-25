Ext.define("AM.controller.Users", {
    extend: "Ext.app.Controller",
    
    views: [
        "user.List",
        "user.Edit"
    ],

    init: function(){
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            },
            "userlist": {
                itemdblclick: this.editUser
            }
        });
    },
    editUser: function(grid, record){
        console.log("Double clicked on"+ record.get("name"));
        var view = Ext.widget("useredit");
        view.down("form").loadRecord(record);
    },
    onPanelRendered: function(){
        console.log("Initialized Users! This happens before the Application launch function is called!");
    }
});