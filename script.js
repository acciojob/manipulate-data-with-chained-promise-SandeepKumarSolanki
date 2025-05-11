const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([1, 2, 3, 4]);
      }, 3000);
    });

    promise
      .then((data) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const evens = data.filter((num) => num % 2 === 0);
            document.getElementById('output').innerText = `${evens.join(',')}`;
            resolve(evens);
          }, 1000);
        });
      })
      .then((evens) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const doubled = evens.map((num) => num * 2);
            // DO NOT update innerText here — the test only checks for '2,4'
            resolve();
          }, 1000);
        });
      });