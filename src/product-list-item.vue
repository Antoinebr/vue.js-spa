<template>
      <div>
        <router-link :to="`/products/${product.id}`">
            <img :src="product.image">
            <p>{{product.name}} - {{product.price}}€</p>
        </router-link>
     </div>
</template>

<script>
export default {
    name: 'product-list-item',
    props : ['product'],
}
</script>

<style scoped>
    img{
        width: 200px;
    }
</style>
