<template>
    <div class="chart">
        <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
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

        data: function() {
            return {
                series: [49, 51],
                chartOptions: {
                    chart: {
                    type: 'donut',
                    },
                    labels: ['Magazines', 'Books'],
                    title: {
                        text: "% Sales per Year"
                    },
                    responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                        width: 350
                        },
                        legend: {
                        position: 'bottom',
                        }
                    },
                    }],
                },    
            }
        },
     
        methods: {
            // async getData() {
            //     try {
            //         axios.get(this.api)
            //         .then((result) => {
            //             this.rowsData=[];
            //             this.rowsData= result.data;
            //         })
            //     }catch(error) {
            //         if (error.response.status == "401")
            //         alert("ERROR 401: books not found.");
            //     };
                        
            // },
        },
        mounted:function(){
            //this.getData();
        },
    }
    
</script>

<style lang="scss" scoped>

.chart{
    width: 400px;
    height: 350px;
}

</style>