"""
Title: loadGroupStats
Description: Takes data from filtered and parshed
data files and utilizes statistics to print output and create visualizations.
Created on Wed Oct 29 19:37:04 2014

@author: HoneyBadgers
"""

from loadGroupStats import *
import numpy as np
import matplotlib.pyplot as plt

# graph and file parameters
dataFiles = ['westpoint_commute_filtered_01',
             'whitehouse_commute_filtered_01',
             'kenilworth_commute_filtered_01',
             'bridgewater_commute_filtered_01']
graphTitles = ['Westpoint Commute Time', 'Whitehouse Commute Time',
               'Kenilworth Commute Time', 'Bridgewater Commute Time']
stupidColors = [['r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r'],
                ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
                ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']]
graphColors = ['r', 'g', 'b', 'orange']

# print overall average commute w/o highlighted
# cycle through each file, title name, and graph parameters
for dataFile, graphTitle, graphColor in zip(dataFiles,
                                            graphTitles, graphColors):
    groups, groupStats = loadGroupStats('../filteredData/' + dataFile)
    x = []
    y = []
    error = []

    for group in groupStats:
        x.append(group)
        y.append(groupStats[group][0])
        error.append(groupStats[group][3])

    # set up plots
    plt.figure(graphTitle)
    # clear bar chart with error bars based on std. dev.
    plt.bar(np.arange(len(x)), y, yerr=error, align='center',
            color=graphColor, ecolor='k', linewidth=2)
    plt.xticks(np.arange(len(x)), x)
    plt.ylabel('Average Commute Time (mins)')
    plt.title(graphTitle)
    plt.axis([-1, 12, 0, 120])

    # print graphs and save
    plt.savefig('../publishing/' + dataFile + '.png', bbox_inches='tight')
    plt.savefig('../publishing/' + dataFile + '.pdf', bbox_inches='tight')
    plt.show()

    # print overall statistics
    print graphTitle
    print 'Average Employee Commute Time:', np.average(y), ' mins'
    print 'Standard Deviation of Commute Times:', np.std(y), ' mins'
    print 'Max Average Employee Commute Time:', max(y), ' mins'
    print 'Min Average Employee Commute Time:', min(y), ' mins\n'

    # print group statistics
    for org, stats in groupStats.iteritems():
        print 'Statistics for Organization:', org
        print 'Average Employee Commute Time: ', stats[0], ' mins'
        print 'Standard Deviation of Commute Time: ', stats[3], ' mins'
        print 'Max Employee Commute Time: ', stats[1], ' mins'
        print 'Min Employee Commute Time: ', stats[2], ' mins \n'












