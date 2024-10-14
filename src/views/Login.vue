<template>
    <div class="login">
        <h1>{{ isRegister ? 'Register' : 'Login' }}</h1>
        <form @submit.prevent="handleSubmit">
            <!-- Username input - only visible when isRegister is true -->
            <div class="form-group" v-if="isRegister">
                <label for="username">Username:</label>
                <input type="text" id="username" v-model="username" required />
            </div>

            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required />
            </div>

            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" required />
            </div>

            <button type="submit" class="submit-btn">
                {{ isRegister ? 'Register' : 'Login' }}
            </button>
        </form>

        <p class="toggle">
            {{ isRegister ? 'Already have an account?' : 'Don’t have an account yet?' }}
            <button @click="toggleForm">{{ isRegister ? 'Login' : 'Register here' }}</button>
        </p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const username = ref(''); // Add a ref for username
const isRegister = ref(false);

const store = useStore();
const router = useRouter();

const handleSubmit = async () => {
    const userModel = {
        email: email.value,
        password: password.value,
        ...(isRegister.value ? { username: username.value } : {}), // Add username if registering
    };

    console.log("User Model: ", userModel)

    if (isRegister.value) {
        await store.dispatch('user/createUser', userModel); // Send userModel directly
        if (store.state.user.createUser.status === 'loaded') {
            alert('Registration successful!');
            isRegister.value = false;
            username.value = ''; // Clear the username field
            email.value = ''; // Clear the email field
            password.value = ''; // Clear the password field
        } else {
            alert('Registration failed: ' + store.state.user.createUser.data);
        }
    } else {
        await store.dispatch('user/getUser', userModel); // Send userModel directly
        if (store.state.user.getUser.status === 'loaded') {
            alert('Login successful!');
            router.push('/home');
        } else {
            alert('Login failed: ' + store.state.user.getUser.data);
        }
    }
};

const toggleForm = () => {
    isRegister.value = !isRegister.value;
    if (!isRegister.value) {
        username.value = ''; // Clear username when switching to login
    }
};
</script>

<style scoped>
.login {
    max-width: 400px;
    margin: 0 auto;
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}

h1 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 1.5rem;
}

.form-group {
    margin-bottom: 1rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #555;
}

input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
}

input:focus {
    outline: none;
    border-color: #007bff;
}

.submit-btn {
    padding: 0.75rem 2rem;
    font-size: 1rem;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.submit-btn:hover {
    background-color: #0056b3;
}
</style>
