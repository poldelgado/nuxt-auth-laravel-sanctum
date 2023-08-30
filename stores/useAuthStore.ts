import {defineStore} from "pinia"
import { useApiFetch } from "~/composables/useApiFetch"

type User = {
    id: number,
    name: string,
    email: string
}

type Credentials = {
    email: string,
    password: string,
}

export const useAuthStore = defineStore("auth", () => {
    const user = ref<User | null>(null)

    const isLoggedIn = computed(() => !!user.value)

    async function fetchUser() {
        const {data} = await useApiFetch("/api/user")
        user.value = data.value as User
    }

    async function login(credentials: Credentials) {
        await useApiFetch("/sanctum/csrf-cookie")       

        const login = await useApiFetch("/login", {            
            method: "POST",
            body: credentials,            
        })
        await fetchUser()

        return login
    }

    return {user, login, isLoggedIn, fetchUser}
})