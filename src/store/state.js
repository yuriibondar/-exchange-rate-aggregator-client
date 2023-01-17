const state = {
  exchanges: [
    {
      id: 1,
      name: "Kit",
      currencies: {
        USD: {
          buy: 40.2,
          sell: 40.9,
        },
      },
    },
    {
      id: 2,
      name: "Minfin",
      currencies: {
        USD: {
          buy: 40.2,
          sell: 40.9,
        },
      },
    },
    {
      id: 3,
      name: "MinfinNoBuy",
      currencies: {
        USD: {
          buy: null,
          sell: 40.9,
        },
      },
    },
    {
      id: 4,
      name: "MinfinNoSell",
      currencies: {
        USD: {
          buy: 40.0,
          sell: null,
        },
      },
    },
  ],
};

export default state;
