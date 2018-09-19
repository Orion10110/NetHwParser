<template>
  <div class="network-form__wrapper">
    <div class="network-form">
      <div>
        <img src="../assets/logo.png">
      </div>
      <md-field>
        <label>Cost</label>
        <md-input type="number" v-model="info.cost"></md-input>
      </md-field>
      <md-field>
        <label>Count of port</label>
        <md-input type="number" v-model="info.port"></md-input>
      </md-field>
      <md-field>
        <label for="speed">Network capacity</label>
        <md-select v-model="info.speed" name="speed" id="speed">
          <md-option value="100m">100 MBit</md-option>
          <md-option value="1g">1 GBit</md-option>
          <md-option value="10g">10 GBit</md-option>
        </md-select>
      </md-field>
      <md-button @click="getHardware" class="md-raised md-primary">Find</md-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: function () {
    return {
      info: {
        cost: null,
        port: null,
        speed: '100m'
      }
    }
  },
  methods: {
    getHardware: function () {
      axios.get('http://localhost:8000/router', {params: this.info})
        .then((resp) => this.success(resp))
    },
    success: function (resp) {
      console.log(resp)
    }
  }
}
</script>
