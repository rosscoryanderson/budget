<template>
    <tr :class="colour">
        <td>
            <span :class="pillClass(point.type)">{{ point.type }}</span>
        </td>
        <td>
            {{ point.source }}
        </td>
        <td>
            {{ point.frequency }}
        </td>
        <td class="number" v-for="frequency in frequencies" :key="frequency">
            <div v-if="point.frequency === frequency">
                <strong>{{ displayFrequency(point.value, point.frequency, frequency) }}</strong>
            </div>
            <div v-else>
                {{ displayFrequency(point.value, point.frequency, frequency) }}
            </div>
        </td>
    </tr>
</template>

<script>
import mixins from '../mixins.js'

export default {
    props: ['point', 'colour'],
    mixins: [mixins],
    methods: {
        pillClass(type) {
            return "badge badge-" + this.outflowTypes.filter(x => x.name == type)
                                                     .map(x => x.colour)
        }
    },
}
</script>

<style>
.number {
    text-align: right;
}
</style>