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
            :dataStructure="dataStructure"
            @refresh="refreshTable"
            @add="AddData"
            @update="UpdateData"
            @delete="DeleteData"
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
            },
            dataStructure: {
                type: Object,
                required: true
            },
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
                    console.log("ERROR 401: not found.");
                };          
            },
            async AddData(addObjectData) {
                try {
                    await axios.post( this.api, [addObjectData] )
                    .then((result) => {
                        // alert(result.data['message']);
                        this.getData();
                    });
       
                }catch(error) {
                    console.log(error);
                };
        
            },
            async UpdateData(updateObjectData) {
                try {
                    await axios.put( this.api, updateObjectData )
                    .then((result) => {
                        // alert(result.data['message']);
                        this.getData();
                    });
       
                }catch(error) {
                    console.log(error);
                };
            },
            async DeleteData(DeleteObjects) {
                try {
                    await axios.delete( this.api,{ data: DeleteObjects} )
                    .then((result) => {
                        // alert(result.data['message']);
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
        margin: 0 auto;
    }
    .dashboard__title{
        font-family: $primary-font-family;
        text-transform: uppercase;
        color: $white;
        font-size: 2rem;
    }
    .title-container {
        display: flex;
        align-items: end;
        justify-content: center;
        width: 100%;
        height: 80px;
    }
    
    
</style>