# Long Shadow jQuery Plugin
----------------------------------------------

> Easy text-shadow with long shadow jquery plugin

[![Build Status: Linux](https://api.travis-ci.org/dangvanthanh/jquery.longShadow.svg?branch=master)](https://travis-ci.org/dangvanthanh/jquery.longShadow)

## Use

```js
$(selector).longShadow({
    colorShadow: '#a13c32',
    sizeShadow: 70,
    directionShadow: 'bottom'
});
```
### Available Options

Option | Type | Default Value | Description
---    | ---  | ---           | ---

| Option  | Type  | Default  | Description | 
|---|---|---|---|
| colorShadow | String | #ccc | Color of text-shadow (HEX, RGB, RGBA) |
| sizeShadow | Integer | 50 | Numbers value of text-shadow  |
| directionShadow | String | bottom-right | Direction of text-shadow. Currently, have 8 direction: <ul><li>top</li><li>right</li><li>bottom</li><li>left</li><li>top-right</li><li>top-left</li><li>bottom-right</li><li>bottom-left</li></ul |
