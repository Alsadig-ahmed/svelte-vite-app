import Home from './routes/Home.svelte';
// import Author from './routes/Author.svelte'
import About from './routes/About.svelte'
import NotFound from './routes/NotFound.svelte'

export default {
    // Exact path
    '/': Home,
    '/about':About,

    // Using named parameters, with last being optional
    // '/author/:first/:last?': Author,

    // Wildcard parameter
    // '/book/*': Book,
    '*': NotFound,
}
