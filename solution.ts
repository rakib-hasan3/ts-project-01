// problem -1

type Input1 = string|number|boolean;

function formatValue(value: Input1){
    if( typeof value ==="string" ){
        return value.toUpperCase();   
    }
    if(typeof value === "number"){
        return value*2;
    }
    if(typeof value === "boolean"){
         
        return !value;
    }


    return value;
}

console.log(formatValue("roohim"));
console.log(formatValue(5));
console.log(formatValue(false));


// problem -2

 
type Input = string | any[];

function getLength(value:Input){
      if(typeof value==='string'){
        return value.length;
      }
      if(Array.isArray(value)){
         return  value.length;
      }
       
      return value;
}
console.log(getLength("typescisdfas"));
console.log(getLength([5,6,8,5,8]))

// problem -3

class Person{
    name:string;
    age:number;
 
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    
   getDetails(){
    const add = `'Name:${this.name}, Age:${this.age}';`;
    
    return add
   }
   
    
}
const person1 = new Person('John Doe', 30);
console.log(person1.getDetails());

const person2 = new Person('Alice', 25);
console.log(person2.getDetails());

// problem -4

 
 interface Item {
    title:string;
    rating:number;
 }    
 

function filterByRating( items:Item[]):Item[]{
       return items.filter(item=>item.rating>=4);
}


 const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));


// problem -5
interface data{
     id:number;
     name:string;
     email:string;
     isActive:boolean;
}

function filterActiveUsers(datas:data[]):data[]{
         return datas.filter(data=>data.isActive===true);

}

const users=[
    {id:1, name:"rakib",email:'rakib@gmail.com',isActive:true},
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
]

console.log(filterActiveUsers(users))

// problem -6

interface Book{
    title:string;
    author:string;
    publishedYear:number;
    isAvailable:boolean;
}

function printBookDetails(books:Book):void {


    
        const available =  books.isAvailable? "Yes":"No"
        const newBooks =  `Title:${books.title},Author:${books.author},Published:${books.publishedYear},Available:${available} `;
         console.log(newBooks)
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);


// problem -7

function getUniqueValues<T>(arr1:T[], arr2:T[]):T[]{
     const result: T[]=[];

     for(let i=0; i<arr1.length;i++){

        const num =arr1[i];
        if(arr2.includes(num)){
            result.push(num);
        }
     }
     return result;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));



// problem-8

interface Product{
    name:string;
    price:number;
    quantity:number;
    discount?:number;
}

function calculateTotalPrice(product:Product[]):number{
        if(product.length===0) 
}


