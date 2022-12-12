STATE = "NY"
COUNTIES = c("New York", "Bronx", "Kings", "Queens", "Richmond")
TILESET_ID = "nyc-council"
MAPBOX_SECRET_TOKEN = Sys.getenv("MAPBOX_SECRET_TOKEN")
MAPBOX_USERNAME = "cmccartan"

library(tidyverse)
library(censable)
library(sf)
library(jsonlite)
library(mapboxapi)

# Census variables you wish to include in the tileset
vars = c(pop="P009001", pop_white="P009005", pop_black="P009006",
         pop_hisp="P009002")

d = build_dec("block", state=STATE, county=COUNTIES, geometry=TRUE, year=2020, groups="pop")
d = d |>
    select(GEOID, pop, geometry) |>
    mutate(pop = as.integer(pop))
cat("Census data downloaded.\n")

mbtile_name = paste0("R/data/", TILESET_ID, ".mbtiles")
tippecanoe(d, mbtile_name, layer_name="blocks",
           min_zoom=10, max_zoom=12,
           other_options="--coalesce-densest-as-needed --detect-shared-borders --use-attribute-for-id=GEOID")
cat("Vector tiles created.\n")


upload_tiles(input=mbtile_name, access_token=MAPBOX_SECRET_TOKEN,
             username=MAPBOX_USERNAME, tileset_id=TILESET_ID,
             tileset_name=paste0(TILESET_ID, "_z10_z12"), multipart=TRUE)
cat("Tileset uploaded.\n")

spec = read_json("assets/boston.json", simplifyVector=T)
spec$units$bounds = matrix(st_bbox(d), nrow=2, byrow=T)
spec$units$tileset$source$url = str_glue("mapbox://{MAPBOX_USERNAME}.{TILESET_ID}")
spec$units$tilesets$source.url = str_glue("mapbox://{MAPBOX_USERNAME}.{TILESET_ID}")
write_json(spec, paste0("assets/", TILESET_ID, ".json"))
cat("Specification written.\n")
