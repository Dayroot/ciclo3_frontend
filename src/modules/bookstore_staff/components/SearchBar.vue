<template>
    <div class="search-bar">
        <router-link to="" class="button-filter">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5865 20H12.6316V9.9095L20 1.57617V0H0V1.56717L7.01754 9.9005V16.6095L10.5865 20ZM11.2281 18.6667H11.1679L8.42105 16.0572V9.43283L1.60044 1.33333H18.3816L11.2281 9.42383V18.6667Z" fill="#2E2B2C"/>
            </svg>
            <span>Filter</span>
        </router-link>
        <input type="text" placeholder="Insert a text" />
    </div>
</template>
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
        border-radius: 6px;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }
    input {
        width: 90%;
        border: none;
        margin: 0 5px 0 15px;
    }
    input:focus {
        outline: none;
    }
    input::placeholder {
        color: blue;
        
    }
    
</style>