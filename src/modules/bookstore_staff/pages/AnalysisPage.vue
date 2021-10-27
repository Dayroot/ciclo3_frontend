<template>
    <div class="container">
        <div class="pie-chart">
            <pie-chart
                :dataYears="dataYears"
                :year="year"
            ></pie-chart>
        </div >
        <div class="bar-chart">
            <bar-chart  
                :dataMonth="dataMonth"
            ></bar-chart>   
        </div >
    </div >
</template>

<script>
    import axios from 'axios';
    import { defineAsyncComponent } from 'vue';
   
    export default {
        name: 'analysisPage',
        data: function(){
            return {
                api: "https://bookstore-macad-backend.herokuapp.com/",
                apiDataYears: "sales-year/",
                apiDataMonth: "sales-month/",
                dataYears: {},
                dataMonth: {},
                year: "2021",
            }
        },
        components: {
            BarChart: defineAsyncComponent(() => import( /* webpackChunkName: "pieChart" */ '../components/BarChart')),
            PieChart: defineAsyncComponent(() => import( /* webpackChunkName: "pieChart" */ '../components/PieChart')),
            
        },
        methods:{
                async getDataYears() {
                try {
                    await axios.get( "https://bookstore-macad-backend.herokuapp.com/sales-year/" )
                    .then((result) => {
                        this.dataYears = result.data;
                    })
                }catch(error) {
                    if (error.response.status == "401")
                    alert("ERROR 401: not found.");
                };          
            },
            async getDataMonth() {
                try {
                    await axios.get( this.api + apiDataMonth )
                    .then((result) => {
                        this.dataMonth= result.data;
                    })
                }catch(error) {
                    if (error.response.status == "401")
                    alert("ERROR 401: not found.");
                };          
            }
        },
        created:function(){
            this.getDataYears();
        }

    }
</script>

<style lang="scss" scoped>

.container{
    display: flex;
    align-items:center;
    justify-content: center;
    height:100vh;

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
