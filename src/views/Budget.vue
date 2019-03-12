<template>
  <div class="container" id="app">
    <h1>Budget yo' life</h1>
    <hr>
    <div v-if="!showAddInflow">
      <button 
        type="button" 
        class="btn btn-primary btn-sm"
        @click="showAddInflow = !showAddInflow"
        >
          Add New Income Source
      </button>
    </div>
    <div v-else>
      <button 
        type="button" 
        class="btn btn-dark btn-sm"
        @click="showAddInflow = !showAddInflow"
        >
          Hide Input
      </button>
    </div>
    <AddInflow v-if="showAddInflow"  class="spacer" />
    <Inflow class="spacer" />
    <hr>
    <div v-if="!showAddOutflow">
      <button 
        type="button" 
        class="btn btn-primary btn-sm"
        @click="showAddOutflow = !showAddOutflow"
        >
          Add New Expenditure
      </button>
    </div>
    <div v-else>
      <button 
        type="button" 
        class="btn btn-dark btn-sm"
        @click="showAddOutflow = !showAddOutflow"
        >
          Hide Input
      </button>
    </div>
    <AddOutflow v-if="showAddOutflow"  class="spacer" />
    <Outflow class="spacer" />
    <hr>
  </div>
</template>

<script>
import AddInflow from "@/components/AddInflow.vue";
import AddOutflow from "@/components/AddOutflow.vue";
import Inflow from "@/components/Inflow.vue";
import Outflow from "@/components/Outflow.vue";

export default {
  name: "app",
  components: {
    AddInflow,
    AddOutflow,
    Inflow,
    Outflow
  },
  data() {
    return {
      showAddInflow: false,
      showAddOutflow: false,
      inflowData: {}
    };
  },
  mounted() {}
};
</script>

<style>
#app {
  margin-top: 75px;
}

.spacer {
  margin-top: 40px;
}
</style>