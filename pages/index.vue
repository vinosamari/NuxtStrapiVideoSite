<template>
  <div class="container">
    <div>
      <h1 class="title">
        <strong>WELCOME TO </strong>
        Nuxt Video Central
      </h1>
      <div class="links">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          All Videos
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Featured Videos
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Categories
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
body{
  background-color: #274060;
  color: aliceblue;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links a {
  color: aliceblue;
}

.links {
  padding-top: 15px;
}
</style>
