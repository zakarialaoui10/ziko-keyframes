This library offers a DOM Style approach to animations, inspired by the popular CSS library [Animate.css](https://animate.style/). 
It provides a programmatic way to create and apply animations directly to DOM elements, offering greater flexibility and customization.

**Usage :**

- **With  [Ziko.js](https://github.com/zakarialaoui10/ziko.js) :**
```js
 import {text} from "ziko"
 import {bounce} from "ziko-keyframes"
 let txt= text("Hello from zikojs").style({
    color : "darkblue"
 });
 let {keyframes, config} = bounce(1000, 2, "ease")
 txt.animate(keyframes, config)
```
- **With DOM Element :**
```js
 let element = document.querySelector(/* selector */);
 let {keyframes, config} = bounce(1000, 2, "ease");
 element.animate(keyframes, config)
```

- **With Svelte :**

```html
<script>
import {bounce} from "ziko-keyframes";
import useKeyframes from "ziko-keyframes/svelte";
const animation = () => bounce(1000, 2, 'ease');
</script>

<div use:useKeyframes={animation} style="color: darkblue; font-size: 24px;">
  Hello from Svelte with Animation using ziko-keyframes
</div>

```