<template>
    <form>
        <div class="row">
            <div class="col-sm">
                <h2>Add Expenditure</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <div class="form-group">
                    <label for="inflowSource">Income Source</label>
                    <input 
                      type="text" 
                      id="inflowSource" 
                      placeholder="Income Source" 
                      class="form-control" 
                      v-model="sourceInput">
                </div>
            </div>
            <div class="col-sm">
                <div class="form-group">
                    <label class="amount">Amount</label>
                    <div class="form-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">$</span>
                            </div>
                            <input 
                              type="number" 
                              step="any" 
                              class="form-control" 
                              placeholder="00.00"
                              v-model="valueInput">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm">
                <div class="form-group">
                    <label class="frequency">Frequency</label>
                    <select id="frequency" class="form-control" v-model="frequencyInput">
                        <option v-for="frequency in frequencies" :key="frequency">
                            {{ frequency }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="col-sm">
                <div class="form-group">
                    <label class="frequency">Type</label>
                    <select id="type" class="form-control" v-model="typeInput">
                        <option v-for="valueType in typesList" :key="valueType">
                            {{ valueType }}
                        </option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm pull-right">
                <button type="submit" class="btn btn-primary float-right" @click.prevent="handleSubmit()">Add Expenditure</button>
            </div>
        </div>
    </form>
</template>

<script>
import mixins from "../mixins.js";

export default {
  mixins: [mixins],
  data() {
    return {
      sourceInput: "",
      frequencyInput: "",
      valueInput: 0,
      typeInput: ""
    };
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch('addCashFlow', {
        user: this.$store.state.user,
        data: {
          source: this.sourceInput,
          direction: "outflow",
          frequency: this.frequencyInput,
          value: this.valueInput,
          type: this.typeInput
        }
      });
    }
  }
};
</script>

<style>
</style>