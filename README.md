# jiangyi-boolean

(Chinese: 姜懿布尔型)

Type of Random Boolean.

## Introduction

JyBoolean has two status: JyTrue(Chinese: 姜懿真) and JyFalse(Chinese: 姜懿假). These two status will collapse into one by random on calling the Getter `bool`

## Get Started

install jiangyi-boolean by npm. 

```bash
npm install jiangyi-boolean --save
```

and use it.

```typescript
var JyBoolean = require('jiangyi-boolean');
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

### `obviouslyIs`  of `JyBoolean`

```typescript
obviouslyIs(isTrue:boolean|null) => void
```

Declare what status the `JyBoolean` is obviously is.

Something interesting will happen if April Fool's Day feature is enabled.

## Copyright
(c) Hyperbola Studio. An open source project under WTFPL license. 