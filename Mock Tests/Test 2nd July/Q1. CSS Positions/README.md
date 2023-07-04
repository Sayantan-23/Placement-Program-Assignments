# CSS Position Property

The CSS Positions property defines how the element is positioned in the document. We can set different values for position property and then manipulate the position by using the `top`, `right`, `bottom` and `left` properties. The `position` property has six values - `static`, `relative`, `absolute`, `fixed`, `sticky` and `inherit`. Here is the basic syntax to write `position` property -

```css
.item {
    position: relative;
    top: 200px;
    left: 400px;
}
```

### Static

It is the default value of the `position` property and every element in the the document has the `static` position by default. The element is positioned according to the normal flow of the document. The `top`, `right`, `bottom`, `left` and `z-index` properties have no effect on the element if the positioning of the element is `static`.

```css
.item {
    position: static;
}
```

### Relative

It is just like the `static` value where the element will be positioned according to the flow of the document, but now `top`, `right`, `bottom`, `left` and `z-index` will have effect on the element. These properties will work on the element based on it's original position in the document. These properties and the values will not affect the positions of other elements and the space given for the element in the page layout will be the same as if the position was `static`.

```css
.item {
    position: relative;
    top: 200px;
    left: 400px;
}
```

### Absolute

Unlike the `static` and `relative` this time the element will be removed from the normal document flow and there will be no space created for the element in the page layout. That means if the child element has an absolute value then the parent will behave as if the child is not there at all. The values of the `top`, `right`, `bottom`, `left` properties will be calculated with respect to the entire document unlike `relative` property where it is calculated with respect to the original position of the element. If we make the parent container's position `relative` then only the values of `top`, `right`, `left` and `bottom` will be calculated with respect to the parent container. Here is an example of `absolute` positioning with code -

```css
.item {
    position: absolute;
    top: 200px;
    left: 400px;
}
```

### Fixed

This is very similar to `absolute`, the item with `fixed` positioning will be removed from the normal document flow and there will be no space for the element in the page layout. We can position the element anywhere we want in the document by using `top`, `right`, `bottom`, `left` properties but this time the element will be unaffected by scrolling. That means the item will stay at the same position no matter how much we scroll the page. Let's see the below example with code for better understanding -

```css
.item2 {
    position: fixed;
    bottom: 100px;
    left: 230px;
}
```

### Sticky

It allows us to position the element relative to anything in the document and then when the user has scrolled past a certain point at the viewport, it fix the the position of the element to that location so it is displayed like an element with `fixed` value. Let's take an example -

```css
.item {
    position: sticky;
    top: 20px;
}
```

If we apply the above code for an item, the item will be relatively positioned until the scroll location of the page reaches at point where it's distance from the top of the viewport is 20px. From that point the item will remain fixed at from 20px top of the screen.

### Inherit

This can be used to force the item to inherit the positioning value from it's parent.

---
