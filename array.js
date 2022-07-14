//creating 2 dimensional arrays
Array.matrix = function(rows,cols,value)
{
    let arr = []
    for(let i=0; i<rows;i++)
    {
        var columns = []
        
        for (let j=0;j<cols ;j++)
        {
            columns[j] = value
        }
        arr[i] = columns
    }

    return arr
}
const arr = Array.matrix(5,5,3)
console.log(arr);
//printing 2 dimensional arrays

for(let i=0; i<arr.length;i++)
{
    
    for(let j=0;j<arr[i].length;j++)
    {
        console.log(arr[i][j]+', ');
    }
    console.log('');
}

//array of ojects

function Points(x,y)
{
    this.x = x
    this.y = y
}
function createPoints()
{
    return `(${this.x},${this.y})`
}

let p1 = createPoints.call(new Points(2,3))
let p2 = createPoints.call(new Points(5,3))
console.log(p2);