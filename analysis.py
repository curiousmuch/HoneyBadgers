#Library of functions to analyze data

#needed for ngram function
from itertools import tee, islice

#for zip_hist
import collections

def get_zip_number(zipcode_hist):
  """
  Function to get the zip codes and count out of Counter object
  Takes Counter with zipcode info as key and number of times occured
  Returns 
  """

def org_hist(commuter_dict):
  """
	Function to get the histogram of all orgs
  Takes dictionary with commuter information
  Returns histogram, as Counter which is a type of dict, 
  """
  #initalise org list
  org_list=[]
  #get commuter info into list
  commuter_list = commuter_dict.items()
  #for each entry in list split to get zip code
  # and append to zipcode list
  for item in commuter_list:
    org_list.append(str(item).split("'")[3])
  #from zipcode list get histogram
  org_hist = collections.Counter(ngrams(org_list,1))

  return org_hist

def org_zip_hist(commuter_dict, org):
  """
  Function to get the histogram of all zip codes inside specific org (A-J)
  Takes dictionary with commuter information and org letter
  Returns histogram, as Counter which is a type of dict 
  """
  #initalise zip code list
  zipcode_list=[]
  #get commuter info into list
  commuter_list = commuter_dict.items()
  #for each entry in list split to get zip code
  # and append to zipcode list if part of specifc org
  for item in commuter_list:
    if str(item).split("'")[3] == 'Org '+str(org).upper():
      zipcode_list.append(str(item).split("'")[5])
  #from zipcode list get histogram
  zipcode_hist = collections.Counter(ngrams(zipcode_list,1))

  return zipcode_hist

def dist_between_zip():
  """
  Function to get the average, min-max, and std dev of distance in a group of zipcodes. 
  """

def zip_hist(commuter_dict):
  """
  Function to get the histogram of all zip codes
  Takes dictionary with commuter information
  Returns histogram, as Counter which is a type of dict, 
  """
  #initalise zip code list
  zipcode_list=[]
  #get commuter info into list
  commuter_list = commuter_dict.items()
  #for each entry in list split to get zip code
  # and append to zipcode list
  for item in commuter_list:
    zipcode_list.append(str(item).split("'")[5])
  #from zipcode list get histogram
  zipcode_hist = collections.Counter(ngrams(zipcode_list,1))

  return zipcode_hist


#From Abhinav Sarkar's StackOverFlow.com's answer
def ngrams(lst, n):
  """
  Function creates a n-gram based off of passed list
  Takes list to be ngramed and number of gram n. Histogram is n=1
  Returns a collection. To get into dictionay use:
    import collections
    dict = collections.Counter(ngrams(list,1))
  """	
  tlst = lst
  while True:
    a, b = tee(tlst)
    l = tuple(islice(a, n))
    if len(l) == n:
      yield l
      next(b)
      tlst = b
    else:
      break
