import axios from "axios";


const state = {
    // initial state
    todos: [ ]
}
const getters = {
    allTodos: (state) => {
        return state.todos
    }
}

const actions = {
    
// destructure to get commit
    async fetchTodos({ commit }) {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
        commit('setTodos', res.data)
    },
    
    async addTodo({ commit }, title) {
        const res = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false })
        commit('newTodo',res.data)
    },
    async deleteTodo({ commit }, id) {
        // no need to store the response
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

        commit('removeTodo',id)
    },

    async filterTodos({ commit }, e) {
        // Get the selected  option value
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText)
       
        // make our request
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
        commit('setTodos', res.data)
    },

    async updateTodo({commit},updTodo) {
        const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,updTodo)
        commit('editTodo', res.data)
    }

}

const mutations = {
    setTodos: (state, data) => {
        state.todos = data;
    }, 
    // passin in the created todo that is returned, using the previous state, add the todo to it.
    newTodo: (state, todo) => {
        state.todos.unshift(todo)
    },

    removeTodo: (state, id) => {
        state.todos = state.todos.filter(todo=>todo.id !==id)
    },

    editTodo: (state, updTodo) => {
        // get the index, we want to be at the same point of our update

        const index = state.todos.findIndex(todo => todo.id === updTodo.id)
        if (index !== -1) {
            state.todos.splice(index,1,updTodo)
        }
    }


}

export default {
    state,
    getters,
    mutations,
    actions
}