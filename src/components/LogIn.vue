<template>
    <div class="whole-page">

        <div class="container login-page">
            <form @submit="login()" class="bg-white rounded p-3">
                <h3 class="text-center mt-4 mb-4" style="text-decoration: underline; text-decoration-color: #198754">Welcome
                    To Login Page</h3>
                <div class="mb-3">
                    <label for="email" class="form-label fs-6">Email address:</label>
                    <input v-model="email" type="email" class="form-control" id="email" aria-describedby="emailHelp"
                        placeholder="Enter your email address" required>
                    <small id="emailvalid" class="form-text fs-6">
                        Your email must consist of all the necessary characters and should not contain any errors
                    </small>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label fs-6">Password:</label>
                    <input v-model="password" type="password" class="form-control" id="passwordInput"
                        placeholder="Enter your password">
                    <span><i id="togglePassword" class="far fa-eye ms-2 mt-2"></i></span>
                </div>
                <div class="login-btns">
                    <input class="btn btn-success ps-3 pe-3" type="submit" value="Log in" />
                    <input class="btn btn-success ps-3 pe-3" type="submit" value="Sign up" />
                </div>
            </form>
        </div>

    </div>
</template>

<script>
export default {
    name: 'LogIn',
    data() {
        return {
            email: null,
            password: null
        }
    },
    methods: {
        login(e) {
            e.preventDefault();
            const body = {
                email: this.email,
                password: this.password,
            }
            fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({

                    username: 'kminchelle',
                    password: '0lelplR',
                    // expiresInMins: 60, // optional
                })
            })
            .then(res => res.json())
            .then(console.log);
        }
    },
}
</script>

<style scoped>
.whole-page {
    background-color: #f0f2f5;
}

/* -Login Page- */

.login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
}

/* Login buttons */

.login-btns {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

/* Eyeicon */

#togglePassword {
    cursor: pointer;
}
</style>