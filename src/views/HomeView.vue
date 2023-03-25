<template>
  <div class="flex flex-wrap justify-evenly p-8">
      <div class="font-handlee bg-gray-200 rounded-tr-lg rounded-bl-lg p-3  w-1/4 h-1/3 m-1" v-for="entry of entries" v-bind:key="entry.id">
        <router-link :to="{ name: 'view', params: {id: entry.id}}">
          {{entry.date}}
        </router-link><br/>
        <router-link :to="{ name: 'view', params: {id: entry.id}}">
          {{ entry.title }}
        </router-link><br/>
        <button class="font-serif hover:text-red-500 duration-300" v-bind:id="entry.id" @click="deleteEntry">Delete</button>
      </div>
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
    fetch(`${URL}/`, {
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
