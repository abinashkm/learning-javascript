/** what if u want to store foreach in some variable, will it still return value?
 *  we can store it like below but even after returning it, it will show undefined.
 *  We don't always need to print values sometimes we need to just return it.
 */

// const coding = ['cpp', 'java', 'python', 'javascript']

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return values;
// });

// console.log(values);

/** output
cpp
java
python
javascript
undefined
 */

// so foreach value store kr leta h but wapis nhi karta.

const numbers = [1,2,3,4,5,6,7,8,9]

const values = numbers.filter( (num) => {
    // return num>4;
})

// console.log(values);


// EXAMPLE FOR PRACTICE.


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  // suppose we have to find all the books with fiction.

  const read = books.filter((bk)=>{
    if(bk.genre === "Fiction"){
        return bk;
    }    
  })

  console.log(read);

  // jo value or condition true ho usiko ye return karta h.