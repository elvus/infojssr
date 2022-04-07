<template>
    <section class="hero is-fullheight">
        <div class="hero-body has-text-centered">
            <div class="login">
                <img :src="logo"  width="175" height="auto"/>
                <br>
                <form @submit.prevent="onSubmit">
                    <div class="field">
                        <div class="control">
                            <input v-model="usuario" class="input is-medium is-rounded" type="text" placeholder="Usuario" autocomplete="username" required />
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <input v-model="password" class="input is-medium is-rounded" type="password" placeholder="**********" autocomplete="current-password" required />
                        </div>
                    </div>
                    <br />
                    <button class="button is-block is-fullwidth is-info is-medium is-rounded" type="submit">Ingresar</button>
                </form>
                <br>
                <div v-show="active" class="notification is-danger">
                    <button class="delete" @click="active = !active"></button>
                    ¡Usuario o contraseña invalidos!
                 </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    @import "~bulma/css/bulma.css";
    * {
        font-family: 'Nunito Sans', sans-serif;
    }

    :root {
    --shadowDark: #D9DDE6;
    --background: #E4E9F2;
    --shadowLight: #EFF5FE;
    }

    body {
    background: var(--background);
    }

    .hero-body {
    justify-content: center;
    }

    .login {
    border-radius: 25px;
    padding: 1.5rem;
    box-shadow: 8px 8px 15px var(--shadowDark), -8px -8px 15px var(--shadowLight);
    }

    input {
    background: var(--shadowDark) !important;
    }

    a {
    font-weight: 600;
    }
</style>

<script>
    import logo from '../assets/logo.png'
    export default {
        data:()=> ({
            usuario:"",
            password:"",
            logo: logo,
            active: false
        }),
        methods:{
            onSubmit(){
                if(this.usuario=="admin" && this.password=="admin"){
                    window.location.href='#/Principal'
                }
            }            
        }
    }
</script>
