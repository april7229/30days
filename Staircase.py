def num_ways(n):
    if n == 0 or n==1:
        return 1
    else:
        return num_ways(n-1) + num_ways(n-2)   



def num_ways_bottom_up(n):
    if n == 0 or n == 1: return 1       
