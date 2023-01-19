import axios from "axios";

const api = axios.create({
  baseURL: "https://va-backend.treeum.net/api/search/applications_data",
  params: {
    city: 11, // Vinnytsia
    page: 1,
    size: 60,
    type: "customer",
  },
});

export const getRate = (operation, currency, exchangerName) => {
  return new Promise((resolve, reject) => {
    api
      .get("/", {
        params: {
          action: operation,
          currency: currency,
        },
      })
      .then((response) => {
        console.log(
          `Response for ${operation} rate for" + ${exchangerName}: `,
          response
        );
        const application = response.data._items.find(
          (application) =>
            application.data.profile_id.firstName === exchangerName
        );
        resolve(application.data.rate);
      })
      .catch((error) => {
        console.log(
          `Failed to get ${operation} rate for" + ${exchangerName}: `,
          error
        );
        reject(error);
      });
  });
};
