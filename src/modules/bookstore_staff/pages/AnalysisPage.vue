<template>
    <div class="chart">
      <chart  
        :dataSale="dataSale"
      ></chart>
    </div >
</template>

<script>
    import axios from 'axios';
    import Chart from "../components/Chart.vue";
   
    export default {
        name: 'analysisPage',
        data: function(){
            return {
                dataSale: [
                    {
                        product: 1,
                        quantity: 8,
                        type: "magazine",
                        price: 64750
                        total: 518000, 
                        date: '2020-3-3'
                    }
                    {
                        product: 3,
                        quantity: 13,
                        type: "magazine",
                        price: 43522, 
                        total: 522264,
                        date: '2020-3-3'
                    }
                    {
                        product: 6,
                        quantity: 5,
                        type: "book",
                        price: 55238, 
                        total: 276190,
                        date: '2020-3-3'
                    }
                ],
            }
        },
        components: {
            Chart,
        },



    }
</script>
