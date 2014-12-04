from parse import *
from analysis import *
from gmaps import Directions
import time
api = Directions('AIzaSyB7SerbrEj9rHCoedm02nE3bImBR_j4DtU')

commuter_file = 'data/merck_zip_data'
commuters = get_commuter(commuter_file)
dest_zip = '08807'

def test():
  zip_hist_cnt = get_histo(commuters)
  #get all zip codes 
  zips = zip_hist_cnt.keys()
  #turn dict into list
  mos_com = zip_hist_cnt.most_common()
  #get directions for each person
  i=0
  total_time_seconds = 0
  while i < len(zips):
    print i
    zipcode = str(mos_com[i]).split("'")[1]
    num_in_zipcode = int(str(str(mos_com[i]).split(")")[1]).split(", ")[1])

    route = api.directions(zipcode, dest_zip)
    dict_route = get_directions(route)

    #increment to next zipcode 
    i+=1

    #total time is time it took for zipcode * number of commuters
    # in that zipcode (num of people can be thought of as a weight)
    distance = get_distance(dict_route)    
    #if distance < 160934: #if less than 100 mi
    total_time_seconds+=get_time(dict_route)*num_in_zipcode
     # print distance
    
    #to try to not hit the rate limit
    time.sleep(.6)
    
  return total_time_seconds
  
def get_time(dict_route):
  '''
  Function to get time to a dest
  Takes dict (from google maps) with information for single route
  Returns time, in seconds, the route took
  '''
  return dict_route['legs']['distance']['value']

def get_distance(dict_route):
  '''
  Function to get distance to a dest
  Takes dict (from google maps) with information for single route
  Returns distance, in meters, the route took
  '''
  return dict_route['legs']['duration']['value']

def get_histo(commuters):
	return zip_hist(commuters)

