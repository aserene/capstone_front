<template>
    <div class="bg-blue-200">
        <h1 class="font-handlee font-bold h-9 text-2xl">
            Pocket Journal
        </h1>
        <nav class="flex space-x-4 justify-evenly p-1">
            <router-link to="/" class="font-serif font-bold p-1">Home</router-link>
            <router-link to="/new" class="font-serif p-1">New Journal Entry</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'HeaderNav'
}
</script>