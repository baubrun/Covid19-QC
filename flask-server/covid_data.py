# To add a new cell, type '# %%'
# To add a new markdown cell, type '# %% [markdown]'
# %%
import httplib2
from pprint import pprint
import requests
from bs4 import BeautifulSoup
import webbrowser
import re


# %%
url = "https://www.quebec.ca/sante/problemes-de-sante/a-z/coronavirus-2019/situation-coronavirus-quebec/"


# %%
resp = requests.get(url)


# %%
# resp


# %%
soup = BeautifulSoup(resp.text, "lxml")


# %%
# type(soup)


# %%
# pprint(soup)


# %%
table = soup.find("table")


# %%
# print(table.prettify())


# %%
# p_tag_in_table = table.find_all("p")


# %%
def get_p_tags(data):
    return [str(i) for i in data.find_all("p")]


# %%
confirmes_p_tags = get_p_tags(table)


# %%
# confirmes_p_tags


# %%
def find_line(d):
    l = []
    for i in range(len(d)):
        if d[i].startswith("<p>Données cumulatives"):
            l.append(d[i])
    return l[0]


# %%
date_str = find_line(confirmes_p_tags)


# %%
# date_str


# %%
date_str_ignore_ascii = date_str.encode("ascii", "replace")


# %%
# date_str_ignore_ascii


# %%
date_str_decode_utf8 = date_str_ignore_ascii.decode("UTF8")


# %%
# date_str_decode_utf8


# %%
date_str_regex = re.compile("\d{1,2}\W\w+\W\d{4}")


# %%
# date_str_regex


# %%
date_found = date_str_regex.findall(date_str_decode_utf8)


# %%
# date_found


# %%
date = " ".join(date_found[0].split("?"))


# %%
# date


# %%
donnees_confirmes = confirmes_p_tags[3:]


# %%
# donnees_confirmes

# %% [markdown]
# #### Slice Regions

# %%
slice_regions = donnees_confirmes[0::2]


# %%
# slice_regions

# %% [markdown]
# #### Regex Régions

# %%
def regex_regions(r):
    regex = [re.findall(r"\w+", noms) for noms in r]
    les_noms = []
    regex_tranches = [i for i in regex]
    for m in regex_tranches:
        if len(m) > 1:
            nom = "-".join(m)
            les_noms.append(nom)
        else:
            les_noms.append(m[0])
    les_noms_2 = []
    for i in les_noms:
        les_noms_2.append(re.sub("p-\d.-|p-|-p", "", i))
    return les_noms_2        


# %%
regions = regex_regions(slice_regions)


# %%
# regions

# %% [markdown]
# #### Slice Confirmés

# %%
# donnees_confirmes[1::2]


# %%
slice_confirmes = donnees_confirmes[1::2]


# %%
# slice_confirmes

# %% [markdown]
# #### Regex Nombres

# %%
def nombre_de_cas(c):
    if len(c) == 1:
        regions_a_determine = []
        regex = re.findall(r"\d+", c[0])
        regions_a_determine = int(regex[0])
        return regions_a_determine
    else:
        les_cas = []
        for i in c:
            chiffre_regex = re.findall(r"\d+", i)
            les_cas.append(int("".join(chiffre_regex)))
        return les_cas


# %%
confirmes = nombre_de_cas(donnees_confirmes[1::2]) # error


# %%
confirmes

# %% [markdown]
# #### Régions Aleat

# %%
# # total 21
# len(confirmes)

# %% [markdown]
# ### Cas de Décès

# %%
soup_deces = soup.find_all("table")


# %%
# len(soup_deces)


# %%
# soup_deces


# %%
donnees_deces = soup_deces[2]


# %%
donnees_deces


# %%



# %%
p_tag_deces = get_p_tags(donnees_deces)
# p_tag_deces = [str(i) for i in donnees_deces.find_all("p")]


# %%
# p_tag_deces[4::2]


# %%
# len(p_tag_deces[1::2])


# %%
deces = nombre_de_cas(p_tag_deces[4::2])


# %%
# deces


# %%
# len(deces)


# %%
donnees_covid = []
for i in range(len(confirmes)):
    donnees_covid.append(dict(confirmes=confirmes[i], date=date,
                  deces=deces[i],  region=regions[i]))


# %%
data = donnees_covid 


# %%
data

