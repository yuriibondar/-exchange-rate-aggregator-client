import axios from "axios";

const api = axios.create({
  baseURL: "https://obmennovosti.info/city.php",
  params: {
    city: 39, // Vinnytsia
  },
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});

export const getRates = (currency) => {
  return new Promise((resolve, reject) => {
    api
      .get("/")
      .then((response) => {
        console.log(
          `Response for Kit rates: `,
          response
        );
        const data = response.indexOf('new Vue(');
        resolve();
      })
      .catch((error) => {
        console.log(
          `Failed to get Kit rates: `,
          error
        );
        reject(error);
      });
  });
};
