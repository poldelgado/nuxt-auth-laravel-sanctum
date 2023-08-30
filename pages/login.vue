<script setup>
import { useAuthStore } from '~/stores/useAuthStore'
const form = ref({
    email: "test@example.com",
    password: "password"
})
const auth = useAuthStore()

async function handleLogin() {
    const {error} = await auth.login(form.value)

    console.log(error)
}
</script>

<template>
    <form @submit.prevent="handleLogin">
        <label for="email">Email
            <input type="email" v-model="form.email">
        </label>
        <label for="password">Password
            <input type="password" v-model="form.password">
        </label>

        <button type="submit">Login</button>
    </form>
</template>