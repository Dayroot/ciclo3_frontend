<template>
    <div class="container">

        <div class="content">
            <div class="header">
                <div class="header-content">
                    <div class="header__title">
                        <div class="header__icon">
                            <img src="../../../assets/icons/chart.svg" alt="" class="icon">
                        </div>
                        <p>Sales Report</p>
                    </div>
                    <div class="header__list">
                        <input list="cursos" v-model="yearSelected">
                        <datalist id="cursos">
                            <option class="option" v-for="(year, index) in this.yearsList" :key="index" :value="year" ></option>
                        </datalist>
                    </div>
                </div>
            </div>
            <div class="charts-container">
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
            </div>
        </div>

    </div >
</template>

<script>
    import axios from 'axios';
    import { defineAsyncComponent } from 'vue';
   
    export default {
        name: 'analysisPage',
        data: function(){
            return {
                dataYears: {},
                dataMonth: {},
                year: "2021",
                yearsList:[],
                yearSelected: null,
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
                            this.setYears(result.data);
                        })
                    }catch(error) {
                        if (error.response.status == "401")
                        alert("ERROR 401: not found.");
                    };          
                },
                async getDataMonth() {
                    try {
                        await axios.post( "https://bookstore-macad-backend.herokuapp.com/sales-month/", {"year": this.year}  )
                        .then((result) => {
                            this.dataMonth= result.data;
                        })
                    }catch(error) {
                        if (error.response.status == "401")
                        alert("ERROR 401: not found.");
                    };          
                },
                setYears: function(yearsObject){
                    this.yearsList = Object.keys(yearsObject["books"]);
                },
        },
        created:function(){
            this.getDataYears();
            this.getDataMonth();
        },
        watch:{
            yearSelected: function(){
                if( toString(this.year).length == 18){
                    this.year = this.yearSelected;
                    this.getDataMonth();
                }

            }
        },
    }
</script>

<style lang="scss" scoped>
@import "@/assets/ColorPalette.scss";
.container{
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    height:100%;
    
}
.content{
    border-radius: 20px;
    box-shadow: 0 0 5px 3px rgba($color: #000000, $alpha: 0.15);
}
.header {
    display: flex;
    align-items: center;
    justify-content: left;
    background: $light-yellow;
    height: 100px;
    width: 1052px;
    border-radius: 20px 20px 0 0;
}
.header-content{
    background: $yellow-linear-gradient;
    display: flex;
    align-items: center;
    margin-left: 20px;
    padding: 15px;
    border-radius: 15px;
    // border: 0.6px solid $dark-grey;
}
.charts-container{
    display: flex;
    align-items:center;
    justify-content: center;
    height:500px;
    background: $white;
    border-radius: 0 0 20px 20px;
}
.header__title {  
    margin: 0 50px 0 0;
    display: flex;
    align-items: center;
}
.header__icon{
    width: 50px;
    display: flex;
    justify-content: center;

}
.icon{
    width: 25px;
}

p{
    font-size: 1.3rem ;
    color: $dark-grey;
}
datalist option:hover, datalist option:focus {
    background: #F44336;
    background: #9C27B0;
    background: #E91E63;
    // colors:['#F44336', '#E91E63', '#9C27B0']
}
input{
    border-radius: 8px;
    border: none;
    text-align: center;
}
input:focus {
    border: none;
    text-align: center;
}
.pie-chart{
    margin: 3px;
    width: 390px;
    display: flex;
    justify-content: center;
}

.bar-chart{
    margin: 3px;
}


</style>
