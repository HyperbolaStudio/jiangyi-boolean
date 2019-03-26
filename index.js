class JyBoolean{
	constructor(a=1,b=1,enableAprilFools){
		if(enableAprilFools){
			if(Math.random() >= 0.5){
				let a = Math.random();
				if(a<0.25){
					throw new SyntaxError('Is unexpected token an unexpected token?');
				}else if(0.25<=a && a<0.5){
					throw new TypeError("Is 'undefined' an object?");
				}else if(0.5<=a && a<0.75){
					throw new TypeError("Can a property of 'null' be read?");
				}else{
					throw new ReferenceError("Is that defined?");
				}
			}
		}
		this.a = a;
		this.b = b;
		this.enableAprilFools = enableAprilFools;
	}
	get bool(){
		if(this._obvious === true || this._obvious === false){
			return this._obvious;
		}
		return Math.random() >= this.a/(this.a+this.b);
	}
	set bool(isTrue){
		'Is JavaScript JavaScript?';
	}
	obviouslyIs(isTrue){
		if(this.enableAprilFools){
			let a = Math.random();
			if(a<0.25){
				throw new Error('That is obviously a fault.');
			}else if(a<0.5){
				this._obvious = !isTrue;
				return;
			}
		}
		if(isTrue === true || isTrue === false){
			this._obvious = isTrue;
		}else{
			this._obvious = null;
		}
	}
}
module.exports = {JyBoolean};