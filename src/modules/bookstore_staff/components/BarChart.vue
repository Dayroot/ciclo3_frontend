<template>
    <div class="chart">
        <apexchart ref="chart2" type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
    </div >
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'chart',
        props: {
            dataMonth:{
                type: Object, 
                required: true, 
            }
        },
        data: function() {
            return {
                series: [{
                    name: 'Magazines',
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

                },{
                    name: 'Books',
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }],
                chartOptions: {
                    colors:['#f7b228', '#FF7042'],
                    chart: {
                        type: 'bar',
                        height: 350,
                        stacked: true,
                        toolbar: {
                            show: true
                        },
                        zoom: {
                            enabled: false
                        }
                    },
                    xaxis: {
                        tickPlacement: 'on',
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        title: {
                            text: 'Month',
                            style: {
                                fontSize:  '14px',
                                fontFamily:  'Mulish',
                                color:  '#2E2B2C'
                            },
                        }
                    },
                    yaxis: {
                        title: {
                            text: 'Sales per month',
                            style: {
                                fontSize:  '14px',
                                fontFamily:  'Mulish',
                                color:  '#2E2B2C'
                            },
                        }
                    },
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            legend: {
                                position: 'bottom',
                                offsetX: -10,
                                offsetY: 0
                            }
                        }
                    }],
                    plotOptions: {
                        bar: {
                            horizontal: false,
                            borderRadius: 10
                        },
                    },
                    legend: {
                        position: 'top',
                        offsetY: 0,
                    },
                    fill: {
                        opacity: 1
                    },
                },    
            }
        },
        watch: {
            dataMonth: function(){
                let booksData= Object.values(this.dataMonth['books']);
                let magazinessData= Object.values(this.dataMonth['magazines']);
                this.$refs.chart2.updateSeries(
                    [{
                        name: 'Magazines',
                        data: booksData

                    },{
                        name: 'Books',
                        data: magazinessData
                    }],
                );
            
            }
        },
     
    }
    
</script>

<style lang="scss" scoped>

.chart{
    width: 650px;
    height: 350px;
}

</style>