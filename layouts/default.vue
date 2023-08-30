<script lang="ts" default>
import { useAuthStore } from "~/stores/useAuthStore"

const auth = useAuthStore()
</script>
<template>
    <div>
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