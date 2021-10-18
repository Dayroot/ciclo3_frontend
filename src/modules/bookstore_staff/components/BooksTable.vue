<template>
    <div>
        <p>tabla de libros</p>
    </div>
</template>

<script>
export default {
    props: {
        booksData: {
            type: Array,
            required: True
        }
    }
}
</script>