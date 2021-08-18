library(jsonlite)

nyc_g = read_json("assets/new-york_graph.json")
fips = names(nyc_g)
county = str_sub(fips, 1, 2)
fips = if_else(county %in% c("03", "17", "31"), str_c("340", fips), str_c("360", fips))
write_lines(fips, "~/Downloads/nyc_blocks.txt")

miami_g = read_json("assets/miami_graph.json")
fips = str_c("120", names(miami_g))
write_lines(fips, "~/Downloads/miami_blocks.txt")

phoenix_g = read_json("assets/phoenix_graph.json")
fips = str_c("040", names(phoenix_g))
write_lines(fips, "~/Downloads/phoenix_blocks.txt")
