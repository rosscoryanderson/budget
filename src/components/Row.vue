<template>
    <tr :class="colour">
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
    data() {
        return {
        }
    },
}
</script>

<style>
.number {
    text-align: right;
}
</style>