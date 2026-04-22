class OverWorld{
	constructor(config){
		this.element = config.element
		this.canvas = this.element.querySelector("#game-canvas")
		this.ctx = this.canvas.getContext("2d")
	}

	init(){
		let image = new Image()
		image.onload = () => {
			this.ctx.drawImage(image,0,0)
		}
		image.src = "./images/maps/DemoLower.png"

		// let x = 5
		// let y = 6

		// let shadow = new Image()
		// shadow.onload = () => {
		// 	this.ctx.drawImage(
		// 		shadow,
		// 		0,
		// 		0,
		// 		32,
		// 		32,
		// 		x * 16 - 8,
		// 		y * 16 - 18,
		// 		32,
		// 		32	
		// 	)
		// }
		// shadow.src = "./images/characters/shadow.png" 

		// let hero = new Image()
		// hero.onload = () => {
		// 	this.ctx.drawImage(
		// 	hero,
		// 	0, //left cut
		// 	0, //top cut
		// 	32,//width cut 
		// 	32,//heigt cut
		// 	x * 16 - 8, //poss X
		// 	y * 16 - 18,//poss Y
		// 	32, //width
		// 	32 
		// 	)
		// }
		// hero.src = "./images/characters/people/hero.png"

		let hero = new GameObject({
			x: 5,
			y: 6,
		})
		let npc1 = new GameObject({
			x: 4,
			y: 6,
			src: "./images/characters/people/npc1.png"
		})

		hero.sprite.draw(this.ctx)
		npc1.sprite.draw(this.ctx)
	}
}