<template>
  <div class="network-form__wrapper">
    <div class="network-form">
      <div>
        <img src="../assets/logo.png">
      </div>
      <md-field>
        <label>Cost</label>
        <md-input type="number" v-model="cost"></md-input>
      </md-field>
      <md-field>
        <label>Count of port</label>
        <md-input type="number" v-model="port"></md-input>
      </md-field>
      <md-field>
        <label for="speed">Network capacity</label>
        <md-select v-model="speed" name="speed" id="speed">
          <md-option value="100">100 MBit</md-option>
          <md-option value="1000">1 GBit</md-option>
          <md-option value="10000">10 GBit</md-option>
        </md-select>
      </md-field>
      <md-button @click="getHardware" class="md-raised md-primary">Find</md-button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cost: {
      get () {
        return this.$store.state.cost
      },
      set (value) {
        this.$store.commit('setCost', value)
      }
    },
    speed: {
      get () {
        return this.$store.state.speed
      },
      set (value) {
        this.$store.commit('setSpeed', value)
      }
    },
    port: {
      get () {
        return this.$store.state.port
      },
      set (value) {
        this.$store.commit('setPort', value)
      }
    }
  },
  methods: {
    getHardware () {
      this.$router.push({name: 'Hardware', params: { c: this.cost, p: this.port, s: this.speed }})
    }
  }
}
</script>
