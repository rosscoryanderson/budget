<template>
  <div>
    <div class="row">
      <div class="col">
        <h3>Income Sources</h3>
      </div>
    </div>
    <div class="col-sm">
      <table class="table table-hover table-success">
        <thead>
          <tr>
            <th scope="col">Income Source</th>
            <th scope="col">Frequency</th>
            <th
              scope="col"
              v-for="frequency in frequencies"
              :key="frequency"
              class="number"
            >{{ frequency }}</th>
          </tr>
        </thead>
        <tbody>
          <Row
            v-for="point in inflowValues"
            :key="point.source"
            :point="point"
            :colour="'table-light'"
          />
          <Row :point="sumRow('inflow')" :colour="'table-secondary'"/>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import mixins from "../mixins.js";
import Row from "./Row.vue";

export default {
  mixins: [mixins],
  components: {
    Row
  }
};
</script>

<style>
.number {
  text-align: right;
}
</style>


