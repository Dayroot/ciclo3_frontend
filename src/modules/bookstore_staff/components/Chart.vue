<template>
    <div class="chart">
    <p>GRAFICO</p>
    </div >
</template>


<script>
    import axios from 'axios';

    export default {
        name: 'chart',
        props: {
            dataSale:{
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
        },
        mounted:function(){
            this.getData();
        },
    }
</script>