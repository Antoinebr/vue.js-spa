<template>
      <div>
        <router-link :to="`/products/${product.id}`">
            <div class="container">
                <!-- we lazy load form the third img only -->
                <img v-if="index > 2" v-lazy="product.image">
                <img v-else :img="product.image">
                <p>{{product.name}} - {{product.price}}€</p>
            </div>
        </router-link>
     </div>
</template>

<script>
export default {
    name: 'product-list-item',
    props : ['product','index'],
}
</script>

<style scoped>
    img{
        width: 200px;
    }

    .container{
        margin-left: 5%;
        margin-right: 5%;
    }

    img[lazy]{
        opacity: 0;
    }

    img[lazy=loading] {
        opacity: 1;
        transition: opacity 300ms;
        background: rgba(230, 227, 228, 0.6) url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="utf-8"?><svg width="32px" height="32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ring"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect><circle cx="50" cy="50" r="40" stroke-dasharray="163.36281798666926 87.9645943005142" stroke="#d25353" fill="none" stroke-width="20"><animateTransform attributeName="transform" type="rotate" values="0 50 50;180 50 50;360 50 50;" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" begin="0s"></animateTransform></circle></svg>') no-repeat center;
        min-height: 20vh;
    }

</style>
