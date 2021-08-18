library(tidycensus)
library(tidyverse)
library(sf)
library(spdep)
library(jsonlite)
library(mapboxapi)

vars = c(pop="P009001", pop_white="P009005", pop_black="P009006",
         pop_hisp="P009002", necta="NECTADIV", subd="COUSUB")

d = get_decennial("block", variables=vars, state="MA",
                  county=c("Suffolk", "Middlesex", "Norfolk", "Essex", "Plymouth"),
                  output="wide", geometry=F)
write_rds(d, "R/boston_demg.rds", compress="gz")

geom_d = read_sf("R/data/MA_blocks/tl_2019_25_tabblock10.shp")

jd = inner_join(select(geom_d, GEOID=GEOID10, geometry), d, by="GEOID")
metro_d = filter(jd, necta %in% c(71654, 76524)) %>%
    select(GEOID, everything(), -NAME, -necta, -subd) %>%
    mutate(GEOID = str_sub(GEOID, 4))

{
g = poly2nb(metro_d, queen=F)
ids = metro_d$GEOID
class(g) = "list"
names(g) = ids
g = map(g, ~ ids[.])

write_json(g, "assets/boston_graph.json")
}

tippecanoe(metro_d, "R/data/boston.mbtiles", layer_name="blocks",
           min_zoom=10, max_zoom=12,
           other_options="--coalesce-densest-as-needed --detect-shared-borders --use-attribute-for-id=GEOID")


upload_tiles(input="R/data/boston.mbtiles", access_token=Sys.getenv("MAPBOX_SECRET_TOKEN"),
             username="cmccartan", tileset_id="boston_blocks_v2",
             tileset_name="boston_z10_z12", multipart=TRUE)
