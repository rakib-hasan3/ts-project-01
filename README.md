1. Ans:   উপাদান কোন ধরনের হবে তা নির্ধারণ করে টাইপ(number,string..etc) । আর ইনটারফেস হল একধরনের অবজেক্ট যার মধ্যে কোন ধরনের ডাটা থাকবে তা নির্ধারণ  করে ।


Example: 
interface Person { name: string; age: number; }
type ID =  number;





2. Ans: কিঅফ অবজেক্ট এ কোন ধরনের কি আছে তা বের করার জন্য বেবহার করা হয় ।

Example:

interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; 
// name,age হচ্ছে এখানে কি |

