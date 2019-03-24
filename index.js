class JyBoolean{
	constructor(a=1,b=1,enableAprilFools){
		if(enableAprilFools){
			if(Math.random() >= 0.5){
				throw new SyntaxError('Is unexpected token an unexpected token?');
			}else if(Math.random() >= 0.5){
				throw new TypeError("Is 'undefined' an object?");
			}else if(Math.random() >= 0.5){
				throw new TypeError("Can a property of 'null' be read?");
			}
		}
		this.a = a;
		this.b = b;
	}
	get bool(){
		return Math.random() >= this.a/(this.a+this.b);
	}
	set bool(isTrue){
		'Is JavaScript JavaScript?'
	}
}
module.exports = JyBoolean;