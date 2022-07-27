<template>
  <div class="userlist">
  <div>
  <UserCard :key="user.id" v-for="user in userList"
    :userName="user.login"
    :imgUrl="user.avatar_url ? user.avatar_url : 'https://www.shutterstock.com/search/male-avatar-link'"
    :userGitUrl="user.html_url"
    />
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import UserCard from '@/components/UserCard.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'UserList',
  components: {
    UserCard
  },
  beforeMount () {
    this.getUserList()
    console.log('use list invoked')
  },
  computed: {
    ...mapGetters('UserListModule', ['userList'])
  },
  methods: {
    ...mapActions('UserListModule', [
      'getUserList'
    ])
  }
}
</script>
<style>
.userlist {
  display: flex;
}
</style>
