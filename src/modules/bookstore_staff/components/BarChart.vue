<template>
    <div class="chart">
        <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
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
                    data: [30, 40, 56, 45, 50, 49, 60, 70, 91, 35, 56, 64]

                },{
                    name: 'Books',
                    data: [13, 23, 20, 18, 13, 27, 44, 55, 41, 67, 22, 43]
                }],
                chartOptions: {
                    chart: {
                        type: 'bar',
                        height: 350,
                        stacked: true,
                        toolbar: {
                            show: true
                        },
                        zoom: {
                            enabled: true
                        }
                    },
                    xaxis: {
                        tickPlacement: 'on',
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        title: {
                            text: 'Month'
                        }
                    },
                    yaxis: {
                        title: {
                            text: 'Sales per month'
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
                        position: 'right',
                        offsetY: 40
                    },
                    fill: {
                        opacity: 1
                    },
                },    
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