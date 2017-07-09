<template>
  <div id="app">

    <my-menu></my-menu>

    <!--<counter></counter>-->
    <!--<product-list :products="products" :title="productListTitle" ></product-list>-->

    <router-view :products="products" :title="productListTitle" ></router-view>

    <counter></counter>
    
  </div>
</template>


<script>



import counter from './counter.vue';
import myMenu from './my-menu.vue';
import productList from './productlist.vue'; 

export default {
  components : {counter,productList,myMenu},
  name: 'app',
  data () {
    return {
      products : null,
      productListTitle :'Our products'
    }
  },
  created (){ 

       $.ajax({ 
        url: API_URL+'/api/', 
        dataType: 'json', 
        type : 'GET',
        success : (data) =>{
          this.products = data;
          console.log('resolved');
        }, 
        timeout: 20000, // timeout at 20s for flacky networks
        error(){
          //$('body').append('<h1> Error during API loading</h1>');
          console.log( "error" );
        }
      }); 
      // $.getJSON(API_URL+'/api/').done(data => {
      //     this.products = data;
      //     console.log('resolved');
      //    // resolve();
      // }).fail(function() {
      //   $('body').append('<h1> Error during API loading</h1>');
      //   console.log( "error" );
      // })
      // .always(function() {
      //   console.log( "complete" );
      // });
  },
    head: {
    title: function () {
      return {
        inner: 'Home',
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
