<template>
    <div>
        <router-link to ='/products'> Back to products</router-link>
        <h3> {{title}} </h3>
        <p>{{content}}</p>
    </div>
</template>

<script>
export default {
    name : 'about-us',
    data(){
        return{
            title: 'about-us',
            content : 'Lorem ipsum dolor sit met, qui at desert mandamus, adduce ullum apeirian mea at. Eu mel vide saltando vituperata, sonet quidam deterruisset te qui. Te cum vivendum explicate abhorrent. Id venom argumentum vel. Ut lorem bocent hendrerit eam.'
        }
    }
}
 
</script>

<style>

</style>
