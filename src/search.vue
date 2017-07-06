<template>

  <autocomplete
    url="http://api.tvmaze.com/search/shows"
    anchor="show"
    label="show"
    :on-select="getData" 
    :process="results"
    >
  </autocomplete>
  
  

</template>


<script>

  import Autocomplete from 'vue2-autocomplete-js';



  export default {

    components: { Autocomplete },
    data(){
        return{
            results : {},
            hello : 'hello'
        }
    },
    methods: {
    //   getData(obj){
    //     console.log('loo',obj);
    //     this.results = obj;
    //   },   
    }
  };

</script>
