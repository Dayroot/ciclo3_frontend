<template>

    <div class="window-container">
        <transition name="slide">
            <div v-if="isActivate" class="form">
                <div class="form__head">
                    <h1>{{typeOperation}}</h1>
                </div>
                <div class="fields-container">
                    <div v-for="(fieldName,index) in fields" :key="index" class="form__field">
                        <div>
                            <label>{{fieldName[0]}}</label>
                        </div>
                        <input :type="fieldName[2]" v-model="addObjectData[fieldName[1]]" placeholder=""/>
                        <span class="outline"></span>
                    </div>
                </div>
                <div class="button-bar">
                    <button @click="emitExecute" class="button">
                        <span>{{typeOperation}}</span>
                    </button>
                    <button @click="emitCancel" class="button">
                        <span>cancel</span>
                    </button>
                </div>
            </div>
        </transition>
        <transition name="fade">
            <div v-if="isActivate" @click="$emit('cancel','add')" class="back">
            </div>
        </transition>
    </div>
        
</template>

<script>
export default {
    props: {
        isActivate: {
            type: Boolean,
            default: false     
        },
        fieldsName: {
            type: Array,
            required: true,
            default: null,
        }
    },
    data: function() {
        return {
            addObjectData: {},
            typeOperation: "add",
        }
    },
    emits: ['add', 'cancel'],
    methods: {
        clearFields: function(){
            for(let field of this.fields){
                this.addObjectData[ field[1] ] = null;
            }
        },
        emitExecute: function() {
            this.$emit('add', this.addObjectData, this.typeOperation );
            this.clearFields();
        },
        emitCancel: function() {
            this.$emit('cancel','add');
            this.clearFields();
        }
    },
    computed: {
        fields(){
            let fields=[];
            let key = null;
            let type= "";
            this.fieldsName.forEach( fieldName => {
                fieldName =="id" && this.typeOperation=="add" ? (null):(
                    key = fieldName.replace(" ","_"),
                    type = fieldName.search( new RegExp("date", 'i') ) != -1 ? "date" : "text",
                    fields.push([fieldName,key,type]),
                    this.addObjectData[key] = null
                )
                });
            return fields
        },
    },
}
</script>

<style lang="scss" scoped>

    @import "@/assets/ColorPalette.scss";

    .slide-leave-active,
    .slide-enter-active {
        transition: all 300ms ease;
    }
    .slide-leave-to,
    .slide-enter-from {
        transform: translate(200%, 0);
    }
    .fade-leave-active,
    .fade-enter-active {
       
        transition: all 300ms ease;

    }
    .fade-leave-to,
    .fade-enter-from {
        opacity: 0;
    }

    .back {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 3;
        background: rgba($color: #000000, $alpha: 0.5);
    }
    .window-container{
        height: 100vh;
    }
    .form {
        background: $dark-grey;
        max-height: 643px;
        max-width: 800px;
        width: 100%;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto 0; 
        box-shadow: 0px 1px 2px 1px rgba($color:#000000, $alpha: 0.2);
        position: absolute;
        z-index: 4;
    }

    .fields-container {
        background: $dark-grey;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        max-height: 483px;
        max-width: 800px;
        align-items: center;
        justify-content: center;
    }
    .form__head {
        background: $yellow-linear-gradient;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        border-radius: 8px 8px 0 0;
    }
    h1 {
        text-transform: uppercase;
        font-size: 1.4rem;
    }
    .form__field {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 300px;
        height: 50px;
        margin-top: 10px;
        background: $grey;
        padding: 5px;
        border-radius: 4px;
    }
    label{
        color: $dark-grey;
        text-transform: capitalize;
    }
    input {
        border: none;
        height: 25px;
        padding: 0 8px; 
        background:none;
        border-bottom: solid 2px $dark-grey;

        &:focus{
            border-bottom: solid 2px $yellow-solid;
        }
    }
    input:focus, textarea:focus {
        outline: none;
    }
    .button-bar {
        display:flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        border-radius: 0 0 8px 8px;
    }
    .button {
        margin: 0 10px;
        border: none;
        background: $yellow-linear-gradient;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 30px;
        border-radius: 4px;
        transition: all 80ms ease-in-out;
        &:hover{
            background: $orange-linear-gradient;
        }
        &:active{
            opacity: 60%;
        }
    }
    
</style>