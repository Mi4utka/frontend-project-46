const getCurrentIndent = (depth, intend = 4) => ' '.repeat(intend * depth - 2);
const getClosingIndent = (depth, intend = 4) => ' '.repeat(intend * depth - intend);


const thisValueToString = (diftree) => {
    const iter = (value, depth) => {
        if(!_.isObject(value){
            return value
        })
        const valueEntries = Object.entries(value)
        const valuemapped = value.map([key, val]) => {
        return  `${getCurrentIndent}${key}: ${iter(value)}`}
    }

}