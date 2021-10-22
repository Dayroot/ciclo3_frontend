<template>
    <div class="dashboard">
        <div class="title-container">
            <h1 class="dashboard__title">{{title}}</h1>
        </div>
        <custom-table 
            class="dashboard__table"
            :rowsData="rowsData" 
            :fields="fields"
            :filterFields="filterFields"
            @refresh="refreshTable"
        ></custom-table>  
    </div >
</template>

<script>
    import axios from 'axios';
    import CustomTable from "./CustomTable.vue";

    export default {
        name: 'dashboard',
        props: {
            title: {
                type: String,
                required: true,
            },
            api: {
                type: String,
                required: true,
            },
            fields:{
                type: Array,
                required: true,
            },
            filterFields:{
                type: Array,
                required: true,
            }
        },
        data: function(){
            return {
                rowsData: null,
            }
        },
        components: {
            CustomTable,
        },
        methods: {
            async getData() {
                try {
                    axios.get(this.api)
                    .then((result) => {
                        this.rowsData=[];
                        this.rowsData= result.data;
                    })
                }catch(error) {
                    if (error.response.status == "401")
                    alert("ERROR 401: books not found.");
                };
                        
            },
            refreshTable() {
                this.getData();
            }
        },
        mounted:function(){
            this.getData();
        },
    }
</script>

<style lang="scss" scoped>
    @import "@/assets/ColorPalette.scss";
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@700;900&display=swap');
    .dashboard {
        display:flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        align-items: center;
    }
    .dashboard__title{
        font-family: 'Playfair Display SC', serif;
        color: $white;
        font-size: 2rem;
    }
    .title-container {
        text-align: center;
        width: 100%;
        height: 50px;
        background: blue;
    }

    
</style>