library(tidycensus)
library(tidyverse)
library(sf)
library(spdep)
library(jsonlite)

vars = c(pop="H006001", pop_white="H006002", pop_black="H006003",
         pop_hisp="H007010")

d1 = get_decennial("block", variables=vars, state="MA",
                  county="Suffolk", output="wide", geometry=T)
d2 = get_decennial("block", variables=vars, state="MA",
                  county="Middlesex", output="wide", geometry=T)
d3 = get_decennial("block", variables=vars, state="MA",
                  county="Norfolk", output="wide", geometry=T)
d = bind_rows(d1, d2, d3)

write_rds(d, "R/boston.rds", compress="gz")

g = poly2nb(d, queen=F)
ids = str_sub(d$GEOID, 4)
class(g) = "list"
names(g) = ids
g = map(g, ~ ids[.])

write_json(g, "assets/boston_graph.json")
