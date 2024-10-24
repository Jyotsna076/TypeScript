//using for-in loop
/*let i:any;
let nums:number[] = [11, 12, 13, 14, 15];
for(i in nums){
    console.log(nums[i])
}*/

//Array method OR function::-
// 1 - push()
/*let s : any;
let arr:string[] = ["Aman", "Adil", "Shradha", "Ali"];
arr.push("Jyotsna");
for (s in arr){
    console.log(arr[s]);
}

//2- pop():-
let s : any;
let arr:string[] = ["Aman", "Adil", "Shradha", "Ali"];
arr.pop()
for (s in arr){
    console.log(arr[s]);
}

//3- concat:-
let s : any;
let arr1:string[] = ["Aman", "Adil", "Shradha", "Ali"];
let arr2:string[] = ["Adarsh", "Anmol", "Kasyap", "Akay"];
let arr = arr1.concat(arr2)
 for (s in arr){
    console.log(arr[s]);
}

//4-ForEach():-
let s : any;
let arr:string[] = ["Aman", "Adil", "Shradha", "Ali"];
arr.forEach(function (value){
    console.log(value);
});

//5- indexOf():-
let a:any;
let arr:string[] = ["Aman", "Adil", "Shradha", "Ali"];
console.log(arr.indexOf("Aman"));

//6- lastIndexOf():-
let a:any;
let arr:string[] = ["Aman", "Adil", "Shradha", "Adil"];
console.log(arr.lastIndexOf("Aman"));

//7- join():-
let s : any;
let arr:string[] = ["Aman", "Adil", "Shradha", "Ali"];
let a = arr.join("/")
console.log(a)

//8- toString():-
let s : any;
let arr:string[] = ["Aman", "Adil", "Shradha", "Ali"];
let str = arr.toString();
console.log(str);

//9- Reverse():-
let s : any;
let arr:string[] = ["Aman", "Adil", "Shradha", "Ali"];
let str = arr.reverse();
console.log(str);

//10- shift():-
let s : any;
let arr : string[] = ["Aman", "Adil", "Shradha", "Ali"];
arr.shift();
for(s in arr){
    console.log(arr[s]);
}

//11- unshift():-
let s : any;
let arr : string[] = ["Aman", "Adil", "Shradha", "Ali"];
arr.unshift("Aman");

for(s in arr){
    console.log(arr[s])
};

//12- slice():-
let s : any;
let arr : string[] = ["Aman", "Adil", "Shradha", "Ali"];
let arr2 = arr.slice(0,2);
for(s in arr){
    console.log()
};

//13- sort():-
let s : any;
let arr : string[] = ["Aman", "Adil", "Shradha", "Ali"];
arr.sort();
for (s in arr){
    console.log(arr[s]);
};

//14- splice():-
let s : any;
let arr : string[] = ["Aman", "Adil", "Shradha", "Ali"];
arr.splice(0,1, "kasyap" );
for (s in arr){
    console.log(arr[s]);
};*/

//for of loop:-
let s : any;
let arr : string[] = ["Aman", "Adil", "Shradha", "Ali"];
for (s of arr){
    console.log(arr[s]);
}



