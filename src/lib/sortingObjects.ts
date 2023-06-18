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

export const zip = (a:any[], b:any[]) => {
    if(a.length>b.length) {
        return []
    }

    const resultArray = []

    for(let i = 0; i < a.length; i++) {
        resultArray.push([a[i], b[i]])
    }

    return resultArray

}