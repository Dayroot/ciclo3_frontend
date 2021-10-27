<template>
    <div>
       <account
        :dataAccount="dataAccount"
       ></account> 
    </div>
</template>
<script>
import Account from "../../shared/pages/Account.vue";
export default {
    components: {Account},
}
</script>