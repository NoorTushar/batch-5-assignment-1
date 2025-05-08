## 3. Explain the difference between any, unknown, and never types in TypeScript.

### Any

Type `any` basically says that an input can be of `any` type or the return can be of `any`. Meaning it can be string, boolean or array or any other types. We are not explicitly declaring the type. This is not a good practice as we will not get typescript suggestions and we can make mistakes which will only then be found during run time. Thus, there is type safety.

Example of a simple use case of `any`:

```ts
function showOutput(input: any): any {
   console.log(input);
}

showOutput([3, 24]); // [ 3, 24 ]
```

### Unknown

We can use the unknown type while accepting arguments which are unknown to us in the beginning. Also, we can declare unknown types to Promises as we do not know beforehand what that Promise might return to us. It is thus unknown in the beginning. But later based on the type, we can do operation and return required type.

Example: First input is unknown, but if it is string we will say directly print the input. If it is any other type, we will say, 'It is not a string but other type'

```ts
function showMessage(input: unknown): string {
   if (typeof input === "string") {
      return input;
   } else {
      return `It is not a string but other type`;
   }
}
console.log(showMessage("Custom Message")); // Custom Message

console.log(showMessage(123123)); //It is not a string but other type
```

### Never

Never is used when a function will have no logical end point. That is it might get stuck in an infinite loop or might end of throwing an error.

Example:

```ts
function throwError(message: string): never {
   throw new Error(message); // No end point is reached
}
```

## 7. Provide an example of using union and intersection types in TypeScript.

### Union

Look at this example: We want to declare a variable named `country` where we explicitly want the value to be either `Bangladesh` or `India`

```ts
type Country = "Bangladesh" | "India";

const country: Country = "Bangladesh";
```

Another example of Union where we are doing type union

```ts
type Country = "Bangladesh" | "India";
type Country2 = "Malaysia" | "Nepal" | "Bhutan";

type Countries = Country | Country2;

const country: Countries = "Nepal";
```

### Intersection

By doing intersection, we must include `all` the type values.

```ts
type Student = {
   id: number;
   name: string;
   email: string;
   course: string;
};
```

Now, let us say we want the student to also have phone, without phone the object will be incomplete.

So let us make another type `StudentWithPhone`:

```ts
type StudentWithPhone = {
   id: number;
   name: string;
   email: string;
   course: string;
   phone: string;
};
```

Now what we will do is we will create a new type which will combine both `Student` AND `StudentWithPhone` using `&`, and, operator.

```ts
type CompleteStudent = Student & StudentWithPhone;
```

Now, when we declare a student variable using type `CompleteStudent`, it must have all the fields including `phone`.

```ts
const student1: CompleteStudent = {
   id: 2,
   name: "Tushar",
   email: "tushar@gmail.com",
   course: "PH",
   phone: "81515926",
};
```
