<template>
    <div>
        <account
            :api="api"
        ></account> 
    </div>
</template>
<script>
import Account from "../../shared/pages/Account.vue";
export default {
    data() {
        return {
            api: {
                backend:"https://bookstore-macad-backend.herokuapp.com",
                detail: "user-detail",
                update: "user-update"
            },
        }
    },
    components: {Account},
}
</script>