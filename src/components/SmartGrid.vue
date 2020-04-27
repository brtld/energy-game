<template>
  <div class="smart-grid">
    test
    <header class="">
      <h2>Smart Grid {{ smartGrid.amount }}/ 6</h2>
    </header>
    <p>efficiency of smart grid control: {{ smartGrid.smartGridEfficiency }}</p>

    <footer class="">
      <div v-if="smartGrid.amount < 6">
        <button @click="addSmartGrid">Add Smart Grid</button>
        <!-- <button @click="buyUpgrade($event, index)"> Add SmartGrid Grid</button> -->
      </div>
      <div v-else>
        <h3>Already maxed out!</h3>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SmartGrid",
  computed: mapState({
    smartGrid: (state) => state.upgrades.smartGrid,
    upgrades: (state) => state.upgrades,
  }),
  methods: {
    addSmartGrid: function() {
      this.smartGrid.amount++;
      // this.smartGrid.smartGridEfficiency =  this.smartGrid.amount * this.smartGrid.efficiency
    },
  },
};
</script>

<style></style>
