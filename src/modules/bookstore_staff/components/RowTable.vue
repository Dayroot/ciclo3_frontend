<template>
    <tr>
        <th scope="row">{{ dataRow.product.id  }}</th>
        <td>{{ dataRow.title }}</td>
        <td>{{ dataRow.author }}</td>
        <td>{{ dataRow.publication_date }}</td>
        <td>{{ dataRow.editorial }}</td>
        <td>{{ dataRow.isbn }})</td>
        <td>{{ dataRow.product.price }}</td>
        <td>{{ dataRow.product.stock  }}</td>
    </tr>
</template>

<script>
export default {
    props: ["dataRow"],
    methods: {
        
    },
}
</script>