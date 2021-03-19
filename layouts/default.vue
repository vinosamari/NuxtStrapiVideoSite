<template>
  <div>
    <div id="navbar">
      <div class="navbarLinks">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/videos">Videos</nuxt-link>
      </div>
    </div>
    <div class="defaultBody">
      <Nuxt />
    </div>
  </div>
</template>

<style>
#navbar {
  display: flex;
  height: 7vh;
  width: 100%;
  background-color: #1b2845;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

#navbar a{
  color: #fff;
  text-decoration: none;
  margin: 20px 40px;
  background-color: #65afff;
  padding: 0.5rem 1rem;
  border-radius: 20%;
  text-transform: uppercase;
  letter-spacing: .2rem;
  font-weight: 700;
}

.defaultBody {
  margin: auto;
  max-width: 800px;
}

.navbarLinks {
  margin: 20px auto;
  max-width: 800px;
}

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
