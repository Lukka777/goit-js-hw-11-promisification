const delay = (ms) => {
  const myPromis = new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
  return myPromis;
};

const logger = (time) => console.log(`Resolved after ${time}ms`);

delay(2000).then(logger);
delay(1000).then(logger);
delay(1500).then(logger);
