class Sprite{
	constructor(config){

		this.image = new Image()
		this.image.src = config.src
		this.image.onload = () =>{
			this.isLoaded = true
		} 


		//config animation
		this.animations = config.animations || {
			idleDown: [
				[0,0]
			],
			// walkDown: [
			// 	[0, 0],[1, 0],[2, 0],[3, 0]
			// ],
		}  
		this.currentAnimation = config.currentAnimation || "idleDown"
		this.currentAnimationFrame = 0

		//ref gameObject
		this.gameObject = config.gameObject
	}

	draw(ctx){
		let x = this.gameObject.x * 16 - 8
		let y = this.gameObject.t * 16 - 18

		ctx.drawImage(this.image,
			0,0,
			32,32,
			x,y,
			32,32
		)
	}
}