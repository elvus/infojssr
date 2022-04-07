import { h } from 'vue'

const NotFoundComponent = { template: '<p>Page not found</p>' }

const routes = {
    '/': 'Login',
    '#/Principal': 'Principal',
    '/index.html': 'Login'
}

const router = {
    data:()=>({
        currentRoute: window.location.pathname
    }),

    computed: {
        ViewComponent(){            
            if(routes[this.currentRoute]!=="Login"){
                const matchingPage = routes[this.currentRoute] || NotFoundComponent
                return require(`../components/${matchingPage}.vue`).default
            }else{
                const matchingPage = routes[this.currentRoute] || NotFoundComponent
                return require(`../components/${matchingPage}.vue`).default
            }
        }
    },

    render(){
        return h(this.ViewComponent)
    },

    created () {
        window.addEventListener('popstate', () => {
            this.currentRoute = window.location.hash
        })
    }



}

export default router