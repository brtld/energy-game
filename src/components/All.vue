<template>
   <div id="all" class="w3-row-padding">
      <div class="general w3-card w3-col m3">   
         <header class="w3-container w3-blue">  
            <h1>Round: {{general.round}}</h1>
         </header>
         <p> 
               Fossil Fuel: {{general.fossilFuel}} <br />
               Sustainable Energy: {{general.sustainableEnergy}} <br />
               Energy Consumption: {{totalEnergyConsumption}}<br />
               Total Energy: {{general.totalEnergy}} 
         </p>
         <p> weather: {{general.weather}}, 
            wind: {{general.wind}}
         </p>

         <footer class="w3-container">
            <button @click="nextRound"> Next Round </button>
         </footer>
      </div>

      <div class="vehicles w3-card w3-col m3">
         <header class="w3-container w3-blue">
             <h2> Vehicles {{vehicles.electricVehicles.amount}}/{{general.maxLevel}} </h2>
         </header>
         <p>total vehicles = {{ totalVehicles }}</p>
         <p>petrolVehicles: {{vehicles.petrolVehicles.amount}}
         electricVehicles: {{ vehicles.electricVehicles.amount}}
         </p>
         
         <p>
            totalEnergyConsumption: {{totalEnergyConsumption}}, <br>
            petrolConsumption: {{petrolConsumption}}, <br>
            electricConsumption: {{electricConsumption}}
         </p>

         <footer class="w3-container">
            <div v-if="vehicles.electricVehicles.amount < general.maxLevel ">
               <button @click="addElectricVehicle"> switch to an electric vehicle</button>
            </div>
            <div v-else>
               <h3> Already maxed out!</h3>
            </div>
         </footer>
      </div>

      <div class="heating w3-card w3-col m3">
         <header class="w3-container w3-blue">
            <h2> Heating / AC {{heating.amount}}/{{general.maxLevel}} </h2>
         </header>
         <p>number of heatpumps: {{heating.amount}}, </p> 
         <p>energyConsumption: {{heating.energyConsumption}}</p>
         
         <footer class="w3-container">
            <div v-if="heating.amount < general.maxLevel ">
               <button @click="addHeatpump"> add Heatpump </button>
            </div>
            <div v-else>
               <h3> Already maxed out!</h3>
            </div>
         </footer>
      </div>

      <div class="home-appliances w3-card w3-col m3">
         <header class="w3-container w3-blue">
            <h2> Home Appliances {{homeAppliances.amount}}/{{general.maxLevel}} </h2>
         </header>
         <p>level of home appliances: {{homeAppliances.amount}} ,</p>
         <p> energyConsumption: {{homeAppliances.energyConsumption}}
         <p> efficiency: {{homeAppliances.efficiency}}</p>
         
         <footer class="w3-container">
            <div v-if="homeAppliances.amount < general.maxLevel ">
               <button @click="addHomeAppliences"> add homeAppliances </button>
            </div>
            <div v-else>
               <h3> Already maxed out!</h3>
            </div>
         </footer>
      </div>


      <div class="solar-panels w3-card w3-col m3">
         <header class="w3-container w3-blue">
            <h2> Solar Panels {{solarpanels.amount}}/{{general.maxLevel}}</h2> 
         </header>
         <p>number of solar panels: {{solarpanels.amount}} ,</p>
         <p>efficiency: {{solarpanels.efficiency}}</p>
         <p>yield: {{solarpanels.yield}}</p>
         
         <footer class="w3-container">
            <div v-if="solarpanels.amount < general.maxLevel ">
               <button @click="addSolarPanel"> add addSolarPanel </button>
            </div>
            <div v-else>
               <h3> Already maxed out!</h3>
            </div>
         </footer>
      </div>

      <div class="wind-turbines w3-card w3-col m3">
         <header class="w3-container w3-blue">
            <h2> Wind Turbines {{windTurbines.amount}}/{{general.maxLevel}} </h2>
         </header>
         <p>number of wind turbines: {{windTurbines.amount}} ,</p>
         <p>efficiency: {{solarpanels.efficiency}}</p>
         <p>yield: {{windTurbines.yield}}</p>

         <footer class="w3-container">
            <div v-if="windTurbines.amount < general.maxLevel ">
               <button @click="addWindTurbines"> Add windTurbines </button>
            </div>
            <div v-else>
               <h3> Already maxed out!</h3>
            </div>
            {{ windTurbineYield }}
         </footer>
      </div>

      <div class="smart-grid w3-card w3-col m3">
         <header class="w3-container w3-blue">
            <h2> Smart Grid {{smartGrid.amount}}/{{general.maxLevel}} </h2>
         </header>
         <p>efficiency of smart grid control: {{this.smartGrid.smartGridEfficiency}}</p>

         <footer class="w3-container footer">
            <div v-if="smartGrid.amount < general.maxLevel ">
               <button @click="addSmartGrid"> Add SmartGrid Grid</button>
            </div>
            <div v-else>
               <h3> Already maxed out!</h3>
            </div>
         </footer>
      </div>

      <div class="batteries w3-card w3-col m3">
         <header class="w3-container w3-blue">
            <h2> Batteries {{batteries.amount}}/{{general.maxLevel}} </h2>
         </header>
         <p>number of batteries</p>
         <p> totalCapacity {{batteries.totalCapacity}}</p>

         <footer class="w3-container footer">
            <div v-if="batteries.amount < general.maxLevel">
               <button @click="addBatteries"> Add Battery </button>
            </div>
            <div v-else>
               <h3>Already Maxed out!</h3>
            </div>
         </footer>
      </div>


   </div>
