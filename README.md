# Neighborhood Survey Code

An web map on which survey participants can draw a region, embeddable in Qualtrics.

## To Embed in Qualtrics

Add the following lines in HTML mode to your survey header 
(under "Look and Feel > General > Header > edit"):

```html
<link href="https://api.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.css" rel="stylesheet" />
<script src="https://api.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.js"></script>
<script src="https://cdn.jsdelivr.net/gh/CoryMcCartan/neighborhood-survey/docs/embedded.js"></script>
```

In the question you'd like to have the map appear in, edit the question HTML
to include 
```html
<div id="ns__container"></div>
```

Then copy the code in `src/qualtrics.js` into the JavaScript section of the
question.
