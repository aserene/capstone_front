<template>
  <div class="journal-entry">
    <form v-on:submit.prevent="editEntry()">
      <div class="flex justify-evenly m-3">
        <div>
          <label for="date">Date Created: </label>
          <input type="date" v-model="entry.date" :defaultValue="entry.date" readonly>
        </div>
        <div>
          <label for="timestamp">Last Edited:  </label>
          <input type="text" v-model="entry.timestamp" :defaultValue="entry.timestamp" readonly>
        </div>
        <div>
          <label for="title">Title:  </label>
          <input type="text" id="title" name="title" v-model="entry.title" :defaultValue="entry.title">
        </div>
      </div>
      <textarea class="border border-black w-4/5" id="body" name="textarea" v-model="entry.body" :defaultValue="entry.body" rows="10" cols="20"></textarea><br/>
      <button class="border w-1/6 rounded-md border-blue-400 border-2 text-blue-400 font-serif hover:bg-blue-400 hover:text-white duration-300" type="submit">Save</button>
    </form>
  </div>
</template>

<script>
export default{
  name:'ShowView',
  data: function(){
    return {
      entry:{},
      date: '',
      title: '',
      body: '',
      timestamp: ''
    }
  },
  created: function(){
    const id = this.$route.params.id
    this.getEntry(id)
  },
  methods: {
    getEntry(id){
      const URL = "https://pocket-journal.onrender.com/journal"
      fetch(`${URL}/${id}/`,{
        method: "get",
      })
      .then((response) => response.json())
      .then(data => {
        this.entry = data
        console.log(data)
      })
    },
    editEntry: function(){
      const id = this.$route.params.id
      const URL = "https://pocket-journal.onrender.com/journal"
      fetch(`${URL}/${id}/`,{
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: this.entry.date,
          title: this.entry.title,
          body: this.entry.body,
          timestamp:new Date(),
        }),
      })
      .then(()=>{
        this.getEntry(id)
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
}
</script>