
    function stockBuySell(arr) {
        let n = arr.length
        let profit = 0
        let buyIdx = 0
        let sellIdx = 0
        if (n == 1)
            return;

        let i = 0;
        while (i < n - 1) {

            while ((i < n - 1) && (arr[i + 1] <= arr[i]))
                i++;

            if (i == n - 1)
                break;

            buyIdx = i++;

            while ((i < n) && (arr[i] >= arr[i - 1]))
                i++;

            sellIdx = i - 1;
            profit = calculateProfit(buyIdx,sellIdx,arr,profit)
        }
        return profit
    }
    function calculateProfit(buyIdx,sellIdx,arr,profit)
    {
    let lotCount = 0

    if(profit == 0)
    {
        lotCount = 1
    }
    else
    {
        lotCount = profit / arr[buyIdx]
    }
    profit = ((arr[sellIdx]) * lotCount)
    return profit 
    }
const prompt = require("prompt-sync")();

let inp = prompt("Enter 1 to enter an array or enter 2 to use pre determined arrays:")
if(inp == "1"){
    inp = prompt("Enter a comma separated array with size of at least 2: ")
    let arr = inp.split(',')
    arr = arr.map((element)=>{
        return Number(element)
    })
    console.log("Max Profit of arr is", stockBuySell(arr))
}
else{
    let arr1 =  [20, 5, 15, 35, 10, 50, 80, 40]
	let arr2 =  [100, 50, 200, 400, 20, 60, 10, 90, 300, 200]
	let arr3 =  [20, 30, 40, 10, 5, 80, 100, 60]
	let arr4 =  [20, 10, 5, 30, 60, 90, 40, 50]
	console.log("Max Profit of arr1 is",stockBuySell(arr1))
	console.log("Max Profit of arr2 is",stockBuySell(arr2))
	console.log("Max Profit of arr3 is", stockBuySell(arr3))
	console.log("Max Profit of arr4 is", stockBuySell(arr4))

}