
let input = [
    [4,3,5] , [2,6,9] , [7,8,1] ,
    [6,8,2],[5,7,1],[4,9,3],
    [1,9,7],[8,3,4],[5,6,2],
    [8,2,6],[1,9,5],[3,4,7],
    [3,7,4],[6,8,2],[9,1,5],
    [9,5,1],[7,4,3],[6,2,8],
    [5,1,9],[3,2,6],[8,7,4],
    [2,4,8],[9,5,7],[1,3,6],
    [7,6,3],[4,1,8],[2,5,9]
  ]
  
  const evaluateBoard = (input) => {
    let length = []
    
    input.forEach(index => {
      if(index.length !== 3){
        console.log('board')
        length.push(false)
      } else {
        length.push(true)
      }
    })
  
    if(input.length !== 27){
      console.log('len')
      length.push(false)
    } else {
      length.push(true)
    }
  
    if(length.includes(false)){
      return false
    } else {
      return true
    }
  }
  
  
  const evaluateEachRow = (input) => {
    let row = [];
    input.forEach(index => {
      if (row.length < 3){
        row.push(index)
        // input.shift(index)
        console.log(row)
        return
      }
    })
    let singleArray = []
    row.forEach(array => {
      array.forEach(index => {
        singleArray.push(index)
      })
    })
  
    console.log(singleArray)
    let truthArray = []
    if (!singleArray.includes(1)){
      truthArray.push(false)
    } else if (!singleArray.includes(2)){
      truthArray.push(false)
    } else if (!singleArray.includes(3)){
      truthArray.push(false)
    } else if (!singleArray.includes(4)){
      truthArray.push(false)
    } else if (!singleArray.includes(5)){
      truthArray.push(false)
    } else if (!singleArray.includes(6)){
      truthArray.push(false)
    } else if (!singleArray.includes(7)){
      truthArray.push(false)
    } else if (!singleArray.includes(8)){
      truthArray.push(false)
    } else if (!singleArray.includes(9)){
      truthArray.push(false)
    } else {
      truthArray.push(true)
    }
    console.log(truthArray)
  }
  
  
  //evalute each set of three indexes as a set
  //evalute each third index as a set 
  //evaluate each index from every third as a set
  
  const isSudoku = (input) => {
    let isBoardValid = evaluateBoard(input)
    let eachRow = evaluateEachRow(input)
  }
  
  isSudoku(input)
  