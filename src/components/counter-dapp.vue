<template>
  <div>
 <hello-metamask/>
 <counter-component/>
</div>
</template>
<script>
import HelloMetamask from '@/components/hello-metamask'
import CounterComponent from '@/components/counter-component'
export default {
  name: 'counter-dapp',
  beforeCreate () {
    console.log('registerWeb3 Action dispatched from counter-dapp.vue')
    this.$store.dispatch('registerWeb3')
  },
  components: {
    'hello-metamask': HelloMetamask,
    'counter-component': CounterComponent
  }
}
</script>
<style scoped>
</style>
