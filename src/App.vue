<template>
<div class="container">
  <AddTodo/>
  <FilterTodos/>
  <Todos/>
</div>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
</template>

<script>
import AddTodo from './components/AddTodo.vue'
import Todos from './components/Todos.vue'
import FilterTodos from './components/FilterTodos.vue'

export default {
  name:'app',
  components:{
    Todos,
    AddTodo,
    FilterTodos
  }
}
</script>

<style>

body{
  font: "Franklin Gothic Medium", "Arial Narrow",Arial,sans-serif;
  line-height: 1.6;
  background: #e8f7f0;

}
.container{
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: .2rem;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
