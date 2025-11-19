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
 




 
 interface Item {
    title:string;
    rating:number;
 }    
 

function filterByRating( items:Item[]):Item[]{
       return items.filter(item=>item.rating>=4);
}


 




interface data{
     id:number;
     name:string;
     email:string;
     isActive:boolean;
}

function filterActiveUsers(datas:data[]):data[]{
         return datas.filter(data=>data.isActive===true);

}

 








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

 




function getUniqueValues<T extends number | string>(arr1: T[], arr2: T[]): T[] {
    const result: T[] = [];

    
    for (let i = 0; i < arr1.length; i++) {
        let isDuplicate = false;
        
        for (let j = 0; j < result.length; j++) {
            if (arr1[i] === result[j]) {
                isDuplicate = true;
                 
            }
        }
        if (!isDuplicate) {
            result[result.length] = arr1[i]; 
        }
    }

     for (let i = 0; i < arr2.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < result.length; j++) {
            if (arr2[i] === result[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            result[result.length] = arr2[i];
        }
    }

    return result;
}

 






interface Product{
    name:string;
    price:number;
    quantity:number;
    discount?:number;
}

 function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;

  const total = products.map(product => {
    
      const basePrice = product.price * product.quantity;

       const discountAmount = product.discount ? (basePrice * product.discount) / 100: 0;
       
        

      return basePrice - discountAmount;
    })
    .reduce((sum, value) => sum + value, 0);

  return total;
}

 
