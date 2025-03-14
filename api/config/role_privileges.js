module.exports = {
    privGroups: [
        {
            id: "Users",
            name: "User Permissions"
        },
        {
            id: "Roles",
            name: "Roles Permissions"
        },
        {
            id: "Categories",
            name: "Categories Permissions"
        },
        {
            id: "AuditLogs",
            name: "AuditLogs Permissions"
        }
    ],


    privileges: [
        {
            key: "user_view",
            name: "User View",
            group: "USERS",
            description: "User view"
        }, {
            key: "user_add",
            name: "User Add",
            group: "USERS",
            description: "User add"
        }, {
            key: "user_update",
            name: "User Update",
            group: "USERS",
            description: "User update"
        }, {
            key: "user_delete",
            name: "User Delete",
            group: "USERS",
            description: "User delete"
        }, {
            key: "role_view",
            name: "Role View",
            group: "ROLES",
            description: "Role view"
        }, {
            key: "role_add",
            name: "Role Add",
            group: "ROLES",
            description: "Role add"
        }, {
            key: "role_update",
            name: "Role Update",
            group: "ROLES",
            description: "Role update"
        }, {
            key: "role_delete",
            name: "Role Delete",
            group: "Roles",
            description: "Role delete"
        }, {
            key: "category_view",
            name: "Category View",
            group: "CATEGORIES",
            description: "Category view"
        }, {
            key: "category_add",
            name: "Category Add",
            group: "CATEGORIES",
            description: "Category add"
        }, {
            key: "category_update",
            name: "Category Update",
            group: "CATEGORIES",
            description: "Category update"
        }, {
            key: "category_delete",
            name: "Category Delete",
            group: "CATEGORIES",
            description: "Category delete"
        }, {
            key: "auditlogs_view",
            name: "AuditLogs View",
            group: "AUDITLOGS",
            description: "AuditLogs view"
        }, {
            key: "auditlogs_add",
            name: "AuditLogs Add",
            group: "AUDITLOGS",
            description: "AuditLogs add"
        }, {
            key: "auditlogs_update",
            name: "AuditLogs Update",
            group: "AUDITLOGS",
            description: "AuditLogs update"
        }, {
            key: "auditlogs_delete",
            name: "AuditLogs Delete",
            group: "AUDITLOGS",
            description: "AuditLogs delete"
        },
    ]

}

