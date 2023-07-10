# Long Shadow jQuery Plugin

[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

> Easy text-shadow with long shadow jquery plugin

![](screenshot.png)

## CDN

```html
<script src="https://unpkg.com/jquery-longshadow"></script>
```

## Usage

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

## License

MIT © [Dang Van Thanh](https://dangthanh.org)
