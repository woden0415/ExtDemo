Ext.define("AM.controller.Users", {
    extend: "Ext.app.Controller",
    
    views: [
        "user.List", 
        "user.Edit"
    ],

    models: [
        "User"
    ],
    
    stores: [
        "Users"
    ],

    init: function(){
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            },
            "userlist": {
                itemdblclick: this.editUser
            },
            "useredit button[action=save]": {
                click: this.updateUser
            }
        });
    },
    editUser: function(grid, record){
        console.log("Double clicked on"+ record.get("name"));
        var view = Ext.widget("useredit");
        view.down("form").loadRecord(record);
    },

    updateUser: function(button){
        // console.info("clicked the save button");
        var win = button.up("window"),
            form = win.down("form"),
            record = form.getRecord(),
            values = form.getValues();
        record.set(values);
        win.close();
        this.getUsersStore().sync();
    },

    onPanelRendered: function(){
        console.log("Initialized Users! This happens before the Application launch function is called!");
    }
});
