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
            resolve(evens); // pass [2, 4] to next then
          }, 1000);
        });
      })
      .then((evens) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const doubled = evens.map((num) => num * 2); // [4, 8]
            document.getElementById('output').innerText = `${doubled.join(',')}`;
            resolve();
          }, 1000);
        });
      });