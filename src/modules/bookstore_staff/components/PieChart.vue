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
                series: [0,0], 
                chartOptions: {
                    colors:['#f7b228', '#FF7042'],
                    chart: {
                        type: 'donut',
                        toolbar: {
                            show: true
                        },
                        
                    },
                    labels: ['Magazines', 'Books'],
                    title: {
                        text: "% Sales per Year",
                        align: 'center',
                        style: {
                            fontSize:  '14px',
                            fontFamily:  'Mulish',
                            color:  '#2E2B2C'
                        },
                    },
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            legend: {
                                position: 'bottom',
                                offsetX: -10,
                                offsetY: 0
                            },
                            colors: ["#000", "#00E396"],
                        },
                    }],
                    legend: {
                        position: 'bottom',
                        offsetY: 0
                    }
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
            year: function(){
                this.setDataSeries();
            },
        },
        updated() {
            this.setDataSeries()
        },
    
    }
    
</script>

<style lang="scss" scoped>
@import "@/assets/ColorPalette.scss";
.chart{
    width: 390px;
    height: 350px;
    font-family: sans-serif;
}

</style>