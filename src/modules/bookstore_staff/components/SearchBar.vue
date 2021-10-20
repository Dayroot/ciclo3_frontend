<template>
    <div class="search-bar">
        <filter-window
            :isActivate="filterWindowActivate"
            :filterFields="filterFields"
            @filterField="setFilterField"
        ></filter-window>
        <button class="button-filter" @click="toggleModalFilter">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5865 20H12.6316V9.9095L20 1.57617V0H0V1.56717L7.01754 9.9005V16.6095L10.5865 20ZM11.2281 18.6667H11.1679L8.42105 16.0572V9.43283L1.60044 1.33333H18.3816L11.2281 9.42383V18.6667Z" fill="#2E2B2C"/>
            </svg>
            <span>Filter</span>
        </button>
        <span class="selected-filter">{{ selectedFilter }}:</span>
        <input type="text" v-model="search" placeholder="carry out your search" />
    </div>
</template>
<script>
import { ref } from "vue";
import FilterWindow from "./FilterWindow";
export default {
    props: ["filterFields"],
    data() {
        return {
            selectedFilter: "id",
            search: null, 
        }
    },
    components: {
        FilterWindow,
    },
    emits: ['searching'],
    methods: {
        setFilterField: function(filterField) {
            this.selectedFilter=filterField;
        }
    },
    setup() {
        const filterWindowActivate = ref(false);
        const toggleModalFilter = () => {
        filterWindowActivate.value = !filterWindowActivate.value;
        };
        return { filterWindowActivate, toggleModalFilter };
    },
    watch: {
        search: function(){ 
            this.$emit('searching', this.selectedFilter, this.search)               
        },
    }
}
</script>
<style lang="scss" scoped>
    @import "@/assets/ColorPalette.scss";

    .search-bar {
        position: absolute;
        display: flex;
        background: $white;
        width: 785px;
        height: 30px;
        border-radius: 6px;
        outline: solid $dark-grey 0.6px;
    }
    .button-filter {
        background: $yellow-linear-gradient;
        display: flex;
        width: 73px;
        height: 30px;
        border: none;
        border-radius: 6px;
        align-items: center;
        justify-content: center;
    }
    input {
        display: flex;
        flex: 100px;
        border: none;
        margin: 0 5px 0 0;
    }
    input:focus {
        outline: none;
    }
    input::placeholder {
        text-indent: 30px;
        color: $grey;
        background-image: url('../../../assets/icons/search.svg');
        background-repeat: no-repeat;
        background-position: left center;
        
    }
    .button-filter:hover {
        background: $yellow-radial-gradient-activate;
    } 
    .button-filter:active {
        background: $yellow-radial-gradient;
    }
    .selected-filter {
        display: flex;
        align-items: center;
        justify-content: left;
        margin: 0 10px ;
        min-width: 60px;
        color: $grey;
    }
    
</style>