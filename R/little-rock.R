library(tidycensus)
library(tidyverse)
library(sf)
library(spdep)

d = get_decennial("block", variables=c("CBSA"), state="AR",
                  county=119, output="wide", geometry=T)

g = poly2nb(d, queen=F)
ids = str_sub(d$GEOID, 6)
class(g) = "list"
names(g) = ids
g = map(g, ~ ids[.])

write_json(g, "assets/little_rock_graph.json")
