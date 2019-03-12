export default {
    data() {
        return {
            // TODO: Make these customisable and managed on server side. 
            frequencies: [
                'Weekly',
                'Fortnightly',
                'Monthly',
                'Bimonthly',
                'Quarterly',
                'Annually'
            ],
            outflowTypes: [
                { name: 'Housing', colour: 'primary' },
                { name: 'Utilities', colour: 'danger' },
                { name: 'Transport', colour: 'warning' },
                { name: 'Food/Drinks', colour: 'success' },
                { name: 'Subscriptions', colour: 'dark' },
                { name: 'Other', colour: 'secondary' },
            ],
            // Dummy data
            // data: [
            //     {
            //         source: 'Salary',
            //         direction: 'inflow',
            //         frequency: 'Monthly',
            //         value: 3800,
            //         type: '',
            //     },
            //     {
            //         source: 'Car Repayments',
            //         direction: 'inflow',
            //         frequency: 'Weekly',
            //         value: 50,
            //         type: '',
            //     },
            //     {
            //         source: 'House Mortgage',
            //         direction: 'outflow',
            //         frequency: 'Monthly',
            //         value: 1362,
            //         type: 'Housing',
            //     },
            //     {
            //         source: 'Car Repayment',
            //         direction: 'outflow',
            //         frequency: 'Weekly',
            //         value: 50,
            //         type: 'Transport',
            //     },
            //     {
            //         source: 'Netflix',
            //         direction: 'outflow',
            //         frequency: 'Monthly',
            //         value: 15,
            //         type: 'Subscriptions',
            //     },
            // ]
        }
    },
    methods: {
        convertToAnnual(value, frequency) {
            let annualValue;
            switch (frequency) {
                case 'Weekly':
                    annualValue = value * 52;
                    break;
                case 'Fortnightly':
                    annualValue = value * 26;
                    break;
                case 'Monthly':
                    annualValue = value * 12;
                    break;
                case 'Bimonthly':
                    annualValue = value * 6;
                    break;
                case 'Quarterly':
                    annualValue = value * 4;
                    break;
                case 'Annually':
                    annualValue = value;
                    break;
            }
            return annualValue;
        },
        convertToFrequency(value, fromFrequency, toFrequency) {
            let annualValue = this.convertToAnnual(value, fromFrequency);
            let formattedValue;
            switch (toFrequency) {
                case 'Weekly':
                    formattedValue = annualValue / 52;
                    break;
                case 'Fortnightly':
                    formattedValue = annualValue / 26;
                    break;
                case 'Monthly':
                    formattedValue = annualValue / 12;
                    break;
                case 'Bimonthly':
                    formattedValue = annualValue / 6;
                    break;
                case 'Quarterly':
                    formattedValue = annualValue / 4;
                    break;
                case 'Annually':
                    formattedValue = annualValue;
                    break;
            }
            return formattedValue;
        },
        displayFrequency(value, fromFrequency, toFrequency) {
            return '$' + this.convertToFrequency(value, fromFrequency, toFrequency).toFixed(2);
        },
        calculateSum(direction) {
            let filteredData = this.$store.state.data.filter(x => {
                return x.direction === direction;
            })
            return filteredData.reduce((a, b) => +a + this.convertToAnnual(b.value, b.frequency), 0);
        },
        sumRow(direction) {
            return {
                source: "Total",
                direction: "inflow",
                frequency: "Annually",
                value: this.calculateSum(direction),
                type: ""
            };
        },
        sumDifference() {
            const inflow = this.inflowValues.map(x => this.convertToAnnual(x.value, x.frequency))
            const outflow = this.outflowValues.map(x => this.convertToAnnual(x.value, x.frequency))
            const difference = inflow.reduce(this.add, 0) - outflow.reduce(this.add, 0)
            return {
                source: 'Total',
                direction: 'balance',
                frequency: 'Annually',
                value: difference,
                type: ''
            }
        },
        add(a, b) {
            return a + b;
        }
    },
    computed: {
        inflowValues() {
            return this.$store.state.data.filter(x => x.direction == 'inflow')
        },
        outflowValues() {
            return this.$store.state.data.filter(x => x.direction == 'outflow')
        },
        typesList() {
            return this.outflowTypes.map(x => x.name);
        }
    }
}