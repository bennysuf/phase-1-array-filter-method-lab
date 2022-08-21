
function findMatching (arr, string) {
 return arr.filter(function (matchingString){
   return matchingString.toUpperCase() === string.toUpperCase()
 })
}


function fuzzyMatch(arr, letters) {
  return arr.filter(function (names) {
    return names.startsWith(letters) 
  })
}

function matchName(arr, string) {
   return arr.filter(function (matchingString) {
     return matchingString["name"] === string 
    })
}