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
                        <input type="text" v-model="updateObjectData[fieldName[1]]" />
                        <span class="outline"></span>
                    </div>
                </div>
                <div class="button-bar">
                    <button @click="emitConfirmUpdate" class="button">
                        <span>{{typeOperation}}</span>
                    </button>
                    <button @click="emitCancel" class="button">
                        <span>cancel</span>
                    </button>
                </div>
            </div>
        </transition>
        <transition name="fade">
            <div v-if="isActivate" @click="$emit('cancel',typeOperation)" class="back">
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
            default: null
        },
        recordsUpdate: {
            type: Array,
            default: []
        }
    },
    data: function() {
        return {
            updateObjectData: {},
            typeOperation: "update",
        }
    },
    emits: ['confirmUpdate', 'cancel'],
    methods: {
        clearFields: function(){
            for(let field of this.fields){
                this.updateObjectData[ field[1] ] = null;
            }
        },
        emitConfirmUpdate: function() {
            console.log("dentro del form update cuando emite");
            console.log(this.recordsUpdate);
            console.log("dentro del form update cuando emite");
            this.$emit('confirmUpdate', this.updateObjectData);
            // this.clearFields();
        },
        emitCancel: function() {
            this.$emit('cancel','update');
            // this.clearFields();
        }
    },
    computed: {
        fields(){
            console.log("dentro del form update");
            console.log(this.recordsUpdate);
            console.log("dentro del form update");
            let fields=[];
            let key = null;
            this.fieldsName.forEach( fieldName => {
                fieldName == "id" ? ( null ) : (
                    key = fieldName.replace(" ","_"),
                    fields.push([fieldName,key]),
                    this.recordsUpdate.length != 1  ? this.updateObjectData[key] = null : this.updateObjectData[key] = this.recordsUpdate[0][key]
                    );
                });
            console.log("dentro del form update Despues de asignar");
            console.log(this.recordsUpdate);
            console.log(this.updateObjectData);
            console.log("dentro del form update Despues de asignar");
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
    .form {
        max-height: 643px;
        max-width: 800px;
        width: 100%;
        padding: 20px;
        border-radius: 20px;
        background: lightblue;
        display: flex;
        flex-direction: column;
        justify-content: center;
        top:50%;
        margin-top: -321.5px;
        box-shadow: 0px 1px 2px 1px rgba($color:#000000, $alpha: 0.2);
        position: absolute;
        z-index: 4;
    }

    .fields-container {
        background: lightgreen;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        max-height: 483px;
        max-width: 800px;
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
        font-family: $second-font-family;
        font-size: 1.4rem;
    }
    .form__field {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 300px;
        height: 50px;
        margin: 5px 5px;
        background: darkgreen;
    }
    label{
        color: $dark-grey;
        text-transform: capitalize;
    }
    input {
        border: none;
        width: 300px;
        height: 25px;
        border-radius: 8px;
        padding: 0 8px; 
    }
    input:focus, textarea:focus {
        outline: none;
    }
    .button-bar {
        background: darkkhaki;
        display:flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }
    .button {
        margin:0 20px;
        width:115px;
        height: 30px;
        border-radius: 6px;
        border: none;
    }
    
</style>