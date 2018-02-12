<template>
  <main class="page">
    <span class="code">404</span>
    <h1 class="exception">Not Found</h1>
    <p class="description">A página que você está procurando não existe ou está atualmente indisponível.</p>
    <a class="kolina" href="https://kolinalabs.com/servicos" target="_blank">&copy;Kolina Labs | 2017</a>
  </main>
</template>

<script>
  export default {
    computed: {
      getYear: () => new Date().getThisYear()
    }
  }
</script>

<style scoped>
  .page {
    background-color: #ffffff;
    display: block;
    min-height: 100vh;
    width: 100%;
  }

  .code {
    font-size: 5rem;
  }

  .exception {
    font-size: 1.5rem;
    font-weight: 400;
  }

  .description {
    max-width: 320px;
  }

  .kolina {
    color: inherit;
    font-style: italic;
    font-weight: 400;
    text-decoration: none;
  }
</style>
