import { getRate as getMinfinRate } from "../api/minfin";
import { getRates as getKitRates } from "../api/kit";

const store = {
  _state: {
    exchangers: [
      {
        id: 1,
        name: "Minfin 999Vadi",
        buyRate: null,
        sellRate: null,
        _getRates(onUpdated) {
          getMinfinRate("buy", "usd", "999Vadi").then((response) => {
            this.buyRate = response;
            onUpdated();
          });
          getMinfinRate("sell", "usd", "999Vadi").then((response) => {
            this.sellRate = response;
            onUpdated();
          });
        },
      },
      {
        id: 2,
        name: "Kit",
        buyRate: null,
        sellRate: null,
        _getRates(onUpdated) {
          getKitRates("USD").then((response) => {
            this.buyRate = response;
            onUpdated();
          });
        },
      },
    ],
  },

  getState() {
    return {
      exchanges: this._state.exchangers.map((e) => ({
        id: e.id,
        name: e.name,
        currencies: {
          USD: {
            buy: e.buyRate,
            sell: e.sellRate,
          },
        },
      })),
    };
  },

  fetchRates() {
    this._state.exchangers.forEach((e) =>
      e._getRates(this._onUpdated.bind(this))
    );
  },

  _stateUpdatedCallback: null,

  subscribeForStateUpdates(callback) {
    this._stateUpdatedCallback = callback;
  },

  _onUpdated() {
    if (
      this._stateUpdatedCallback &&
      this._stateUpdatedCallback instanceof Function
    )
      this._stateUpdatedCallback();
  },
};

export default store;
