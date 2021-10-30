<template>
    <div class="container">
        <form-window-add
            :isActivate="formWindowAddActivate"
            :fieldsName="columns"
            @cancel="formWindowStatus"
            @add="setAdd"
        ></form-window-add>
        <form-window-update
            :isActivate="formWindowUpdateActivate"
            :fieldsName="columns"
            :recordsUpdate="recordsUpdate"
            @cancel="formWindowStatus"
            @confirmUpdate="setUpdate"
        ></form-window-update>
        <confirmation-window
            :isActivate="confirmationWindowActivate"
            :recordsNumber="recordsNumber"
            :typeOperation="typeOperationConfirm"
            @accept="setExecute"
            @cancel="formWindowStatus"
        ></confirmation-window>
        <div class="table-container">
            <div class="header">
                <search-bar 
                    :filterFields="filterFields"
                    @searching="searchAnswer"
                    class="search-bar"
                ></search-bar>
            </div>
            <div class="data-container">
                <table>
                    <thead class="fields-names-background-bar">
                        <tr>
                            <th class="sticky" scope="col"></th>
                            <th class="sticky" scope="col" v-for="(column, index) in columns" :key="index">{{ column }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(row) in this.filteredRows" :key="row.id" :class="{'row-select': checkRows[row.id]}">
                            <td scope="row"><input type="checkbox" name="" id="" :checked="checkRows[row.id]" @click="activeCheckbox(row)" /></td>
                            <td v-for="(valueField, index) in Object.values(row)" :key="index">{{ valueField }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="toolbar-container">
            <div class="toolbar">
                <div class="toolbar__option" @click="$emit('refresh')">
                    <button class="toolbar__icon toolbar__icon--refresh">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="redo" class="svg-inline--fa fa-redo fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"></path></svg>
                    </button>
                </div>
                <div class="toolbar__option" @click="formWindowStatus('add')">
                    <button class="toolbar__icon toolbar__icon--add">
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="plus-square" class="svg-inline--fa fa-plus-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M352 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm96-160v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg>
                    </button>
                </div>
                <div class="toolbar__option" @click="setDelete('confirm')">
                    <button class="toolbar__icon toolbar__icon--delete">
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path  d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></svg>
                    </button>
                </div>
                <div class="toolbar__option" @click="setUpdate('openUpdateForm')">
                    <button class="toolbar__icon toolbar__icon--update">
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="edit" class="svg-inline--fa fa-edit fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path  d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path></svg>
                    </button>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import SearchBar from "./SearchBar.vue";
import FormWindowAdd from "./FormWindowAdd.vue"
import FormWindowUpdate from "./FormWindowUpdate.vue"
import ConfirmationWindow from "./ConfirmationWindow.vue"

export default {
    props: ["rowsData", "fields","filterFields","dataStructure"],
    data() {
        return {
            rows: [],
            columns: [],
            filteredRows: [],
            filterField: null,
            search: "",
            selectedRows:[],
            checkRows:{},
            deleteConfirmation: false,
            recordsNumber: 0,
            recordsUpdate:[],
            objectUpdate: {},
        }
    },
    emits: ['add','updateDB','delete','refresh'],
    components: {
        SearchBar, 
        FormWindowAdd,
        FormWindowUpdate, 
        ConfirmationWindow,
    },
    methods: {
        searchAnswer: function(selectedFilter,search) {
            this.filterField= selectedFilter;
            this.search= search; 
            this.filter();       
        },
        filter: function() {
            if (this.search.length == 0){
                this.filteredRows = this.rows
            } else {
                this.filteredRows = this.rows.filter(
                    row => {
                        let value = String( row[this.filterField] );
                        return !value.search( new RegExp(this.search, 'i') )
                    });
            }
        },
        activeCheckbox: function(row){
            let flag = true;
            for(let i = 0; i < this.selectedRows.length; i++){
                if(this.selectedRows[i]['id'] == row.id){
                    this.selectedRows.splice(i,1);
                    flag = false;
                    break;
                }
            }
            if(flag){
                 this.selectedRows.push(row);
            }
            this.checkRows[row.id]= !this.checkRows[row.id];
        },
        setDelete: function(status){
            let dataDelete = this.selectedRows.length > 0 ? this.selectedRows : this.filteredRows;
            if(status=="accept"){
                this.$emit('delete',dataDelete);
                this.selectedRows = [];
                this.recordsNumber = 0;
            }else if (status=="confirm"){
                this.recordsNumber = dataDelete.length;
                this.formWindowStatus('confirmation', 'delete');
            }
        },
        setAdd: function(objectData, operation){
            this.$emit(operation, this.setDataStructure(this.dataStructure, objectData) );
            this.formWindowStatus('add');
        },
        setUpdate: function(status, updateObjectData=null){

            if(status=="accept"){
                const dataEmit = this.setDataUpdate(this.objectUpdate, this.recordsUpdate);
                console.log("datos que quiero enviar");
                console.log(dataEmit);
                console.log("datos que quiero enviar");
                this.$emit('update',  dataEmit);
                this.selectedRows = [];
                this.recordsUpdate = [];

            }else if(status=="confirm"){
                this.recordsNumber = this.recordsUpdate.length;
                this.objectUpdate = updateObjectData;
                this.formWindowStatus('update');
                this.formWindowStatus('confirmation', 'update');

            }else if(status=="openUpdateForm"){
                this.recordsUpdate = this.selectedRows.length > 0 ? this.selectedRows : this.filteredRows;
                this.formWindowStatus('update');
            }
            
        },
        
        setDataUpdate: function(updateObjectData, objectsData){
            for(let index in objectsData){
                for(let key of Object.keys(updateObjectData) ){
                    let value = updateObjectData[key];
                    if( value != null){
                        objectsData[index][key] = value;
                    }else{
                        delete objectsData[index][key]
                    }
                }
                objectsData[index] = this.setDataStructure(this.dataStructure, objectsData[index]);
            }
            

            return objectsData
        },
        setDataStructure(input, objectData){
            let structure = input;
            for( let key of Object.keys(input) ){
                if( typeof input[key] != "object" ){
                        let value = objectData[key];
                        if( value == null) {
                            delete input[key];
                        }else if(key == "id"){
                            input[key] = parseInt(value);
                        }
                        else{
                            input[key] = value;
                        }
                }else{
                    input[key] = this.setDataStructure(input[key], objectData);
                }           
            }
            return input;
        },
        setExecute: function(operation){
            if (operation == "delete"){
                this.setDelete("accept");
            }else if(operation == "update"){
                this.setUpdate("accept");
            }
            this.formWindowStatus('confirmation');
        },
    },
    setup() {

        const formWindowAddActivate = ref(false);
        const formWindowUpdateActivate = ref(false);
        const confirmationWindowActivate = ref(false);
        const typeOperationConfirm = ref("none");

        const formWindowStatus = (option, operation="none") => { 
              
            option == "confirmation" ? (
                    confirmationWindowActivate.value = !confirmationWindowActivate.value,
                    typeOperationConfirm.value= operation
                ):(
                    null
                );
            option == "update" ? (
                    formWindowUpdateActivate.value = !formWindowUpdateActivate.value 
                ):(
                    null
                );
            option == "add" ? (
                    formWindowAddActivate.value = !formWindowAddActivate.value 
                ):(
                    null
                );
            
        };

        return { confirmationWindowActivate, formWindowUpdateActivate, formWindowAddActivate, formWindowStatus, typeOperationConfirm};
    },
    watch: {
        rowsData: function(){

            if(this.columns.length < this.fields.length){
                for(let field of this.fields){
                    let index = field.indexOf(".");
                    if(index!=-1){
                        field = field.slice(index + 1, );
                    }
                    this.columns.push(field.replace("_"," "));
                }
            }
            this.rows=[];
            this.rowsData.forEach(element => {
                let obj_element_fields = {};
                this.fields.forEach(field => {
                    let index = field.indexOf(".");
                    if(index!=-1){
                        let value = element[field.slice(0,index)][field.slice(index+1,)]
                        obj_element_fields[field.slice(index+1,)] = value;
                        field = field.slice(index+1,);
                        // clear checkbox
                        if(field=="id"){
                            this.checkRows[ value ] = false;
                        }
                    }else {
                        obj_element_fields[field] = element[field];
                    }
                });
                this.rows.push(obj_element_fields);
            });
            this.filter();                  
        },
    },
}
</script>

<style lang="scss" scoped>
    @import "@/assets/ColorPalette.scss";

    .header {
        height: 16% ;
        max-height: 81px;
        background: $light-yellow;
        border-radius: 20px 20px 0 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    table {
        table-layout: fixed;
        border-collapse: collapse;
        z-index: 1;
        width: 100%;
    }
    .sticky {
        position: sticky;
        top:0;
        z-index: 1;
    }
    thead th {
        background:$yellow-linear-gradient;
    }
    td, th {
        letter-spacing: 1px;
        padding: 10px;
        margin: 3px;
        max-width: 6.9em;
        min-width: 6.9em;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    th {
        text-transform: capitalize;
    }
    td {
        align-items: center;
        text-align: center;
        position: relative;
        color: $medium-grey;
    }
    thead th:nth-child(1), tbody td:nth-child(1){
        width: 40px;
    }

    thead th:nth-child(2), tbody td:nth-child(2){
        width:70px;
    }
    .data-container {
        height: 82%;
        overflow: auto;
    }
    
    .fields-names-background-bar {
        background:$yellow-linear-gradient;
        height: 61px;
        width: 58.7em;
        padding: 0 30px;
    }

    .table-container {
        width: 58.7em;
        height: 100%;
        border-radius: 20px;
        background: $white;
        z-index: 1;
        box-shadow: 0 0 3px 2px rgba($color: #000000, $alpha: 0.2);
    }
    input {
        position: absolute;
        top: 50%;
        left: 80%;
        transform: translate(-50%, -50%);
        width: 18px;
        height: 18px;      
    }

    .row-select {
            background: $faded-orange;
            & td {
                color: $dark-grey;
            }
        }

    .container {
        width: 63em;
        display: flex;
        height: 80%;
        margin: auto;
    }
    .toolbar-container {
        background: $light-grey;
        height: 80%;
        width: 96px;
        position: absolute;
        transform: translateX(57em);
        border-radius: 0 20px 20px 0;
        background: $opaque-white;
        display: flex;
        align-items: center;
        justify-content: right;
        box-shadow: 0 0 3px 2px rgba($color: #000000, $alpha: 0.2);
    }
    .toolbar {
        width: 4.3em;
        height: 500px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .toolbar__icon {
        border: none;
        width: 20px;
        background: none;
        fill:$dark-grey;
        transition: all 200ms ease-in-out;
    }
    .toolbar__icon--update {
        width: 22px;
    }
    .toolbar__option {
        width: 50px;
        height: 50px;
        margin:10px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 200ms ease-in-out;
    }

    .toolbar__option:hover {
        background: $yellow-radial-gradient;      
        .toolbar__icon {
            transform: scale(1.15);
            fill: $white;
        }
    }
    .toolbar__option:active { 
        background: $yellow-radial-gradient-activate;    
        .toolbar__icon {
            transform: scale(1);
        }
    }
    
    @media screen and (max-width:1280px){
        .table-container {
            width: 875.2px;
            position:relative;
            left: 50%;
            transform:translateX(-480px)
        }
        .toolbar-container {
            transform: translateX(55em);
        }
    }
    @media screen and (max-width:1024px){
        .table-container {
            margin: 0;
            width: 800px;
            position:relative;
            left: calc(50%);
            transform:translateX(-410px)
        }
        .toolbar-container {

            transform: translateX(54em);
        }
        .search-bar{
            position: absolute;
            width: 30em;
        }
    }
</style>