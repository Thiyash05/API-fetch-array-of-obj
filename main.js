fetch('https://api.tvmaze.com/shows/1/akas')
.then((res)=>res.json())
.then((msg)=>{
	for(a of msg){
		console.log(a)
		createUi(a)
	}
})

let createUi=((a)=>{
	console.log(a.name)
	console.log(a.country.name)
	console.log(a.country.timezone)
})
