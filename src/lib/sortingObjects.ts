interface MappedDictionary{
    [key: string]: number;
}


export const convertDictionaryIntoSortedList = (obj:MappedDictionary) => {

    const mappedDictionary =  Object.keys(obj).map(key => [key, obj[key]])

    return mappedDictionary.sort((a, b) => (a[1] as number) - (b[1] as number))

}

export const transpose2Darray = (array:any[][]) => {

    if (array.length === 0) {
        return []
    }

    const newArray = [] as any[]

    for(let i = 0; i < array.length; i++) {
        newArray[i] = Array(array[i].length).fill(0)
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
                    newArray[j][i]= array[i][j]
                }
            }
    console.table(array)
    console.table(newArray)
    
    return newArray
}


export const zip = (arrays:any[][]) =>{
    
    const resultArray = []

    const minLength = Math.min(...arrays.map(a => a.length))

    for(let i = 0; i < minLength; i++) {

        resultArray.push([])

        for(let j = 0; j < arrays.length; j++) {
            (resultArray[resultArray.length-1] as any[]).push(arrays[j][i])
        }
    }
    console.table(resultArray)
    
    return resultArray as any[][]

}

