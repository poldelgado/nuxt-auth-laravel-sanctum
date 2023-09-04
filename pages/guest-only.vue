<script lang="ts" setup>
import { definePageMeta } from '#imports';

definePageMeta({
    middleware: ["guest"]
})
</script>
<template>
    <div>
        only guests
    </div>
</template>