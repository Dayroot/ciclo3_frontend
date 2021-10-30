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
                        <datalist id="cursos" class="datalist">
                            <option class="option" v-for="(year, index) in this.yearsList" :key="index" :value="year" ></option>
                        </datalist>
                    </div>
                </div>
                <span class="year-selected">Sales of the year {{year}}</span>
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
                year: "",
                yearsList:[],
                yearSelected: "",
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
                setCurrentYear: function(){
                    this.year= new Date().getFullYear();
                    this.yearSelected = new Date().getFullYear();
                },
        },
        created:function(){
            this.setCurrentYear();
            this.getDataYears();
            this.getDataMonth();
        },
        watch:{
            yearSelected: function(){
                if( this.yearSelected.toString().length == 4){
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
    height: 80px;
    width: 1052px;
    border-radius: 20px 20px 0 0;
    position: relative;
}
.header-content{
    display: flex;
    align-items: center;
    margin-left: 20px;
    border-radius: 8px;
    outline: 0.6px solid $dark-grey;
    background: $white;
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
    background: $yellow-linear-gradient;
    padding: 0px;
    height: 38px;
    padding-right:10px;
    border-radius: 8px;
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
    font-size: 1.3rem;
    color: $dark-grey;
}

input{
    border-radius: 8px;
    border: none;
    text-align: center;
    display: flex;
    height: 38px;

    &:focus {
        outline: none;
        text-align: center;
    }
}

.datalist{
    border:none;
    outline: none;
    &:hover{
        background: lightskyblue;
    }
}
.option:hover{
    background: lime;
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

.year-selected{
    position: absolute;
    right: 25%;
    font-size: 1.3rem;
}



// @media screen and (max-width:1280px){
//     .header {
//         height: 80px;
//         width: 980px;

//     }
// }
// @media screen and (max-width:1024px){
//     .header {
//         height: 80px;
//         width: 730px;

//     }
//     .pie-chart{
//         margin: 3px;
//         width: 290px;

//     }
//     .year-selected{
//         right: 6%;
//     }   

// }

</style>
