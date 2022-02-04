const tD1 = [
    ['', '', ''],
    ['', '*', ''],
    ['', '', ''],
]

const tD2 = [
    ['*', '*', ''],
    ['', '*', ''],
    ['', '', ''],
]

const tD3 = [
    ['*', '*', '*'],
    ['', '*', ''],
    ['', '', ''],
]


const tD4 = [
    ['*', '*', '*'],
    ['', '', ''],
    ['', '*', ''],
]


function cellSimulator(activeCell){
    let cell = 0;
    let result = 0;
    let active = 0;
    let line = '';
    let targetCell = 0;
    let resultArray = [];

    function getCell(row, col){
        if(row < 0 || col < 0) return 0;
        if(row >= activeCell.length) return 0;
        if(col >= activeCell[row].length) return 0;
        if(activeCell[row][col] === activeCell[1][1]){
            // console.log("second check");
            return 1
        } 
        return 0;
    }

    
    for( let row = 0; row < activeCell.length; row++){ 
       
        for(let col = 0; col < activeCell[row].length; col++){  
            
            if(activeCell[row][col] === activeCell[1][1]){
                // console.log("first check")
                cell  = 1;
                line += '*';
            }else{
                let shadedCell = 0
                
                shadedCell += getCell(row -1, col - 1)
                shadedCell += getCell(row -1, col )
                shadedCell += getCell(row -1, col + 1)

                shadedCell += getCell(row, col - 1) 
                shadedCell += getCell(row, col +1) 
                                
                shadedCell += getCell(row + 1, col -1)
                shadedCell += getCell(row + 1, col )
                shadedCell += getCell(row + 1, col +1)

                line += shadedCell             
                targetCell += shadedCell
            }
            
            if(getCell(row, col) === 1){
                active += 1;
            } 
        }
        
        result = active - cell
        
    }
    
    resultArray = line.split(''); 

    const createGroups = (arr, numGroups) => {
        const perGroup = Math.ceil(arr.length / numGroups);
        return new Array(numGroups)
          .fill('')
          .map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup));
    }

    let finalArray = createGroups(resultArray, 3);
    let twoDValue = finalArray[1][1];
    
    const tDVBoolean = (twoDValue) =>{
        if(twoDValue === '*'){
            return false;
        }else{
            return true;
        }
    }
        
    const answer = () => {

        console.log(tDVBoolean ? result : twoDValue)

        return tDVBoolean ? result : twoDValue; 
    } 
    
    answer(tDVBoolean);
}

cellSimulator(tD4)
