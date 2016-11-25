Ext.define("AM.view.user.List", {
    extend: "Ext.grid.Panel",
    alias: "widget.userlist",

    title: "All Users",
    initComponent: function(){
        this.store = {
            fields: ["id", "name", "email", "phone"],
            data: [
                {
                    id: 1,
                    name: "Ed",
                    email: "woden0415@163.com",
                    phone: "15102127423"
                },
                {
                    id: 2,
                    name: "Tommy",
                    email: "562550212@qq.com",
                    phone: "151021127422"
                }
            ]
        };
        this.columns = [
            {
                header: "Id",
                dataIndex: "id",
                flex: 1
            },
            {
                header: "Name",
                dataIndex: "name",
                flex: 1
            },
            {
                header: "Email",
                dataIndex: "email",
                flex: 1
            },
            {
                header: "Phone",
                dataIndex: "phone",
                flex: 1
            }
        ];
        this.callParent(arguments);
    }
});