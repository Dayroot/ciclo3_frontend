<template>
    <div class="container">
        <div class="header">
            <search-bar></search-bar>
        </div>
        <div class="fields-names-background-bar"></div>
        <div class="data-container">
            <table>
                <thead>
                    <tr>
                        <th></th> 
                        <th v-for="(column, index) in columns" :key="index" scope="col">{{column}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row) in rows" :key="row.id">
                        <td><input type="checkbox" name="" id=""></td>     
                        <td v-for="(valueField, index) in Object.values(row)" :key="index">{{ valueField }}</td>    
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
export default {
    props: ["rowsData", "fields"],
    data() {
        return {
            rows: [],
            columns: [],
        }
    },
    components: {
        SearchBar,
    },
    methods: {
    },
    watch: {
        rowsData: function(){         
            let obj_element_fields = {};
            this.rowsData.forEach(element => {
                obj_element_fields = {};
                this.fields.forEach(field => {
                    let index = field.indexOf(".");
                    if(index!=-1){
                        obj_element_fields[field.slice(index+1,)] = element[field.slice(0,index)][field.slice(index+1,)];
                        field=field.slice(index+1,);
                    }else {
                        obj_element_fields[field] = element[field];
                    }
                    if(this.columns.length < this.fields.length ){
                        this.columns.push(field.replace("_"," "));
                    }
                });
                this.rows.push(obj_element_fields);
            });                   
        },
    }
}
</script>

<style lang="scss" scoped>
    @import "@/assets/ColorPalette.scss";

    .header {
        height: 16% ;
        background: $light-yellow;
        border-radius: 20px 20px 0 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    th {
        text-transform: capitalize;
    }
    .data-container {
        display:flex;
        overflow: auto;

    }
    table {
        table-layout: fixed;
        border-collapse: collapse;
        margin: 0 30px;
        z-index: 1;
    }
    .fields-names-background-bar {
        background:$yellow-linear-gradient;
        position: absolute;
        height: 61px;
        width: 939px;
    }
    td, th {
        letter-spacing: 1px;
        padding: 10px;
    }
    td {
        align-items: center;
        text-align: center;
        position: relative;
    }
    .container {
        width: 939px;
        height: 80%;
        border-radius: 20px;
        background: $white;
        margin: 0 auto;
        box-shadow: 0 0 4px 2px rgba($color: #000000, $alpha: 0.2);
    }
    input {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 18px;
        height: 18px;      
    }


</style>