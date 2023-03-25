<template>
  <div class="journal-entry">
    <form class="p-4" v-on:submit.prevent="newEntry(formData)">
        <div class="flex justify-evenly m-3">
            <div>
                <label for="date">Date:  </label>
                <input class="border border-black rounded-md" type="date" value="Date" v-model="formData.date" required >
            </div>
            <div>
                <label for="title">Title:</label>
                <input class="border-b border-black" type="text" id="title" name="title" v-model="formData.title" required>
            </div>
        </div>
        <textarea class="border border-black w-4/5" id="body" name="textarea" v-model="formData.body" rows="10" cols="20" required></textarea><br/>
        <button class="border w-1/6 rounded-md border-blue-400 border-2 text-blue-400 font-serif hover:bg-blue-400 hover:text-white duration-300" type="submit" >Save</button>
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