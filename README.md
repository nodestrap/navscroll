# &lt;Navscroll&gt;&lt;/Navscroll&gt;
A navigation component to navigate within current page, based on scroll position.

## Preview

```jsx
<Navscroll targetRef={articleRef} theme='primary' size='lg' gradient={true} outlined={true}>
    <Item>Intro</ListItem>
    <Item>Installation</ListItem>
    <Item>Usage</ListItem>
    <Item>Examples</ListItem>
    // ...
</Navscroll>
```
Rendered to:
```html
<nav class="c1 thPrimary szLg gradient outlined">
    <div>/* ... */</div>
    <div>/* ... */</div>
    <div>/* ... */</div>
</nav>
```

## Features
* Includes all features in [`<Nav />`](https://www.npmjs.com/package/@nodestrap/nav).
* Customizable via [`@cssfn/css-config`](https://www.npmjs.com/package/@cssfn/css-config).

## Installation

Using npm:
```
npm i @nodestrap/navscroll
```

## Support Us

If you feel our lib is useful for your projects,  
please make a donation to avoid our project from extinction.

We always maintain our projects as long as we're still alive.

[[Make a donation](https://ko-fi.com/heymarco)]
