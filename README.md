# Neighborhood Survey Code

An web map on which survey participants can draw a region, embeddable in Qualtrics.

## To Embed in Qualtrics

Add the following lines in HTML mode to your survey header 
(under "Look and Feel > General > Header > edit"):

```html
<script src="https://api.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.js"></script>
<script src="https://cdn.jsdelivr.net/gh/CoryMcCartan/neighborhood-survey/docs/embedded.js"></script>
```

Under "Look and Feel > Style > External CSS", paste:
```
https://cdn.jsdelivr.net/gh/CoryMcCartan/neighborhood-survey/docs/embedded.css
```

In the question you'd like to have the map appear in, edit the question HTML
to include 
```html
<h2>Enter your address</h2>
<p style="display: flex; flex-direction: row;">
    <input type="search" id="ns__address-box" autofocus />
    <button id="ns__address-go">Go</button>
</p>

<div id="ns__msg-search" hidden class="ns__msg">&nbsp;</div>

<h2>Draw your neighborhood</h2>

<p>
    Use the brush tool to draw your neighborhood, and the
    eraser to make corrections.
</p>

<div id="ns__container"></div>
```

Then copy the code in `src/qualtrics.js` into the JavaScript section of the
question.
