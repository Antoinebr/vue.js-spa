<template>

    <nav>
        
      <div class="blury-layer"></div>
      <ul>
        <li> <router-link to ='/products'> Our products</router-link> </li>
        <li> <router-link to ='/about-us'> About us</router-link></li>
        <li> <a href="#">Item</a></li>
        <li> <a href="#">Item</a></li>
        <li> <a href="#">Item</a></li>
        <li> <a href="#">Item</a></li>
        <li> <a href="#">Item</a></li>
        <li> <a href="#">Item</a></li>
        <li> <a href="#">Item</a></li>
        <li> <a href="#">Item</a></li>

      </ul>
    </nav>
</template>

<script>
export default {
  name : 'my-menu',
  data :function() {
    return {
        m : {}
    }
  },
}


</script> 

<style >
nav {
  display: block;
  height: 50px;
  overflow-y: hidden;
  padding: 0;
  position: relative;
  -webkit-overflow-scrolling: touch;
  overflow-x: hidden;
  box-shadow: 4px 8px 17px rgba(136, 136, 136, 0.38);
}

nav ul {
  width: 100%;
  height: 63px;
  /* important height to be sure that the scroll bar X will be hidden thanks to the overflow: hidden on the parrent*/
  white-space: nowrap;
  overflow: scroll;
  margin: 0px;
}

nav ul li {
  display: inline-block;
  line-height: 40px;
  line-height: 50px;
  margin-left: 12px;
  margin-right: 12px;
}

nav ul li a {
  text-transform: uppercase;
  font-family: sans-serif;
  text-decoration: initial;
  font-size: 13px;
}

.blury-layer {
  background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(248, 248, 248, 0)), color-stop(100%, rgba(185, 185, 185, 0.72)));
  height: 50px;
  position: absolute;
  pointer-events: none;
  right: 0;
  top: 0px;
  width: 15px;
  bottom: 0px;
  z-index: 2;
  line-height: normal;
}
</style>