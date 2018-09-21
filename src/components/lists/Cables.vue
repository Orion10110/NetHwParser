<template>
  <md-list class="md-triple-line" >
    <template v-for="(item, key) in items" >
      <md-list-item @click="choose(item)" :key="key">
        <md-avatar>
          <img :src="item.image">
        </md-avatar>
        <div class="md-list-item-text">
          <span>{{item.name}}</span>
          <span>Price: {{item.price}}</span>
        </div>
      </md-list-item>
      <md-divider class="md-inset" :key="`${key}1`"></md-divider>
    </template>
  </md-list>
</template>

<script>
export default {
  methods: {
    choose: function (item) {
      this.$store.commit('chooseCable', item)
    }
  },
  computed: {
    items: function () {
      return [
        {
          img: 'https://placeimg.com/40/40/people/2',
          name: 'Cable 1',
          price: 100
        },
        {
          img: 'https://placeimg.com/40/40/people/1',
          name: 'Cable 2',
          price: 12
        },
        {
          img: 'https://placeimg.com/40/40/people/3',
          name: 'Cable 3',
          price: 13
        }
      ]
    }
  }
}
</script>
