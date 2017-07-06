<template>
    <div>
        <h3> {{title}} </h3>
        <ul>
            <product-list-item v-for="product in products" :product="product" :key="product.id" ></product-list-item>     
        </ul>
    </div>
</template>

<script>
import productListItem from './product-list-item.vue'; 
export default {
    name: 'product-list',
    components :{
        'product-list-item' : productListItem
    } ,
    props : ['title','products']
}
</script>

<style>

</style>
