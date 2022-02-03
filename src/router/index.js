import { h } from 'vue'

const NotFoundComponent = { template: '<p>Page not found</p>' }

const routes = {
    '/': 'Login',
    '/Principal': 'Principal'
}

const router = {
    data:()=>({
        currentRoute: window.location.pathname
    }),

    computed: {
        ViewComponent(){
            const matchingPage = routes[this.currentRoute] || NotFoundComponent
            return require(`../components/${matchingPage}.vue`).default
        }
    },

    render(){
        return h(this.ViewComponent)
    },

    created () {
        window.addEventListener('popstate', () => {
            this.currentRoute = window.location.pathname
        })
    }



}

export default router