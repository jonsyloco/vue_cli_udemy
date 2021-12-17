<template>
<div>
  <h1>{{ customTitle }}</h1>
  <p>{{ counter }} <sup>2</sup> = {{ getSquareCounter }}</p>
  <p data-testid="counter"> {{ counter}} </p>
 
    <div class="botones">
        <button @click="modifyCounter(+1)">+1</button>
        <button @click="modifyCounter(-1)">-1</button>
    </div>

</div>
</template>

<script>
export default {
  name: "Counter",
  props: {
    start: {
      tyoe: Number,
      required: false,
      default: 5,
      validator(value){
        return value >=0
      }
    },
    title: String,
  },
  data() {
    return {
      counter: this.start,
    };
  },
  methods: {
    getSquareValue() {
        //console.log("getSquareValue");
        return this.counter * this.counter;
    },
    modifyCounter(data){
      this.counter += data;
    },
  },
  computed: {
      getSquareCounter() {
          //console.log("computed");
          return this.getSquareValue();
      },
      customTitle(){        
        return this.title ? this.title : "Counter" 
      },
  },
};
</script>

<style>
    button{
        background-color: aquamarine;
        border-radius: 5px;
        border: 1px solid white;
        cursor: pointer;
        margin: 0 5px;
        padding: 5px 15px;
        transition: 0.3s ease-in-out;
    }

    button:hover{
        background-color: yellow;
        transition: 0.3s;
    }
</style>