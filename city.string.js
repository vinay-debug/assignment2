city = ['pinkcity', 'delhi','varanasi','panki','Pachmarhi','Pune','mirzapur','kanpur']

//added a for loop to convert into small letter
let p = []
for(let c of city){
    c=c.toLowerCase()
    p.push(c)
}
console.log('small letter array',p)
const startWithP =  p.filter((p) => p.startsWith("p"));
console.log(startWithP)

// push additional city names to array
city.push('banglore')
console.log('added a city into array', city)

//Create another array of string and add one to another
let a = ['vinay', 'sachin','palak']
city = city.concat(a)
console.log('added a array into city', city)

//Sort this array in descending order
city = city.sort()
console.log('sorted array into descending', city)