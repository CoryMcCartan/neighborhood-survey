STATE = "AZ"
COUNTIES = c("Maricopa", "Pinal")
TILESET_ID = "phoenix"
MAPBOX_SECRET_TOKEN = Sys.getenv("MAPBOX_SECRET_TOKEN")
MAPBOX_USERNAME = "cmccartan"

library(tidycensus)
library(tidyverse)
library(vroom)
library(sf)
library(spdep)
library(jsonlite)
library(mapboxapi)

# Census variables you wish to include in the tileset
vars = c(pop="P009001", pop_white="P009005", pop_black="P009006",
         pop_hisp="P009002")

d = get_decennial("block", variables=vars, state=STATE, county=COUNTIES,
                  output="wide", geometry=T)
cat("Census data downloaded.\n")

# add partisanship info
state_fips = unique(str_sub(d$GEOID, 1, 2))
part_d = vroom("R/data/pid-states-block-partisan-counts.csv", col_types="cddd") %>%
    transmute(GEOID=if_else(str_length(vb.tsmart_census_id) == 15,
                            vb.tsmart_census_id, str_c("0", vb.tsmart_census_id)),
              dem=(democrats+0.5)/(registrants+1))

# make graph
{
g = poly2nb(d, queen=F)
ids = str_sub(d$GEOID, 4)
class(g) = "list"
names(g) = ids
g = map(g, ~ ids[.])

write_json(g, paste0("assets/", TILESET_ID, "_graph.json"))
}
cat("Adjacency graph created.\n")

# fill in missing partisanship info
jd = left_join(d, part_d, by="GEOID")
pop_mis = str_sub(jd$GEOID[jd$pop > 10 & is.na(jd$dem)], 4)
fill_val = map_dbl(pop_mis, ~ mean(jd$dem[str_sub(jd$GEOID, 4) %in% g[[.]]], na.rm=T))
jd$dem[match(str_c("040", pop_mis), jd$GEOID)] = fill_val
jd$dem = coalesce(jd$dem, 0.5)

d = jd


mbtile_name = paste0("R/data/", TILESET_ID, ".mbtiles")
d %>%
    mutate(GEOID = str_sub(GEOID, 4)) %>%
tippecanoe(mbtile_name, layer_name="blocks",
           min_zoom=10, max_zoom=12,
           other_options="--coalesce-densest-as-needed --detect-shared-borders")
cat("Vector tiles created.\n")


upload_tiles(input=mbtile_name, access_token=MAPBOX_SECRET_TOKEN,
             username=MAPBOX_USERNAME, tileset_id=TILESET_ID,
             tileset_name=paste0(TILESET_ID, "_z10_z12"), multipart=TRUE)
cat("Tileset uploaded.\n")

spec = read_json("assets/boston.json", simplifyVector=T)
spec$units$bounds = matrix(st_bbox(d), nrow=2, byrow=T)
spec$units$tileset$source$url = str_glue("mapbox://{MAPBOX_USERNAME}.{TILESET_ID}")
write_json(spec, paste0("assets/", TILESET_ID, ".json"), auto_unbox=T)
cat("Specification written.\n")
