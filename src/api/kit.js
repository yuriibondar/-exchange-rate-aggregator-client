import axios from "axios";

export const getRates = (currency) => {
  return new Promise((resolve, reject) => {
    axios
      .get("/api/kit")
      .then((response) => {
        console.log(
          `Response for Kit rates: `,
          response
        );
        const dataStartString = 'new Vue(';
        const dataStartIndex = response.data.indexOf(dataStartString) + dataStartString.length;
        const dataEndIndex = response.data.indexOf(');', dataStartIndex);
        let dataString = response.data.substring(dataStartIndex, dataEndIndex);
        dataString = dataString
          .replace("el", '"el"')
          .replace("'#app'", '"#app"')
          .replace("data", '"data"')
          .replace("rates", '"rates"')
          .replaceAll("\n", "")
          .replaceAll(" ", "");
        let lastComaIndex = dataString.lastIndexOf(',');
        dataString = dataString.slice(0, lastComaIndex) + dataString.slice(lastComaIndex + 1);
        const dataJson = JSON.parse(dataString);
        const rates = dataJson.data.rates.rates.find(rate => rate.base === currency)
        resolve([parseFloat(rates.bid), parseFloat(rates.ask)]);
      })
      .catch((error) => {
        console.log(
          `Failed to get Kit rates from proxy: `,
          error
        );
        reject(error);
      });
  });
};
