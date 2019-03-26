declare module 'jiangyi-boolean'{
	export class JyBoolean{
		constructor(a?:number,b?:number,enableAprilFools?:boolean);
		a:number;
		b:number;
		bool:boolean;
		obviouslyIs:(isTrue:boolean|null) => void;
	}
}
