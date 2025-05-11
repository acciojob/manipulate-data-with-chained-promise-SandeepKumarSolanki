//your JS code here. If required.
let promise = new promise((resolve,reject)=> {
	resolve([1,2,3,4]);
})
promise
.then((data)=> {
	setTimeout(()=>{
		document.getElementById('output').innerText = data.filter((item)=> item%2 === 1);
	},1000)
	resolve(data);
})
.then((data)=> {
	setTimeout(()=>{
		let evenNumber = data.filter((item)=> item%2 === 0)
		document.getElementById('output').innerText = evenNumber.map((item)=>item*2);
	},2000)
})