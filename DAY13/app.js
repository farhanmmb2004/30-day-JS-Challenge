import axios from "axios";
import { adder,obj } from "./app1.js";
import greet from "./app2.js";
import * as temp from "./obj.js";
import _ from 'lodash';
// greet();
// console.log(adder(7,2));
// console.log("hey");
// obj.sayhii();
// temp.math();
let num=[1,2,3,4,5];
let double=_.map(num,(ele)=>2*ele)
// console.log(double);
axios.get('https://jsonplaceholder.typicode.com/posts/1')
.then((response)=>{
    console.log(response.data);
})
.catch((error)=>{
    console.log(error.messege)
})