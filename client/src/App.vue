<template>
  <div id="#app">



<nav class="navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
  
  <div class="container">
    
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        TRUE FALSE
      </router-link>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item">
          <div class="field">
            <div class="control has-icons-left">
                <input class="input is-rounded" type="text" placeholder="Search">
                <span class="icon is-small is-left">
                  <i class="fas fa-search"></i>
                </span>
            </div>
          </div>
        </div>
        <a class="navbar-item" v-for="item in menu" :key='item.title' :href="item.link">
          {{ item.title }}
        
        </a>
      </div> 

      <div class="navbar-end">
        <div class="navbar-item" v-for="item in horhorizontalMenuItems" :key='item.title'>
            <p class="control" >
              <a class="button" :href="item.link" :class="item.btnStyle">
                <span>{{ item.title }}</span>
              </a>
            </p>

        </div>
      </div>
    </div>
  </div>
</nav>
  <!-- App contetnt -->
    <main class="container">
      <section class="section">
        <router-view/>
      </section>
    </main>
  </div>


  
</template>

<script>

  export default {
    name: 'App',
    data() {
      return {
        menu: [
          { icon: 'fa-comments', title: 'Posts', link: '/posts', btnStyle: ''},
          { icon: 'fa-comments', title: 'People', link: '/people', btnStyle: ''},

        ]
      };
    },
    computed: {
      horhorizontalMenuItems() {
        return [
          { icon: 'fa-sign-in-alt', title: 'Sign In', link: '/signin', btnStyle: 'is-primary is-inverted'},
          { icon: 'fa-user-plus', title: 'Sign Up', link: '/signup', btnStyle: 'is-primary is-outlined'},
        ]
      }
    }
  }
</script>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary:  #087F8C; // #3BCEAC;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);
$maincolor: #087F8C;
$maincolor-invert: findColorInvert($maincolor);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert),
    "maincolor": ($maincolor, $maincolor-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

</style>


