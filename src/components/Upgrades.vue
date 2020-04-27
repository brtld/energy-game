<template>
  <div class="upgrades">
    <h3>Upgrades</h3>
    <div class="upgrades">
      <div v-for="(upgrade, index) in upgrades" :key="index" class="upgrade">
        <h3>{{ upgrade.name }} {{ upgrade.level }} / 6</h3>
        <button @click="addUpgrade(index, upgrade.level, { upgrade })">
          add more {{ upgrade.name }}
        </button>
        <!-- {{ upgrade }} -->
        <div class="details">
          <div class="consumption">
            energyConsumption: {{ upgrade.energyConsumption }}
          </div>
          <div class="production">
            energyProduction: {{ upgrade.energyProduction }}
          </div>
          <div class="level">level: {{ upgrade.level }}</div>
          <p>efficiency: {{ upgrade.efficiency }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState([
    // map this.count to store.state.count
    "upgrades",
    "state",
    "level",
  ]),
  methods: {
    // addUpgrade(state, upgrade, index) {
    //   state.upgrades[index].level++;
    // },
    // addUpgrade: (event, index) => {
    //   this.store.dispatch("addUpgrade", index);
    // },
    addUpgrade(index, level) {
      this.$store.dispatch("addUpgrade", { index, level });
      // console.log(upgrades[index].level);
    },

    buyUpgrade(index) {
      // console.log(event); // shows that event is a MouseEvent

      this.$store.commit("buyUpgrade", {
        index,
      });
    },
    // buyUpgrade: (state, { index, amount }) => {
    //   if (state.bytes >= state.upgrades[index].cost) {
    //     state.bytes -= state.upgrades[index].cost;
    //     state.upgrades[index].level += amount;
    //   }
    // },
  },
};
</script>

<style></style>
