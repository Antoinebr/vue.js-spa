# vue-spa

> A SPA project with Vue.js 

Demo availabe here https://spa.antoinebrossault.com

Views are prerendered with ```prerender-spa-plugin```

## Docker Setup

```docker-compose up -d```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

### SEO 

#### How to add title and desc for the prerendering

Check [this repo](https://github.com/ktquez/vue-head/blob/bc1a89cf65c4b9bc3e492c950ac9febdfe7bf0e3/example/index.html) for more examples.

```js
export default {
    name: 'product',
    data(){
        return{
            product : {},
        }
    },
    created(){
        let id = this.$route.params.id;
         $.getJSON(API_URL`/api/?id=${id}`)
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
```

## Speed 

### Images Lazyloading 

The project uses [vue-lazyload](https://github.com/hilongjw/vue-lazyload/) to handle lazyloading. 


The two firsts images will never be lazyloaded.

```html
     <img v-if="index > 2" v-lazy="product.image">
     <img v-else :img="product.image">
``` 

