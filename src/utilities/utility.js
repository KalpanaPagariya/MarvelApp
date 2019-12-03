/**
 * This function filters the character records based on filtered condition sent in request.
 * @param {*} data 
 * @param {*} filterCondition 
 */
export const filterCharacters = (data,filterRecord) =>{
    const filteredData = data.filter(record=>{
        if(record.id === filterRecord.id){
            return record;
        }
    });
    return filteredData;
}