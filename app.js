const cars = [
	{name: 'Ford', model: 'Escape', owner: 'Danil', year: 2016, phone: '+610 515-5258', image: 'images/ford_escape_s.png'},
	{name: 'Lamborghini', model: 'Huracan', owner: 'Iluha', year: 2017, phone: '+736 462-0707', image: 'images/lamborghini_huracan.png'}
]

new Vue({
	el: '#app',
	data: {
		cars: cars,
		car: cars[1],
		selectedCarIndex: 0,
		phoneVisibility: false,
		search: '',
		buyingWindow: false
	},
	methods: {
		showCar: function(index) {
			this.car = cars[index],
			this.selectedCarIndex = index
		}
	},
	computed: {
		phoneBtnText() {
			return this.phoneVisibility ? 'Hide phone' : 'Show phone'
		},
		filteredCars() {
			return this.cars.filter(car => {
				return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
			})
		}
	}
})