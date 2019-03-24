# jiangyi-boolean

(Chinese: ??????

Type of Random Boolean.

## Introduction

JyBoolean has two status: JyTrue(Chinese: ???) and JyFalse(Chinese: ???). These two status will collapse into one by random on calling the Getter `bool`

## Get Started

install jiangyi-boolean by npm. 

```bash
npm install jiangyi-boolean --save
```

and use it.

```typescript
import {JyBoolean} from 'jiangyi-boolean';
var a:JyBoolean = new JyBoolean(2,5);
for(let i = 0;i < 5 ;++i){
	console.log(a.bool);
}
```

one of expected outputs:

```
true
true
false
true
false
```

## Usage

### `constructor` of `JyBoolean`

```typescript
constructor(a:number = 1,b:number =1,enableAprilFools:boolean = false)
```

- `a` and `b`: Proportion of probablity to be JyTrue or JyFalse. Default is `1:1`. 

- `enableAprilFools`: Enable features for April Fool's day.

### `bool` of `JyBoolean`

```typescript
bool:boolean
```

Get the collapsed status of JyBoolean. 

## Copyright
(c) Hyperbola Studio. An open source project under WTFPL license. 