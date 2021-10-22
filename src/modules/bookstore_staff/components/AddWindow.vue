<template>
    <div v-if="isActivate">
        <form class="form">
            <div class="form__head">
                <h1>{{title}}</h1>
            </div>
            <div class="fields-container">
                <div v-for="(fieldName, index) in fieldsName" :key="index" class="form__field">
                    <input type="text" name="" id="" placeholder="field"/>
                    <span></span>
                    <label for=""></label>
                </div>
            </div>
        </form>
        <div @click="$emit('cancel')" class="back"></div>
    </div>
</template>
<script>
export default {
    props: {
        isActivate: {
            type: Boolean,
            default: true     
        },
        title: {
            type: String,
            default: "Title"
        },
        fieldsName: {
            type: Array,
            default:["title","author","editorial"]
        }

    },
    data: function() {
        return {
            obj: null,
        }
    },
    emits: ['add', 'cancel'],
}
</script>
<style lang="scss">

    @import "@/assets/ColorPalette.scss";
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@700;900&display=swap');

    .back {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 3;
        background: rgba($color: #000000, $alpha: 0.5);
    }
    .form {
        width: 594px;
        padding: 20px;
        border-radius: 20px;
        background: lightblue;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-shadow: 0px 1px 2px 1px rgba($color:#000000, $alpha: 0.2);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 4;
    }
    .fields-container {
        background: lightgreen;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .form__head {
        background: rgb(16, 163, 255);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
    }
    h1 {
        font-family: 'Playfair Display SC', serif;
        font-size: 1.4rem;
    }
    .form__field {
        margin: 20px 5px;
    }
    
</style>