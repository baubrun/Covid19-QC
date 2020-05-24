#!/usr/bin/env python
# coding: utf-8

# In[1]:


import httplib2
from pprint import pprint
import requests
from bs4 import BeautifulSoup
import webbrowser
import re


# In[2]:


url = "https://www.quebec.ca/sante/problemes-de-sante/a-z/coronavirus-2019/situation-coronavirus-quebec/"


# In[3]:


resp = requests.get(url)
# resp


# In[4]:


soup = BeautifulSoup(resp.text, "lxml")


# In[5]:


# type(soup)


# In[6]:


# pprint(soup)


# In[7]:


table = soup.find("table")


# In[8]:


# print(table.prettify())


# In[9]:


p_tag_in_table = table.find_all("p")


# In[10]:


# pprint(p_tag_in_table)


# In[11]:


# p_tag_in_table[1]


# In[12]:


# type(p_tag_in_table)


# In[13]:


donnees_en_chaine = [str(tag) for tag in table.findAll(re.compile("p"))]


# In[14]:


# donnees_en_chaine


# In[15]:


date_str = donnees_en_chaine[2]


# In[16]:


total_confirmes_str = donnees_en_chaine[-1]


# In[17]:


# total_confirmes_str


# In[18]:


total_confirmes = int("".join(re.findall("\d+",total_confirmes_str ))) 


# In[19]:


# total_confirmes


# In[20]:


# date_str


# In[21]:


date_str_ignore_ascii = date_str.encode("ascii", "replace")


# In[22]:


# date_str_ignore_ascii


# In[23]:


date_str_decode_utf8 = date_str_ignore_ascii.decode("UTF8")


# In[24]:


# date_str_decode_utf8


# In[25]:


date_str_regex = re.compile("\d{2}\?\w+\?\d{4}")


# In[26]:


date_found = date_str_regex.findall(date_str_decode_utf8)


# In[27]:


# date_found


# In[28]:


date = " ".join(date_found[0].split("?"))


# In[29]:


# date


# In[30]:


donnees_nommees = donnees_en_chaine[3:]


# In[31]:


# donnees_nommees


# #### Slice Regions

# In[32]:


slice_regions = donnees_nommees[::2]


# In[33]:


# slice_regions


# #### Regex Régions

# In[34]:


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


# In[35]:


regions = regex_regions(slice_regions)


# In[36]:


# regions


# #### Slice Confirmés

# In[42]:


slice_confirmes = donnees_nommees[1::2]


# In[43]:


# slice_confirmes


# #### Regex Nombres

# In[44]:


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


# In[45]:


confirmes = nombre_de_cas(slice_confirmes)


# In[46]:


# confirmes


# #### Régions Aleat

# In[72]:


# total 21
# len(confirmes)


# ### Cas de Décès

# In[54]:


soup_deces = soup.find_all("table")


# In[55]:


# len(soup_deces)


# In[56]:


# soup_deces


# In[57]:


donnees_deces = soup_deces[2]


# In[58]:


# donnees_deces


# In[59]:


# p_tag_deces = soup_deces.findall("p")
p_tag_deces = [str(i) for i in donnees_deces.find_all("p")]


# In[60]:


# p_tag_deces


# In[61]:


total_p_tag_deces = p_tag_deces[-1]


# In[62]:


# total_p_tag_deces


# In[63]:


p_tag_deces = p_tag_deces[3:]


# In[64]:


# cas_de_deces = p_tag_deces[1::2]
# p_tag_deces[1::2]


# In[65]:


# len(p_tag_deces[1::2])


# In[66]:


deces = nombre_de_cas(p_tag_deces[1::2])


# In[67]:


# deces


# In[73]:


# len(deces)


# In[69]:


donnees_covid = []
for i in range(len(confirmes)):
    donnees_covid.append(dict(confirmés=confirmes[i], date=date,
                  décès=deces[i],  région=regions[i]))


# In[70]:


# donnees_covid 

data = donnees_covid
    
