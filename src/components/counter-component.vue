<template>
  <div class="counter-container">
    <h1>GoChain Dapp Demo</h1>
    <h4>Move the Number Up or Down</h4>
    Decentralized Count: <input v-model="number" placeholder="">
    <ul>
      <li v-on:click="countLower">-</li>
      <li v-on:click="countHigher">+</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'counter',
  data () {
    return {
      amount: null,
      number: 0
    }
  },
  methods: {
    countLower (event) {
      console.log('increase the number!')
      this.$store.state.contractInstance().down({
        gas: 300000,
        // value: this.$store.state.web3.web3Instance().toWei(this.amount, 'ether'),
        from: this.$store.state.web3.coinbase
      }, (err, result) => {
        if (err) {
          console.log(err)
        } else {
          this.updateTotal()
        }
      })
    },
    countHigher (event) {
      console.log('increase the number!')
      this.$store.state.contractInstance().up({
        gas: 300000,
        // value: this.$store.state.web3.web3Instance().toWei(this.amount, 'ether'),
        from: this.$store.state.web3.coinbase
      }, (err, result) => {
        if (err) {
          console.log(err)
        } else {
          this.updateTotal()
        }
      })
    },
    updateTotal (event) {
      console.log('update total')
      this.$store.state.contractInstance().getTotal({}, (err, result) => {
        if (err) {
          console.log(err)
        } else {
          this.number = result
        }
      })
    }
  },
  mounted () {
    console.log('dispatching getContractInstance')
    this.$store.dispatch('getContractInstance')
    this.updateTotal()
  }
}
</script>

<style scoped>
.counter-container {
  background: #fff;
  color: #000;
  border-radius: 8px;
  padding: 1rem 2rem;
  margin-top: 2rem;
}
ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 2rem auto;
}
li{
    padding: 1rem 2rem;
    border-radius: 1rem;
    cursor: pointer;
    background-color: #adadad;
    color: #3a3a3a;
}
li:hover{
    background-color: #525252;
    color: #b1b1b1;
}
li:active{
    opacity: 0.7;
}
*{
   color: #444444;
}
#has-won {
  color: green;
}
#has-lost {
  color:red;
}
</style>
