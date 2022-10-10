<template>
  <div><button>{{text}}</button></div>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
    },
  },
};
</script>

<style scoped>
button {
  border: none;
  padding: 2px 10px;
  border-radius: 25px;
  margin-left: 25px;
  min-width: 80px;
  background: linear-gradient(to right, #9753a0, #3554a6);
  color: white;
}
</style>