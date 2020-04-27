import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    round: 0,
    maxLevel: 6,
    weather: {
      sun: 7,
      wind: 3,
    },
    fossilFuel: 1500,
    solarEnergy: 0.5,
    windEnergy: 0.5,
    // payload: 10,
    total: {
      energyProduction: 0,
      energyConsumption: 0,
    },
    totalEnergy: 0,
    upgrades: {
      batteries: {
        name: "Batteries",
        level: 0,
        energyConsumption: 0,
        capacity: 8,
        totalCapacity: 0,
      },
      solarpanels: {
        name: "Solar Panels",
        energyProduction: 4,
        level: 0,
        efficiency: 1.6,
        yield: 0,
        nightTime: true,
      },
      windTurbines: {
        name: "Wind Turbines",
        energyProduction: 3,
        level: 0,
        efficiency: 1.3,
        yield: 0,
      },
      homeAppliances: {
        name: "Home Appliances",
        level: 0,
        energyConsumption: 12,
        efficiency: 1.15,
      },
      heatpumps: {
        name: "Heating",
        level: 0,
        energyConsumption: 18,
      },
      smartGrids: {
        name: "Smart Grid",
        level: 0,
        efficiency: 1.5,
        smartGridEfficiency: 0,
      },
      vehicles: {
        name: "Vehicles",
        level: 0,
        totalVehicles: 0, //Should this be a computed(getters) prop?
        // energyConsumption: 12,
        petrolVehicles: {
          amount: 6,
          fossilFuelConsumption: 5,
          sustainableEnergyConsumption: 0,
        },
        electricVehicles: {
          amount: 0,
          fossilFuelConsumption: 0,
          sustainableEnergyConsumption: 4,
        },
        hybridVehicles: {
          amount: 0,
          fossilFuelConsumption: 2,
          sustainableEnergyConsumption: 2,
        },
      },
    },
  },

  //--------- MUTATIONS
  mutations: {
    NEXT_ROUND(state) {
      state.round++;
    },
    CHANGE_WEATHER(state) {
      state.weather.wind = Math.floor(Math.random() * 10);
      state.weather.sun = Math.ceil(Math.random() * 10);
    },
    CALCULATE_FOSSIL_FUEL(state, payload) {
      state.fossilFuel += payload;
    },
    FOO_MUTATION(state, { data, getters }) {
      console.log(getters);
      console.log(data);
    },
    ADD_ENERGY_PRODUCTION(state, payload) {
      state.total.energyProduction += payload;
    },
    ADD_ENERGY_CONSUMPTION(state, payload) {
      state.total.energyConsumption += payload;
    },
    ADD_UPGRADE: (state, { index }) => {
      state.upgrades[index].level++;
    },
  },

  //--------- ACTIONS
  actions: {
    nextRound(context) {
      // store.dispatch("NEXT_ROUND");
      context.commit("NEXT_ROUND");
      context.commit("CHANGE_WEATHER");
      context.dispatch("calculateFossiFuel");
    },

    calculateFossiFuel(context, payload) {
      payload = context.getters.totalEnergy;
      context.commit("CALCULATE_FOSSIL_FUEL", payload);
    },
    addEnergyProduction(context, payload) {
      console.log(payload);
      context.commit("ADD_ENERGY_PRODUCTION", payload);
    },
    addEnergyConsumption(context, payload) {
      context.commit("ADD_ENERGY_CONSUMPTION", payload);
    },
    addUpgrade(context, { index, level }) {
      context.commit("ADD_UPGRADE", { index, level });
    },
  },

  //--------- GETTERS
  getters: {
    totalEnergyConsumption: (state, getters) => {
      return (state.total.energyConsumption =
        getters.heatpumpsConsumption +
        getters.homeAppliancesConsumption +
        getters.vehiclesConsumption);
      // state.upgrades.homeAppliances.energyConsumption *
      //   state.upgrades.homeAppliances.level +
      // state.upgrades.heatpumps.energyConsumption *
      //   state.upgrades.heatpumps.level +
      // state.upgrades.vehicles.energyConsumption *
      //   state.upgrades.vehicles.level);
    },
    totalEnergyProduction: (state, getters) => {
      return (state.total.energyProduction =
        getters.solarEnergy +
        getters.windEnergy *
          (state.upgrades.smartGrids.efficiency *
            state.upgrades.smartGrids.level +
            1));
    },
    totalEnergy: (state, getters) => {
      return (state.totalEnergy =
        getters.totalEnergyProduction - getters.totalEnergyConsumption);
    },
    solarEnergy: (state) => {
      return (
        state.upgrades.solarpanels.energyProduction *
        state.upgrades.solarpanels.level *
        state.weather.sun
      );
    },
    windEnergy: (state) => {
      return (
        state.upgrades.windTurbines.energyProduction *
        state.upgrades.windTurbines.level *
        state.weather.wind
      );
    },
    heatpumpsConsumption: (state) => {
      return (
        state.upgrades.heatpumps.energyConsumption *
        (state.maxLevel - state.upgrades.heatpumps.level + 2)
      );
    },
    homeAppliancesConsumption: (state) => {
      return (
        state.upgrades.homeAppliances.energyConsumption *
        (state.maxLevel - state.upgrades.homeAppliances.level + 2)
      );
    },
    vehiclesConsumption: (state) => {
      return (
        state.upgrades.vehicles.electricVehicles.sustainableEnergyConsumption *
        (state.maxLevel - state.upgrades.vehicles.level)
      );
    },
    batteriesCapacity: (state) => {
      return state.upgrades.batteries.capacity * state.upgrades.batteries.level;
    },
  },
  modules: {},
});