</template>

<script>
export default {
name: 'All',
   data: function(){
      return{
         general: {
            round: 0,
            totalEnergy: 0,
            fossilFuel: 500,
            sustainableEnergy: 0,
            totalEnergyConsumption: 0,
            weather: 4,
            wind: 3,
            maxLevel: 6,
         },
         batteries: {
            amount: 0,
            energyConsumption: 1,
            capacity: 2,
            totalCapacity: 0,
         },
         solarpanels: {
            amount: 0,
            efficiency: 1.6,
            yield: 0,
            nightTime: true,
            
         },
         windTurbines:  {
            amount: 0,
            efficiency: 1.3,
            yield: 0,  
         },
         homeAppliances: {
            energyConsumption: 12,
            amount: 0,
            efficiency: 1.15,
         },
         heating: {
            amount: 0,
            energyConsumption: 18,
         },
         smartGrid: {
            amount: 0,
            efficiency: 1.5,
            smartGridEfficiency: 0
         },
         vehicles: {
            // totalVehicles: 0, //Should this be a computed prop?
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
   computed: {
      totalEnergy: function () {
          return this.general.fossilFuel + this.general.sustainableEnergy 
      },
      totalVehicles: function() {
         return this.vehicles.electricVehicles.amount + this.vehicles.petrolVehicles.amount
      },
      totalEnergyConsumption: function(){
         return this.petrolConsumption + this.electricConsumption
      },
      petrolConsumption: function(){
         return this.vehicles.petrolVehicles.amount * this.vehicles.petrolVehicles.fossilFuelConsumption 
         + (( this.general.maxLevel - this.heating.amount) * this.heating.energyConsumption)
      },
      electricConsumption: function(){
         return (this.vehicles.electricVehicles.amount * this.vehicles.electricVehicles.sustainableEnergyConsumption) 
         + (this.heating.amount * this.heating.energyConsumption)
      },
      windTurbineYield: function(){
         return this.general.wind * this.windTurbines.efficiency * this.windTurbines.amount
      },
      addSolarPanelYield: function() {
         return this.general.weather * this.solarpanels.efficiency * this.windTurbines.amount
      }



   },
   methods: {
      nextRound() { 
            this.general.round++
            this.general.fossilFuel = this.general.fossilFuel - (this.general.totalEnergyConsumption)
            this.TotalEnergy = this.TotalEnergy - this.EnergyConsumption
            this.general.wind = Math.floor(Math.random()*10)
            this.general.weather = Math.floor(Math.random()*10)


      },
      addElectricVehicle: function(){
         this.vehicles.electricVehicles.amount ++
         this.vehicles.petrolVehicles.amount --
         // this.vehicles.totalEnergyConsumption, this.vehicles.petrolConsumption, this.vehicles.electricConsumption)
      },
      addHeatpump: function(){
         this.heating.amount ++
         this.heating.energyConsumption = this.heating.energyConsumption -2
         this.general.energyConsumption = this.general.energyConsumption + this.heating.energyConsumption
         
      },
      addHomeAppliences: function(){
         this.homeAppliances.amount ++
         this.homeAppliances.efficiency = this.homeAppliances.amount * this.homeAppliances.efficiency
      },
      addSolarPanel: function(){
         this.solarpanels.amount ++
         this.solarpanels.yield = this.solarpanels.amount * this.solarpanels.efficiency *this.solarpanels.nightTime * this.general.weather
         this.general.sustainableEnergy = this.general.sustainableEnergy + this.solarpanels.yield
      },
      addSmartGrid: function(){
         this.smartGrid.amount ++
         this.smartGrid.smartGridEfficiency =  this.smartGrid.amount * this.smartGrid.efficiency
      },
      addWindTurbines: function(){
         this.windTurbines.amount ++
         this.windTurbines.yield = this.windTurbines.amount * this.windTurbines.efficiency * this.general.wind
      },
      addBatteries: function(){
         this.batteries.amount ++
         this.batteries.totalCapacity = this.batteries.amount +this.batteries.capacity
      }
   },
}

</script>

<style>
.w3-card {
   height: 300px;;
}
.footer {
   height: 50px;
}
</style>