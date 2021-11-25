import App from './App.svelte'
import 'bulma/css/bulma.css'
import 'bulma-prefers-dark/css/bulma-prefers-dark.css'
import '@fortawesome/fontawesome-free/css/all.css'

const app = new App({
  target: document.getElementById('app')
})

export default app
