<template>
  <div class="journal-entry">
    <h1>
        This is gonna be where you can create a new journal entry.
    </h1>
    <h2>
        Form goes here
    </h2>
    <form v-on:submit.prevent="newEntry(formData)">
        <label for="date">Date:</label>
        <input type="date" value="Date" v-model="formData.date" required >
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" v-model="formData.title" required><br/>
        <textarea id="body" name="textarea" v-model="formData.body" rows="10" cols="20" required></textarea>
        <button type="submit" >Save</button>
    </form>
  </div>
</template>

<script>
export default {
    name: 'NewView',
    data() {
        return {
            formData: {
                date: '',
                title: '',
                body: '',
                timestamp: ''
            }
        };
    },
    methods: {
    newEntry: function(request){
        const URL = "https://pocket-journal.onrender.com/journal"
        fetch(`${URL}/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                date:request.date,
                title: request.title,
                body: request.body,
                timestamp: new Date(),
            }),
        })
        .then((res)=>{
            console.log(res)
            this.$router.push('/');
        })
        .catch(error => {
            console.log(error)
        })
    }
    }
  };
</script>