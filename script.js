const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve([1, 2, 3, 4]);
      }, 3000);
    });

    promise
      // Step 2: Filter out odd numbers after 1 second and print to #output
      .then((data) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const evens = data.filter((num) => num % 2 === 0); // [2, 4]
            document.getElementById('output').innerText = evens.join(',');
            resolve(evens);
          }, 1000);
        });
      })
      // Step 3: Multiply even numbers by 2 after 2 more seconds and update #output
      .then((evens) => {
        
          setTimeout(() => {
            const doubled = evens.map((num) => num * 2); // [4, 8]
            document.getElementById('output').innerText = doubled.join(',');
            
          }, 2000); // 2 seconds to meet test timing
       
      });