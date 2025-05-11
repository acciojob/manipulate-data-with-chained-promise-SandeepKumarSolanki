  // Step 1: Create initial promise that resolves after 3 seconds
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([1, 2, 3, 4]);
      }, 3000);
    });

    promise
      // Step 2: Filter out odd numbers after 1 second
      .then((data) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const evens = data.filter((num) => num % 2 === 0);
            document.getElementById('output').innerText = `${evens.join(', ')}`;
            resolve(evens); // pass even numbers to next step
          }, 1000);
        });
      })
      // Step 3: Multiply even numbers by 2 after another 1 second (total 2 seconds after first processing)
      .then((evens) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const doubled = evens.map((num) => num * 2);
            document.getElementById('output').innerText = `${doubled.join(', ')}`;
            resolve();
          }, 1000);
        });
      });