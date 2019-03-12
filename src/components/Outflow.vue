<template>
  <div>
    <div class="row">
      <div class="col">
        <h3>Expenditures</h3>
      </div>
    </div>
    <div class="col-sm">
      <table class="table table-hover table-info">
        <thead>
          <tr>
            <th></th>
            <th scope="col">Expenditure</th>
            <th scope="col">Frequency</th>
            <th
              scope="col"
              v-for="frequency in frequencies"
              :key="frequency"
              class="number"
            >{{ frequency }}</th>
          </tr>
        </thead>
        <tbody v-for="typeValue in typesList" :key="typeValue">
            <OutflowRow
              v-for="expenditure in filterByType(typeValue)"
              :key="expenditure.source"
              :point="expenditure"
              :colour="'table-light'"
            />
        </tbody>
        <tbody>
            <OutflowRow :point="sumRow('outflow')" :colour="'table-secondary'"/>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import mixins from "../mixins.js";
import OutflowRow from "./OutflowRow.vue";

export default {
  mixins: [mixins],
  components: {
    OutflowRow
  },
  methods: {
    filterByType(type) {
      return this.outflowValues.filter(x => x.type === type);
    },
    tableColour(index) {
      return "table table-hover table-" + this.outflowTypes[index]["colour"];
    }
  }
};
</script>

<style>
</style>