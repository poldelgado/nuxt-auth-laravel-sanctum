<script lang="ts" setup>
import { definePageMeta } from '#imports';
import { useAuthStore } from '~/stores/useAuthStore';
const auth = useAuthStore()
definePageMeta({
    middleware: ["auth"]
})
</script>
<template>
    <div v-if="auth.user !== null">
        hello {{ auth.user.name }} this is the vip
    </div>
</template>