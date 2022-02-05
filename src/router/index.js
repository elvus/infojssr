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
            if(routes[this.currentRoute]!=="Login"){
                if (this.$cookies.isKey("auth-token")){
                    const matchingPage = routes[this.currentRoute] || NotFoundComponent
                    return require(`../components/${matchingPage}.vue`).default
                }
            }else{
                this.$cookies.remove("auth-token")
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
            this.currentRoute = window.location.pathname
        })
    }



}

export default router