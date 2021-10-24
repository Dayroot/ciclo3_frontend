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
            @add="AddData"
            @update="UpdateData"
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
                    await axios.get(this.api)
                    .then((result) => {
                        this.rowsData=[];
                        this.rowsData= result.data;
                    })
                }catch(error) {
                    if (error.response.status == "401")
                    alert("ERROR 401: books not found.");
                };          
            },
            async AddData(addObjectData) {
                console.log("Agregando datoss...")
                console.log([addObjectData]);
                try {
                    await axios.post( this.api, [addObjectData] )
                    .then((result) => {
                        alert(result.data['message']);
                        this.getData();
                    });
       
                }catch(error) {
                    console.log(error);
                };
        
            },
            async UpdateData(updateObjectData) {
                console.log("Actualizando datoss...")
                console.log([updateObjectData]);
                try {
                    await axios.put( this.api, [updateObjectData] )
                    .then((result) => {
                        alert(result.data['message']);
                        this.getData();
                    });
       
                }catch(error) {
                    console.log(error);
                };
        
            },
            refreshTable() {
                this.getData();
            }
        },
        created:function(){
            this.getData();
        },
    }
</script>

<style lang="scss" scoped>
    @import "@/assets/ColorPalette.scss";
    .dashboard {
        display:flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        align-items: center;
    }
    .dashboard__title{
        font-family: $second-font-family;
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