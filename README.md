1. Ans:Interface সাধারণত object structure define করে আর merge করা যায়।Type alias হিসেবে কাজ করে, union, tuple, বা primitive type বানানো যায় কিন্তু merge করা যায় না।

ex: 
interface Person { name: string; age: number; }
type ID = string | number;

2:Ans: keyof keyword TypeScript-এ ব্যবহার হয় কোনো object type-এর সব property name বের করার জন্য |

Ex:

interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; 
 const key: PersonKeys = "name";

