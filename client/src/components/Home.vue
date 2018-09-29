<template >

<div class="container">
  <h1 class="title">Home</h1>
  <h2 class="subtitle">
        A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
  </h2>
  <div class="content">
    <div v-if="$apollo.loading">Loading</div>
    <ul v-else>
      <li v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
    
        <p>{{ post.description }}</p>
      </li>
    </ul>
  </div>
  
</div>


</template>

<script>
import { gql } from 'apollo-boost';

export default{
  name: 'home',
  data() {
    return {
      posts: [],
    }
  },
  apollo: {
    getPost: {
      query: gql`
      query {
        getPost {
          _id
          title
          imageUrl
          description

        }
      }
      `,
      result({data, loading}) {
        if(!loading){
          this.posts = data.getPost
        }
      }
    }
  }

}
</script>
