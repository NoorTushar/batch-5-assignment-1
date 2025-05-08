function formatString(input: string, toUpper?: boolean): string {
   if (toUpper === true) {
      return input.toUpperCase();
   } else if (toUpper === false) {
      return input.toLowerCase();
   } else {
      return input.toUpperCase();
   }
}

function filterByRating(
   items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
   const filteredArray = items.filter(
      (item: { title: string; rating: number }) => item.rating >= 4
   );

   return filteredArray;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
   const finalArray: T[] = [];

   arrays.forEach((array: T[]) => {
      finalArray.push(...array);
   });

   return finalArray;
}

class Vehicle {
   constructor(private make: string, private year: number) {}

   getInfo() {
      console.log(`Make: ${this.make}, Year: ${this.year}`);
   }
}

class Car extends Vehicle {
   constructor(make: string, year: number, private model: string) {
      super(make, year);
   }

   getModel() {
      console.log(`Model: ${this.model}`);
   }
}

function processValue(value: string | number): number {
   if (typeof value === "string") {
      return value.length;
   } else {
      return value * 2;
   }
}

interface Product {
   name: string;
   price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
   if (products.length === 0) {
      return null;
   } else {
      let finalProduct: Product = products[0];
      let highestPrice = products[0]?.price || 0;

      products.forEach((product: Product) => {
         if (product.price >= highestPrice) {
            finalProduct = product;
         }
      });

      return finalProduct;
   }
}

enum Day {
   Monday,
   Tuesday,
   Wednesday,
   Thursday,
   Friday,
   Saturday,
   Sunday,
}

function getDayType(day: Day): string {
   if (day === Day.Saturday || day === Day.Sunday) {
      return "Weekend";
   } else {
      return "Weekday";
   }
}

async function squareAsync(n: number): Promise<number> {
   return new Promise((resolve, reject) => {
      if (n >= 0) {
         setTimeout(() => {
            resolve(n * n);
         }, 1000);
      } else {
         reject("Negative number not allowed");
      }
   });
}
