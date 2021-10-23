<template>
    <div v-if="isActivate">
        <div class="form">
            <div class="form__head">
                <h1>{{title}}</h1>
            </div>
            <div class="fields-container">
                <div v-for="(fieldName,index) in fields" :key="index" class="form__field">
                    <div>
                        <label>{{fieldName[0]}}</label>
                    </div>
                    <input type="text" v-model="addObjectData[fieldName[1]]" placeholder=""/>
                    <span class="outline"></span>
                </div>
            </div>
            <div class="button-bar">
                <button @click="emitExecute" class="button">
                    <span>add</span>
                </button>
                <button @click="emitCancel" class="button">
                    <span>cancel</span>
                </button>
            </div>
        </div>
        <div @click="$emit('cancel')" class="back"></div>
    </div>
</template>

<script>
export default {
    props: {
        isActivate: {
            type: Boolean,
            default: false     
        },
        title: {
            type: String,
            default: "Title"
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
        }
    },
    emits: ['execute', 'cancel'],
    methods: {
        clearFields: function(){
            for(let field of this.fields){
                this.addObjectData[ field[1] ] = null;
            }
        },
        emitExecute: function() {
            this.$emit('execute', this.addObjectData);
            this.clearFields();
        },
        emitCancel: function() {
            this.$emit('cancel');
            this.clearFields();
        }
    },
    computed: {
        fields(){
            let fields=[];
            this.fieldsName.forEach( fieldName => {
                let key= fieldName.replace(" ","_");
                fields.push([fieldName,key]);
                this.addObjectData[key] = null;
            })
            return fields
        },
    },
}
</script>

<style lang="scss" scoped>

    @import "@/assets/ColorPalette.scss";

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