<template>
  <div class="card">
    <router-link :to="{ name: 'userdetails', params: { userId: userName }}"><img class="user-avatar" :src="imgUrl"/></router-link>
    <h3><router-link :to="{ name: 'userdetails', params: { userId: userName }}">{{userName}}</router-link></h3>
    <a :href="userGitUrl" target="_blank">github</a>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    msg: String,
    imgUrl: {
      type: String,
      default: 'https://www.shutterstock.com/search/male-avatar-link'
    },
    userName: {
      type: String,
      default: ''
    },
    userGitUrl: {
      type: String,
      default: 'https://github.com/'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  display: inline-block;
  text-align: center;
  padding: 20px;
}
.user-avatar:hover {
  transform: scale(1.2);
}
.user-avatar {
  width: 300px;
  length: 300px;
  border-radius: 50%;
}
</style>
