<template>
    <div class="chart">
        <apexchart ref="chart1" type="donut" :options="chartOptions" :series="series"></apexchart>
    </div >
</template>

<script>

    export default {
        name: 'piechart',
        props: {
            dataYears:{
                type: Object,
                required: true,
            },
            year:{
                type: String,
                default: "2021",
            }
        },

        data: function() {
            return {
                series: [50,50],  
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
                }
            }
        },
        
        methods:{
            setDataSeries: function() {
                let books_ptg = this.dataYears['books'][this.year]
                let magazines_ptg = this.dataYears['magazines'][this.year]
                this.$refs.chart1.updateSeries([books_ptg, magazines_ptg]);                    
            },
        },
        watch: {
            dataYears: function(){
                this.setDataSeries();
            },
        },
        updated() {
            this.setDataSeries()
        },
    
    }
    
</script>

<style lang="scss" scoped>

.chart{
    width: 400px;
    height: 350px;
}

</style>