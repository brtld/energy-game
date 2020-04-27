<template>
  <div>
    <h1>this is round {{ round }}</h1>
    <button @click="nextRound">Next Round</button>
    <h3>
      sun: {{ $store.state.weather.sun }}, wind: {{ $store.state.weather.wind }}
    </h3>
    <h3>fossil fuel left: {{ $store.state.fossilFuel }}</h3>

    <h2>Energy Production is: {{ $store.getters.totalEnergyProduction }}</h2>
    <button @click="addEnergyProduction">Energy Production</button>
    <!-- <input v-model.number="$store.state.payload" /> -->

    <h2>Energy Consumption is: {{ $store.getters.totalEnergyConsumption }}</h2>
    <button @click="addEnergyConsumption">Energy Consumption</button>
    <input v-model.number="this.energyConsumption" />
  </div>
</template>

<script>
// import { mapState } from "vuex";
export default {
  computed: {
    // ...mapState(["state"]),
    // payload() {
    //   return this.$store.state.payload;
    // },
    round() {
      return this.$store.state.round;
    },
    energyProduction() {
      return this.$store.getters.energyProduction;
    },
    energyConsumption() {
      return this.$store.state.total.energyConsumption;
    },
  },
  methods: {
    nextRound() {
      this.$store.dispatch("nextRound");
    },
    calcuteFossilFuel() {},

    addEnergyProduction() {
      this.$store.dispatch("addEnergyProduction", this.payload);
    },
    addEnergyConsumption() {
      this.$store.dispatch("addEnergyConsumption", this.payload);
    },
  },
};
</script>

<style>
.upgrade {
  display: inline-block;
  /* padding: 10px; */
  width: 25%;
  padding: 20px 0px;
}
</style>
