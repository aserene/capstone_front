<template>
  <div class="journal-entry">
    <h1>This is gonna be the show page for an existing entry. User can edit and delete from this page.</h1>
  </div>
</template>

<script>
export default{
  name:'ShowView',
  data: function(){
    return {
      entry:{}
    }
  },
  created: function(){
    const URL = "https://pocket-journal.onrender.com/journal/view/"
    fetch(URL, {
      method: 'get',
    })
  }
}
</script>