<template>
  <div class="home">
    <h1>
      This is the home landing page
    </h1>
    <ul>
      <li v-for="entry of entries" v-bind:key="entry.id">
      {{entry.date}}
      {{entry.title}}
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data: function(){
    return {
      entries: []
    }
  },
  created: function(){
    const URL = "https://pocket-journal.onrender.com/journal"
    fetch(URL, {
      method: 'get',
    })
    .then(response => response.json())
    .then(data => {
      this.entries = data
    })
  }
}
</script>
