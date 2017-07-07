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
                this.title =  this.product.name;
                this.$emit('updateHead'); // update the title
            })
    },
    head: {
        title: function () {
            return {
                inner: this.product.name ,
                separator: '|',
                complement: 'My awesome shop'
            }
        },
        meta: [{ name: 'description', content: "Lorem ipsum dolor sit met, qui at desert mandamus, adduce ullum apeirian mea at. Eu mel vide saltando vituperata, sonet quidam deterruisset te qui. Te cum vivendum explicate abhorrent. Id venom argumentum vel. Ut lorem bocent hendrerit eam.", id: 'desc' }]
    }
}
</script>

<style scoped>

    img{
        max-width: 100%;
    }

</style>
