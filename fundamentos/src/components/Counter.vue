<template>
  <h2>Counter</h2>
  <p>{{ counter }} <sup>2</sup> = {{ getSquareCounter }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ getSquareCounter }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ getSquareCounter }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ getSquareCounter }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ getSquareCounter }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ getSquareCounter }}</p>
 
    <div>
        <button>+1</button>
        <button>-1</button>
    </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      counter: 5,
    };
  },
  methods: {
    getSquareValue() {
        console.log("getSquareValue");
        return this.counter * this.counter;
    },
  },
  computed: {
      getSquareCounter() {
          console.log("computed");
          return this.getSquareValue();
      }
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