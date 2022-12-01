
def stockBuySell(arr):
	n = len(arr)
	profit = 0
	if (n == 1):
		return

	i = 0
	while (i < (n - 1)):
		while ((i < (n - 1)) and
				(arr[i + 1] <= arr[i])):
			i += 1

		if (i == n - 1):
			break

		buyIdx = i
		i += 1

		while ((i < n) and (arr[i] >= arr[i - 1])):
			i += 1

		sellIdx = i - 1

		profit = calculateProfit(buyIdx,sellIdx,arr,profit)
	return profit

def calculateProfit(buyIdx,sellIdx,arr,profit):
	if(profit == 0):
		lotCount = 1
	else:
		lotCount = profit / arr[buyIdx]
	profit = ((arr[sellIdx]) * lotCount)
	return profit

inp = input("Enter 1 to enter an array or enter 2 to use pre determined arrays:")
if(inp == '1'):
	arr = input("Enter a comma separated array with size of at least 2: ")
	arr = list(map(int,arr.split(',')))
	print("Max Profit of arr is", stockBuySell(arr))
else:
	arr1 =  [20, 5, 15, 35, 10, 50, 80, 40]
	arr2 =  [100, 50, 200, 400, 20, 60, 10, 90, 300, 200]
	arr3 =  [20, 30, 40, 10, 5, 80, 100, 60]
	arr4 =  [20, 10, 5, 30, 60, 90, 40, 50]
	print("Max Profit of arr1 is",stockBuySell(arr1))
	print("Max Profit of arr2 is",stockBuySell(arr2))
	print("Max Profit of arr3 is", stockBuySell(arr3))
	print("Max Profit of arr4 is", stockBuySell(arr4))

