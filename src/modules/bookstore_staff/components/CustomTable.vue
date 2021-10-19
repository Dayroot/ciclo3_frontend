<template>
    <div>  
        <table>
            <thead>
                <tr>
                    <th v-for="(column, index) in columns" :key="index" scope="col">{{column}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row) in rows" :key="row.id">      
                    <td v-for="(valueField, index) in Object.values(row)" :key="index">{{ valueField }}</td>    
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
    props: ["rowsData", "fields"],
    data() {
        return {
            rows: [],
            columns: [],
        }
    },
    components: {
        
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
    th {
        text-transform: capitalize;
    }

</style>