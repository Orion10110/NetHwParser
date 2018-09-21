<template>
  <div class="network-form__wrapper">
    <div class="network-form">
      <div>
        <img src="../assets/logo.png">
      </div>
      <md-progress-spinner v-if="loading" md-mode="indeterminate"></md-progress-spinner>
      <template v-if="items">
        <div class="hardware">
          <md-list class="md-triple-line hardware__list" >
            <template v-for="(item, key) in items" >
              <md-list-item :key="key">
                <md-avatar>
                  <img :src="item.image">
                </md-avatar>

                <div class="md-list-item-text hardware-item__wrapper">
                  <div class="hardware-item__info">
                    <span>{{item.name}}</span>
                    <span>Price: {{item.price}}</span>
                    <p>Count: {{item.count}}</p>
                  </div>
                  <div>
                    <span class="hardware-item__total">Total: {{item.price * item.count}}</span>
                  </div>
                </div>
              </md-list-item>
              <md-divider class="md-inset" :key="`${key}1`"></md-divider>
            </template>
          </md-list>
          <div class="hardware__tabs">
            <md-tabs md-sync-route>
              <md-tab id="tab-home" md-label="Routers">
                <routers></routers>
              </md-tab>

              <md-tab id="tab-pages" md-label="Switches">
                <switches></switches>
              </md-tab>

              <md-tab id="tab-posts" md-label="Cables">
                <cables></cables>
              </md-tab>
            </md-tabs>
          </div>
        </div>
        <div>Desired price:<span class="harware__cost">{{cost}}</span>  - Total Price: <span class="harware__total">{{total}}</span> </div>
      </template>
    </div>
  </div>
</template>

<script>
import Cables from './lists/Cables'
import Routers from './lists/Routers'
import Switches from './lists/Switches'

export default {
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.$store.dispatch('getInfo')
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  computed: {
    loading: function () {
      return this.$store.state.loading
    },
    items: function () {
      return this.$store.state.items
    },
    cost: function () {
      return this.$store.state.cost
    },
    total: function () {
      return this.$store.getters.total
    }
  },
  components: {
    Switches,
    Routers,
    Cables
  }
}
</script>
