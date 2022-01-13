<script>
  import Router from 'svelte-spa-router'
  import routes from './routes'
</script>
<main>
  <Router {routes}/>
</main>
<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
/* 
  @layer components {
  .d {@apply bg-blue-500 text-white font-semibold; }
} */
</style>
