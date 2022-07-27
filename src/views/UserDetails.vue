<template>
  <div class="user-details-conatiner">
  <router-link to="/"><img class="back-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATkAAAB/CAMAAACjSUUGAAAAYFBMVEX39/czMzP////7+/spKSnu7u6qqqomJiYwMDBBQUHT09OgoKDe3t48PDwAAAAsLCwfHx9TU1MWFhbn5+dpaWnCwsIQEBDLy8tGRkZycnJkZGSxsbGJiYmVlZVeXl5+fn5gLiAuAAAEVUlEQVR4nO2dCXabMBBAkUaAbDACHDZj7PvfspC0fQ64KbhSNUzmH8BEP1pG2ygIGIZhGIZhGIZhGIZhtgGe8V3+1wApg9AvgZT7kzf+zdW9jf3Sdkk4/v/2BMDxLctyLfyi4zIr+nA/FQ/gfM1i39p+YrLiGOxEHYSVKn0Le0DV1/Mu1EE4aOPb1id03qU76O1GcQaXuJH4kqKvdRAkCkkP90h8Qd9gZYNRnBD54NvMX4DwFvuW9BSdH3F3dTLKfDv6A6pF3Vwh0Cjb6kRWYa50ssda5cZKV6A294azl3unDPG2VwDvU9UvqBE3V9nUvvV8QdwhNhflvvV8gT4gNtezudeQJ8TdnNACbzAsD2zuNeyYM0pZ+JUlxM3puCwut9pFf0nbnI67/pim/b20v8ZH2pxWSQgSQIbRybo60ubK5OfuMgSD9QZL2VyW/C6aTC+2p8B0zekyeSiZTGw3V7LmjHoUN85HbIfVVM0ZkXxaBGJzKxnFfd6Jl5FgcytYiIPwbnsmQdKcjmfiAllZXz0gaa5OZqcE5dl6UELSXDbMigThzf7MlZ65z3HcBJwLB4ehyJkzei5Ohi7EkTM3j+OmPu7m5PgdMXNGRPNRNX1zs5tBy9wijpvEOdrtJmXuSRznTBwtc9k8joOzu/MVlMxli3DERRz3CzrmdL4UV9R6C5vOh5Ixt4zjAtkPySYu7QZ3VMwtR9XpBzYSVN36tSgi5vTpibgXvrhhRCFiLr7bOQcoq3btN2mY062tY4DQra10NMyZwtalGLl67ZjNzb55X7u7yOZm3/x2dc5WKeQ36+eEGezkJ5Dp7Xu11rHSNTbMAQzfLRIWqjgu1W1MqjFOIqINwTcRcyJuFwWBY7qN5L7hmB0Zc0Lp+R1x2dSnTWiz4YN0zAmTnRfqSrVllWnL1yiZE6acR3WyEs6SAFAyJ8xpPkzI6uDmTD8xcyJejLBQHRzVOlrmnqhz1mCJmXta69zckqVm7klcJ5vMhTpy5oRSy+DEhTp65sa4bhkS53x7aQ0m/x9xHUVzQi3juohPu65CzRedIH3js+mriOfqZMJn09cxj+v4Ds5qZnGd7PkOzlqUeYzr2NwGHuM6CFfvaa2FsDlhzO+4zn6VI21OqMPxY2sGGvu5E0mbE6qNprzJadTaPy5M25wwcXEdhpuDaSt1c9MkNs+dLKiTN+cM1OY4F9iLyAFxmk3c+edw5zw8ITbXY3rdYI654TUHId50wkIsrvxgQrraZbZBhneAmJYj8abFNS1icQGc8TbXep6gAheyQzu6Zr7dfA2cS6TBcBbhzZr+DvQ4U6fHF+xPV0F4x9he4wPmgfUDONrPqPTPqFPv28sKZOomUcs/EIsee1t9R6bXGlVfVxbNLsRNKW0jg6faqfqa7uZNSICwy1C8CWnq7NDsxtsESKg6rbzT7u4B148ng5vIL80uHw0O3uV5Zq8vVTMMwzAMwzAMwzAM44sfRrdzOhE0m/gAAAAASUVORK5CYII="/></router-link>
  <div class="user-details">
    <div>
    <img class="user-img" :src="getRepoList[0]?.owner.avatar_url ? getRepoList[0]?.owner.avatar_url : 'https://www.shutterstock.com/search/male-avatar-link'"/>
    <h1>{{this.$route.params.userId}}</h1>
    </div>
  </div>
  <table>
  <tr :key="repo.id" v-for="repo in getRepoList">
    <td><a :href="repo.html_url" target="_blank">{{repo.name}}</a></td>
    <td><span><img class="ico" src="data:image/png;base64,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"/></span>{{repo.stargazers_count}}</td>
    <td><span><img class="ico" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAY1BMVEX///8AAAD8/Pzv7+8EBATp6enExMTm5uZbW1v09PTBwcHs7OzHx8dvb287OzuhoaE2Njavr6+pqakODg61tbVmZmaBgYHZ2dl2dnYvLy/S0tJHR0dOTk4YGBiKioohISEoKCghKOiYAAAC/0lEQVR4nO2ai46rIBBABXXVvnxr1W7b///KxWpbH9CKDnCTOyfZTTZr5NSBYZhqWQiCIAiCIAiC/FfQ1y9TAsYNGHUY1uZGZx/eiwgj8sxJ2A150NjGFGLiMAH2ExubDxfS0xgSsDzywtRsSN4KiSEF/63gmzEIyIDAiEI8VIhNGNB8qJCbWJVuOlRIXQMKGRmRGchO+Vgh1y5gufexwl1/JCZxaCOhm3yqoD0SdGpAiO7puJsr7DQrnOcKZ70GnDjojsSBp3DQKECtgqdQaFSw7IinEOmsYmOeQbdj65gQbIyy4itUpaajlZ3wBdpqPgGNRcCdcmspVlR2+0b8WdfQ7KUVzqsHE3hLJ0/vF278jl/Z4w43/W1DNnnW8AqyfYi9YOmvp5KejyG0QihrAO4gb8Dy7A9gLKof+WfQ9tLcWYm6lty15HeP7nrRbiBJMrilNPXl+wAfYWnxsqkrSC1782ZV2Js38NmxSQ6AQxa1XP/7QCJ8F6CGYUuDrk4RIe3b1NtZkSKcdclAjH2ULB/YxUfoglpQNItRcNgvRZUc9xk0JbwBq2clVoYfqKnmg+WzYXs6EnBdanBVM74lsWup64r/AwrHpQrKWl/2UoN2OqqB0+ISoar1dVyeo49qDNzFe5VDKjXt4J3MTqUmEovXg7JI2FI1Q6ViTfzIGBACWq70cFq+n1DRDk6/DzskhTeQ7nnAt4P5G/WtyLLixv0XeDs4OPGG8R/lWcktpyLoL3DraV5q/wr70oh/0IB+wWR6tHS6du+TMpqnTuBIBPPy+TxKPvZ8zTawkZg04BzO9+Tx7DnARuI6uf3Jm5bI1PKmMxa0iKWTu1+5JTodLVyHnCAL+fp9X/Y0UmHWOaT9JfCReLU5HHZ73xP0jdp3rfzumg7IY+WwakzanoNAgY4Lfci6Jbg/H0H09bj6SBGPB3EDrRmSfimeFzSS98+vMoAPNF0KXvjSTNeLWNF0/kwQh9niRUazMDPzmpFi5NIMNf4uKIIgCIIgCIIgyvgDExQdRUiCylUAAAAASUVORK5CYII="/></span>{{repo.watchers}}</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>

</table>
  </div>
</template>
<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'UserDetails',
  beforeMount () {
    this.getUserDetails(this.$route.params.userId)
    console.log('use list invoked')
  },
  props: {
    userName: {
      type: String,
      default: ''
    },
    imgUrl: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapGetters('UserDetailsModule', ['getRepoList'])
  },
  methods: {
    ...mapActions('UserDetailsModule', [
      'getUserDetails'
    ])
  }
}
</script>
<style>
.col {
  display: inline-block;
}
.repo-container {
  display:flex;
  justify-content:space-around;
}
.user-img {
  height:300px;
  width:300px;
  border-radius:50%;
}
.ico {
  width: 15px;
  length:15px;
}
.user-details {
  display:flex;
  justify-content:space-around;
}
h1 {
  text-align: center
}
table {
  width: 100%
}
.user-details-conatiner {
  margin:60px;
}
.back-icon {
  width: 100px;
  length:150px;
}
</style>
