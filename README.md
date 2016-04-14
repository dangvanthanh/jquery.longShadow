# Long Shadow jQuery Plugin [![Build Status: Linux](https://api.travis-ci.org/dangvanthanh/jquery.longShadow.svg?branch=master)](https://travis-ci.org/dangvanthanh/jquery.longShadow)

> Easy text-shadow with long shadow jquery plugin

## Use

```js
$(selector).longShadow({
    colorShadow: '#a13c32',
    sizeShadow: 70,
    directionShadow: 'bottom'
});
```

### Available Options

| Option  | Type  | Default  | Description | 
|---|---|---|---|
| colorShadow | String | #ccc | Color of text-shadow (HEX, RGB, RGBA) |
| sizeShadow | Integer | 50 | Numbers value of text-shadow  |
| directionShadow | String | bottom-right | Direction of text-shadow. Currently, have 8 direction: **top**, **right**, **bottom**, **left**, **top-right**, **top-left**, **bottom-right**, **bottom-left** |
