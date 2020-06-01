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
p_tag_in_table = table.find_all("p")


# %%
# pprint(p_tag_in_table)


# %%
# p_tag_in_table[1]


# %%
# type(p_tag_in_table)


# %%
donnees_en_chaine = [str(tag) for tag in table.findAll(re.compile("p"))]


# %%
# donnees_en_chaine


# %%
date_str = donnees_en_chaine[2]


# %%
total_confirmes_str = donnees_en_chaine[-1]


# %%
# total_confirmes_str


# %%
total_confirmes = int("".join(re.findall("\d+",total_confirmes_str ))) 


# %%
# total_confirmes


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
date_str_regex = re.compile("(\s+\d{2}\s+\w+\?\d{4})")


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
donnees_nommees = donnees_en_chaine[3:]


# %%
# donnees_nommees

# %% [markdown]
# #### Slice Regions

# %%
slice_regions = donnees_nommees[::2]


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
slice_confirmes = donnees_nommees[1::2]


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
confirmes = nombre_de_cas(slice_confirmes)


# %%
# confirmes

# %% [markdown]
# #### Régions Aleat

# %%
# total 21
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
# donnees_deces


# %%
# p_tag_deces = soup_deces.findall("p")
p_tag_deces = [str(i) for i in donnees_deces.find_all("p")]


# %%
# p_tag_deces


# %%
total_p_tag_deces = p_tag_deces[-1]


# %%
# total_p_tag_deces


# %%
p_tag_deces = p_tag_deces[3:]


# %%
# cas_de_deces = p_tag_deces[1::2]
# p_tag_deces[1::2]


# %%
# len(p_tag_deces[1::2])


# %%
deces = nombre_de_cas(p_tag_deces[1::2])


# %%
# deces


# %%
# len(deces)


# %%
donnees_covid = []
for i in range(len(confirmes)):
    donnees_covid.append(dict(confirmés=confirmes[i], date=date,
                  décès=deces[i],  région=regions[i]))


# %%
data = donnees_covid 

