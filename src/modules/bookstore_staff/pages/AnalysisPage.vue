<template>
    <div class="container">
        <div class="pie-chart">
            <pie-chart>
                :dataSale="dataSale"
            ></pie-chart>
        </div >
        <div class="bar-chart">
            <bar-chart  
                :dataSale="dataSale"
            ></bar-chart>   
        </div >
    </div >
</template>

<script>
    import axios from 'axios';
    import BarChart from "../components/BarChart.vue";
    import PieChart from "../components/PieChart.vue";
   
    export default {
        name: 'analysisPage',
        data: function(){
            return {
                dataSale: [
                    {
                        product: 1,
                        quantity: 8,
                        type: "magazine",
                        price: 64750,
                        total: 518000, 
                        date: '2020-3-3',
                    },
                    {
                        product: 3,
                        quantity: 13,
                        type: "magazine",
                        price: 43522, 
                        total: 522264,
                        date: '2020-3-3',
                    },
                    {
                        product: 6,
                        quantity: 5,
                        type: "book",
                        price: 55238, 
                        total: 276190,
                        date: '2020-3-3',
                    }
                ],
            }
        },
        components: {
            BarChart,
            PieChart,
        },

    }
</script>

<style lang="scss" scoped>

.container{
    display: flex;
    align-items:center;
    height:100vh;
    //background: white;
}

.pie-chart{
    background: white;
    margin: 3px;
    width: 420px;
}

.bar-chart{
    background: white;
    margin: 3px;
}

</style>
