<template>
    <div>  
        <row-table 
            v-for="(row) in booksData"
            :key="row.product.id" 
        ></row-table>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    props: ["booksData"],
    components: {
            RowTable: defineAsyncComponent(() => import( /* webpackChunkName: "rowTable" */ '../components/RowTable')),
    },
    computed :{
        title: {
            get(){
                return this.booksData[0].title
            }
        }
    }

}
</script>