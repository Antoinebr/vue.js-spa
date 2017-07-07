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
    props : ['title','products'],
    // title for seo
    head: {
    title: function () {
      return {
        inner: 'My product list',
        separator: '|',
        complement: 'My awesome shop'
      }
    },
    meta: [
      { name: 'description', content: 'Lorem ipsum dolor sit met, qui at desert mandamus, adduce ullum apeirian mea at. Eu mel vide saltando vituperata, sonet quidam deterruisset te qui. Te cum vivendum explicate abhorrent.', id: 'desc' }
    ]
  }
}
</script>

<style>

</style>
