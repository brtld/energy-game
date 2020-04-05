import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    round: 0,
    counter: 0,

    weather: {
      sun: 0.5,
      wind: 0.3,
    },
    total: {
      fossilFuel: 0,
      petrolConsumption: 10,
      energyConsumption: 0,
      storage: 0,
      energyProduction: 5
    },
    smartGrid: {
      amount: 0,
      efficiency: 1.5,
      smartGridEfficiency: 0
    },
    batteries: {
      amount: 0,
      energyConsumption: 1,
      capacity: 2,
      totalCapacity: 0,
    }, 
    upgrades: {
      batteries: {
        name: "Batteries",
        amount: 0,
        energyConsumption: 1,
        capacity: 2,
        totalCapacity: 0,
      },
      solarpanels: {
        name: "Solar Panels",
        amount: 0,
        efficiency: 1.6,
        yield: 0,
        nightTime: true,
        
      },
      windTurbines:  {
        name: "Wind Turbines",
        amount: 0,
        efficiency: 1.3,
        yield: 0,  
      },
      homeAppliances: {
        name: "Home Appliances",
        energyConsumption: 12,
        amount: 0,
        efficiency: 1.15,
      },
      heating: {
        name: "Heating",
        amount: 0,
        energyConsumption: 18,
      },
      smartGrid: {
        name: "Smart Grid",
        amount: 0,
        efficiency: 1.5,
        smartGridEfficiency: 0
      },
      vehicles: {
        name: "Vehicles",
        totalVehicles: 0, //Should this be a computed(getters) prop?
        petrolVehicles: {
            amount: 6,
            fossilFuelConsumption: 2,
            sustainableEnergyConsumption: 0,
        },
        electricVehicles: {
            amount: 0,
            fossilFuelConsumption: 0,
            sustainableEnergyConsumption: 2,
        },
        hybridVehicles: {
            amount: 0,
            fossilFuelConsumption: 1,
            sustainableEnergyConsumption: 1,
        }
      }
    }
  },

  mutations: {
    nextRound: state => {
      state.round++, 
      state.weather.wind = Math.ceil(Math.random()*10);
      state.weather.sun = Math.ceil(Math.random()*10);

      state.total.energyProduction =+ state.total.energyProduction * state.smartGrid.efficiency 
      state.total.fossilFuel = state.total.fossilFuel - state.total.petrolConsumption;
    },
    decrement: state => state.counter--,

    changeWeather: state => 
    {
      state.weather.wind = Math.ceil(Math.random()*10);
      state.weather.sun = Math.ceil(Math.random()*10);
    },
    buyUpgrade: (state, { index, }) => {
      if (state.upgrades[index].amount <= 6) {
        state.upgrades[index].amount++;
        console.log("it works!")
      } else {
        alert("YAlready maxed out!");
      }
    },
  },
  getters: {
  },
  actions: {
    // should create an action which trigger muations:
    // Next Round + change Weather + Energy Calculations
  },
  modules: {
  }
})
