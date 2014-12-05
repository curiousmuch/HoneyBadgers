"""
Title: parseGroups, clear outliers
Description: Seperates file into numpy array and clears outliers
Created on Wed Oct 29 19:37:04 2014

@author: HoneyBadgers
"""

from numpy import *
set_printoptions(threshold=nan)


def parseGroups(filename):
    inputfile = filename

    # load array of employee id codes
    emp = genfromtxt(inputfile, delimiter=',',
                     dtype=None,
                     skip_header=1, usecols=(0))

    # load array of organizations and filer "org"
    org = genfromtxt(inputfile, delimiter=',',
                     dtype=None,
                     skip_header=1, usecols=(1))

    for index in range(0, len(org)):
        org[index] = org[index][4:]

    # load array of distances and filter "mi"
    dis = genfromtxt(inputfile, dtype=None,
                     delimiter=',',
                     skip_header=1, usecols=(4))
    for index in range(0, len(dis)):
        row = str(dis[index]).split()
        m = 0
        ft = 0
        for i, cell in enumerate(row):
            if cell == 'mi':
                m = float(row[i-1])
            if cell == 'ft':
                ft = float(row[i-1])
        dis[index] = m + ft/5280

    # load array of durations and filter text
    dur = genfromtxt(inputfile, delimiter=',',
                     dtype=None,
                     skip_header=1, usecols=(3))
    for index in range(0, len(dur)):
        row = str(dur[index]).split()
        h = 0
        m = 0
        for i, cell in enumerate(row):
            if cell == 'hour' or cell == 'hours':
                h = int(row[i-1])
            if cell == 'min' or cell == 'mins':
                m = int(row[i-1])
        dur[index] = 60*h + m

    # recombine arrays and sort according to groups
    sortable = column_stack((org, emp, dur, dis))
    sortable = sortable[argsort(sortable[:, 0])]
    return sortable


def clearOutliers(inputFile, outputFile):

    data = open(inputFile, 'r')
    filteredData = open(outputFile, 'w+')

    data.readline()
    outlier_count = 0
    for line in data.readlines():
        row = line.split(',')
        cell = row[4].split(' ')
        f = 0
        m = 0
        for index, item in enumerate(cell):
            if item == 'mi':
                m = float(cell[index-1])
            if item == 'ft':
                f = float(cell[index-1])
        if row[4] == '1' or row[4] == '2' or row[4] == '3' or m > 100:
            outlier_count = outlier_count + 1
        elif (m + f/5280) <= 100:
            print line
            filteredData.write(str(line))
    print 'outliers:', outlier_count
    return
