"""
Title: loadGroupStats
Description: Takes data from parsed  file and sorts into groups and calculates
various stats.
Created on Wed Oct 29 19:37:04 2014

@author: HoneyBadgers
"""

from parse_commute_files import *
from collections import OrderedDict


def loadGroupStats(filename):

    dat = parseGroups(filename)
    # create lists with the name of each  group
    groups = {}
    gStat = OrderedDict()
    for group in unique(dat[:, 0]):
        groups.update({group: []})
        gStat.update({group: []})
        for row in dat:
            if row[0] == group:
                groups[group].append([row[0], float(row[1]),
                                     float(row[2]), float(row[3])])
        groups[group] = array(groups[group])

    # find average commute time
    for group in gStat:
        dis = groups[group][:, 2]
        disAvg = average(dis.astype(float))
        gStat[group].append(disAvg)

    # find min and max commute times per group
    for group in gStat:
        durMax = max(groups[group][:, 3])
        durMin = min(groups[group][:, 3])
        gStat[group].append(durMax)
        gStat[group].append(durMin)

    # find standard deviation
    for group in gStat:
        dur = groups[group][:, 2]
        durStd = std(dur.astype(float))
        gStat[group].append(durStd)
    x = []
    y = []
    error = []
    for group in gStat:
        x.append(group)
        y.append(gStat[group][0])
        error.append(gStat[group][3])

    return groups, gStat

