<template>
  <router-view />
</template>

<style>
::-webkit-scrollbar {
  width: 12px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 4px white;
  background: black;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #9753a0, #6591ff);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #a867b1, #7aa0ff);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

* {
  font-family: "Tajawal", sans-serif;
}
a {
  text-decoration: none;
  color: black;
  display: block;
}
ul {
  list-style: none;
}
.wraper {
  width: 70%;
  margin: 100px auto;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

nav a.router-link-active {
  background-color: #9753a0;
  color: white;
}
</style>
