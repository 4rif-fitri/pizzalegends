class Person extends GameObject{
	constructor(config){
		super(config)
		this.isPlayer = config.isPlayer || false

		this.movingProgressRemaining = 0

		this.direction = "right"

		this.directionUpdate = {
			"up": ["y", -1],
			"down": ["y", 1],
			"left": ["x", -1],
			"right": ["x", 1],
		}
	}
	update(state){
		this.updatePosision()

		if (this.isPlayer && this.movingProgressRemaining === 0 && state.arrow){
			this.direction = state.arrow
			this.movingProgressRemaining = 32
		}
	}

	updatePosision(){
		if(this.movingProgressRemaining > 0){
			let [propety, change] = this.directionUpdate[this.direction]
			this[propety] += (change * 0.5);
			this.movingProgressRemaining -= 1
		}
	}
}