<template>
  <div class="home">
    <h1>
      This is the home landing page
    </h1>
    <ul>
      <li v-for="entry of entries" v-bind:key="entry.id">
        <router-link :to="{ name: 'view', params: {id: entry.id}}">
          {{`${entry.date} ${entry.title}`}}
        </router-link>
        <button v-bind:id="entry.id" @click="deleteEntry">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  props: ['id'],
  data: function(){
    return {
      entries: []
    }
  },
  created: function(){
    this.getEntries();
  },
  methods: {
    getEntries: function(){
      const URL = "https://pocket-journal.onrender.com/journal"
    fetch(URL, {
      method: 'get',
    })
    .then(response => response.json())
    .then(data => {
      this.entries = data
    })
    },
    deleteEntry: function(event){
      const id = event.target.id
      const URL = "https://pocket-journal.onrender.com/journal"
      fetch(`${URL}/${id}`, {
        method: 'delete',
      })
      .then(()=>{
        this.getEntries()
      })
    }
  }
}
</script>
