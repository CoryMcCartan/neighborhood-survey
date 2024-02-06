# Neighborhood Survey Collection Tool

An web map on which survey participants can draw a region, embeddable in Qualtrics, as described in ["Measuring and Modeling Neighborhoods"](https://doi.org/10.1017/S0003055423001429).

**Looking for the R package to fit a model to collected neighborhoods?** See [`CoryMcCartan/nbhdmodel`](https://github.com/CoryMcCartan/nbhdmodel).

## To Create Your Own Map
First, open `R/make_tileset.R` and edit the first few lines to specify the
state (`STATE`) and counties (`COUNTIES`) you wish to generate a map for, a
short name (`TILESET_ID`) for the generated map, and your Mapbox username
(`MAPBOX_USERNAME`) and secret key with uploads permissions set
(`MAPBOX_SECRET_TOKEN`).

Then run the entire file.  This will take a long time, especially if the map
area is large. Ultimately, a tileset will be uploaded to Mapbox containing the
Census blocks and associated variables. The script will also produce a JSON
file containing the appropriate specification for the embedded map, and an
adjacency graph. Both will be outputted to the `assets/` folder.

Second, host the adjacency graph and specification JSON online. Running
`npm run build` will build a mockup embedded map and associated files into
the `docs/` directory, which can be hosted on GitHub free of charge. (Go to the
Settings tab and select the option to host from the `docs/` directory). 
You will need the URLs to both of these files to embed the map into a Qualtrics
survey.

## To Embed in Qualtrics

First, add the following lines in HTML mode to your survey header 
(under "Look and Feel > General > Header > edit"):

```html
<script src="https://api.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.js"></script>
<script src="https://cdn.jsdelivr.net/gh/CoryMcCartan/neighborhood-survey/docs/embedded.js"></script>
```

Second, under "Look and Feel > Style > External CSS", paste:
```
https://cdn.jsdelivr.net/gh/CoryMcCartan/neighborhood-survey/docs/embedded.css
```

Third, in the question you'd like to have the map appear in, edit the question HTML
and paste:
```html
<h2>Enter your address</h2>
<p style="display: flex; flex-direction: row;">
    <input type="search" id="ns__address-box" autofocus />
    <button id="ns__address-go">Go</button>
</p>

<div id="ns__msg-search" hidden class="ns__msg"></div>

<h2>Draw your neighborhood</h2>

<p> 
    <!-- ADD ADDITIONAL INSTRUCTIONS HERE -->
    Use the brush tool to draw your neighborhood, and the
    eraser to make corrections.
</p>

<div id="ns__container"></div>
```
You may add additional instructions where indicated. 

Fourth, go to `src/qualtrics-basic.js` and edit the top few lines to
include your Mapbox API token and the URLs to your map and ajacency graph:
```js
var map; 

var MAPBOX_TOKEN = "<MAPBOX API KEY>";
var SPECIFICATION = "<URL TO SPECIFICATION>";
var ADJACENCY_GRAPH = "<URL TO ADJACENCY GRAPH>";
```
Then copy the code in the entire file into the JavaScript section of the
map question.  The user's address will be saved in the `home_address` field,
and the selected block group IDs will be saved in the `neighborhood` field.

Finally, go to "Survey Flow" and add a "Set Embedded Data" element **before**
the question with the map. Inside, add a field for `neighborhood` and one for
`home_address`.

## Other Options
The code in `src/qualtrics-advanced.js` provides more options, which may be
customized using Qualtrics embedded data (which can in turn be set by URL parameters,
for example, `?overlay=true&overlay_type=partisan&start_zoom=13`).

The supported options are:

- Set `overlay` to `true`/`false` to turn on and off a colored overlay
- Set `overlay_type` to `partisan` or `race` to show a partisan or race overlay.
The code in `qualtrics-advanced.js` may need to be customized so that the demographic
variable names match those expected. Additional types can also be added, and are
implemented using 
[Mapbox styling expressions](https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/). 
We provide the helper functions `BivariateOverlay` and `UnivariateOverlay` to
create styling functions; look at `src/views/embedded.js`.
- Set `city_group` to the name of the city you'd like to use (this requires that
you have appropriate tilesets and adjancency graphs uploaded).
- Set `start_zoom` to set the original zoom level. The default is 14.

