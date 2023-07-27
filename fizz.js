for (let i = 1; i <= 100; i++) {
    const fizz3 = i % 3 === 0;
    const buzz5 = i % 5 === 0;

    if (fizz3 && buzz5){
        console.log("FizzBuzz");
     }else if (fizz3){
        console.log("Fizz");
     }else if (buzz5){
        console.log("Buzz");
     }else {
        console.log(i);
     }

}