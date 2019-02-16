// Initialize both first and second largest
// first = max( arr[ 0 ], arr[ 1 ] )
// second = min( arr[ 0 ], arr[ 1 ] )
// 2) Loop through remaining elements( from 3rd to end )
// a) If the current element is greater than first, then update first
// and second.
//     b) Else if the current element is greater than second then update
// second
3) Return( first + second )

// Given a list of integers, write a function that returns the largest sum of non - adjacent numbers.Numbers can be 0 or negative.

// For example, [ 2, 4, 6, 2, 5 ] should return 13, since we pick 2, 6, and 5.[ 5, 1, 1, 5 ] should return 10, since we pick 5 and 5.


# Python3 program to find largest
# pair sum in a given array

# Function to return largest pair
# sum.Assumes that there are
# at - least two elements in arr[]
def findLargestSumPair( arr, n ):

# Initialize first and second
# largest element
if arr[ 0 ] > arr[ 1 ]:
    first = arr[ 0 ]
second = arr[ 1 ] 
      
    else:
first = arr[ 1 ]
second = arr[ 0 ]


# Traverse remaining array and
# find first and second largest
# elements in overall array
for i in range( 2, n ):

# If current element is greater
# than first then update both
# first and second
if arr[ i ] > first:
    second = first
first = arr[ i ]


# If arr[ i ] is in between first
# and second then update second
elif arr[ i ] > second and arr[ i ] != first:
second = arr[ i ]

return ( first + second )

# Driver program to test above function*/ 
arr = [ 12, 34, 10, 6, 40 ]
n = len( arr )
print( "Max Pair Sum is",
    findLargestSumPair( arr, n ) )


}
