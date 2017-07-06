<template>
    <div>
        <router-link to ='/products'> Back to products</router-link>

        <h1>{{product.name}} </h1>
        <img :src="product.image">
        <p>{{product.description}}</p>

    </div>
</template>

<script>
export default {
    name: 'product',
    data(){
        return{
            product : {},
        }
    },
    created(){
        let id = this.$route.params.id;
         $.getJSON(`http://localhost:1988/api/?id=${id}`)
            .done(data => {
                this.product = data;
            })
    }
}
</script>

<style scoped>

    img{
        max-width: 100%;
    }

</style>
