<template>
    <div class="inventory-page">
        <dashboard
            :title="title"
            :api="api"
            :fields="fields"
            :filterFields="filterFields"
            :dataStructure="dataStructure"
        ></dashboard>  
    </div >
</template>

<script>
    import Dashboard from "../components/Dashboard.vue";

    export default {
        name: 'employees-page',
        data() {
            return {
                title: "Employees",
                api:"https://bookstore-macad-backend.herokuapp.com/employee/",
                fields:["user.id", "user.fullname", "user.gender", "user.email", "user.identification", "user.phone_number", "user.address", "work_area"],
                filterFields: ["id","fullname","gender","email", "identification", "work_area"],
                dataStructure: {
                  	"user": {
                      	"id": 0,
                      	"username": "",
                      	"fullname": "",
                      	"datebirth": "",
                      	"gender": "",
                      	"email": "",
                      	"identification": "",
                      	"phone_number": "",
                      	"address": ""
					},
					"salary": 0,
					"is_seller": false,
					"is_inventory_manager": false,
					"is_admin": false,
					"work_area": ""
              	},
            }
        },
        components: {
            Dashboard,
        },
    }
</script>

<style lang="scss" scoped>
    .inventory-page {
        width: 100%;
        height: 100%;
    }
</style>