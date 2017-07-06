<template>
  <div class="btn" @click="addLike"> {{likes}} persone{{s}} aime{{nt}} ca </div>
</template>

<script>
export default {
  name : 'counter', 
  data () {
    return {
      likes : "",
      s : "",
      nt: ""
    }
  },
   methods : {
    addLike : function(){
      this.likes++;
      this.checkForPlurals();  
    },
    checkForPlurals(){
        if(this.likes > 1) this.s = "s";
        if(this.likes > 1) this.nt = "nt";
    },
    },created: function () {
  
        $.getJSON(`http://localhost:1988/api/?likes`)
            .done(data => {
                this.likes = data;
                this.checkForPlurals(); 
            })
    }
}
</script>

<style>

  .btn{
    width: 200px;
    height: 50px;
    display: block;
    margin: auto;
    text-align: center;
    line-height: 50px;
    background-color: burlywood;
  }

</style>
