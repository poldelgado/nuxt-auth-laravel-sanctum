<script lang="ts" setup>
import { useAuthStore } from "~/stores/useAuthStore"

const auth = useAuthStore()

async function handleLogout() {
    await auth.logout();
}
</script>
<template>
    <div>
        <button type="button" v-if="auth.isLoggedIn" @click.prevent="handleLogout">logout</button>
        <pre>
            {{ auth.user }}
        </pre>
        <ul>
            <li>
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/register">Register</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/login">Login</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/auth-only">Auth only</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/guest-only">Guess only</NuxtLink>
            </li>
        </ul>
        <slot />
    </div>
</template>