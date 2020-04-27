<template>
  <div class="general">
    <h1>{{ $store.getters.getEnergyConsumption }}</h1>
    <h3>Fossil Fuel left: {{ $store.state.total.fossilFuel }}</h3>
    <h3>Energy Consumption: {{ $store.state.total.energyConsumption }}</h3>
    <h3>Energy Production: {{ $store.getters.getEnergyProduction }}</h3>
    this is the general counter
    {{ $store.state.counter }}
    <button @click="$store.commit('decrement')">-</button> Round: {{ round }}
    <button @click="$store.commit('nextRound', 'changeWeather')">Add</button>
    <button @click="$store.commit('changeWeather')">changeWeather</button>

    {{ weather }}
    <!-- <button @click="decrement">-</button> -->
    <!-- <div v-for="(upgrade, index) in upgrades" :key="index" class="upgrade">
         {{upgrades[index]}}
      </div> -->

    <div class="upgrades">
      <div v-for="(upgrade, index) in upgrades" :key="index" class="upgrade">
        <h3>{{ upgrade.name }}</h3>
        <button
          :class="`button ${upgrade.disabled ? 'disabled' : ''}`"
          @click="buyUpgrade($event, index)"
        >
          <!-- {{ upgrade }} -->
          {{ upgrade.amount }}
          {{ upgrade.disabled ? `(lvl: ${upgrade.unlocksAt})` : "" }}
        </button>
        <div class="details">
          <div class="cost">
            energyConsumption: {{ upgrade.energyConsumption }}
          </div>
          <div class="quantity">
            energyProduction: {{ upgrade.energyProduction }}
          </div>
          <p>efficiency: {{ upgrade.efficiency }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "General",
  computed: {
    getEnergyProduction() {
      return this.$store.getters.getEnergyProduction;
    },
    ...mapState(["round", "counter", "weather", "total", "upgrades"]),
  },
  methods: {
    buyUpgrade(event, index) {
      // console.log(event); // shows that event is a MouseEvent
      if (event.screenX > 0) {
        this.$store.commit("buyUpgrade", {
          index,
          amount: 1,
        });
      }
    },
  },
  // arrow functions can make the code very succinct!
  //  round: state => state.round,

  //  counter: state => state.counter

  // passing the string value 'count' is same as `state => state.count`
  //  countAlias: 'count',

  // to access local state with `this`, a normal function must be used
  //  countPlusLocalState (state) {
  //    return state.count + this.localCount
  //  }
  //   }),
  // computed: {
  //    round () {
  //    return this.$store.state.round

  //    }
  // },
  // methods: {
  // nextRound: state => state.round++,
  // decrement (state) {
  //    state.round++
  // }
  // },
};
</script>

<style></style>
