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
                title: "Customers",
                api:"https://bookstore-macad-backend.herokuapp.com/customer-management/",
                fields:["id", "fullname", "gender", "email", "identification", "phone_number", "address"],
                filterFields: ["id","fullname","gender","email", "identification"],
                dataStructure: {
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