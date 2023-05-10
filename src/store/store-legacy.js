import { getRate as getMinfinRate } from "../api/minfin";
import { getRates as getKitRates } from "../api/kit";

const store = {
  _state: {
    isLoading: false,
    exchangers: [
      {
        id: 1,
        name: "Minfin 999Vadi",
        buyRate: null,
        sellRate: null,
        _getRates(onUpdated) {
          return Promise.all([
            getMinfinRate("buy", "usd", "999Vadi")
              .then((response) => {
                this.buyRate = response;
                onUpdated();
              })
              .catch((error) => {
                this.buyRate = null;
                onUpdated();
              }),
            getMinfinRate("sell", "usd", "999Vadi").then((response) => {
              this.sellRate = response;
              onUpdated();
            })
            .catch((error) => {
              this.sellRate = null;
              onUpdated();
            }),
          ]);
        },
      },
      {
        id: 2,
        name: "Kit",
        buyRate: null,
        sellRate: null,
        _getRates(onUpdated) {
          return getKitRates("USD").then((response) => {
            [this.buyRate, this.sellRate] = response;
            onUpdated();
          })
          .catch((error) => {
            [this.buyRate, this.sellRate] = [null, null];
            onUpdated();
          });
        },
      },
    ],
  },

  getState() {
    return {
      isLoading: this._state.isLoading,
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
    this._state.isLoading = true;
    this._state.exchangers.forEach((e) => {
      e.buyRate = null;
      e.sellRate = null;
    });
    this._onUpdated();
    const functions = this._state.exchangers.map((e) =>
      e._getRates(this._onUpdated.bind(this))
    );
    Promise.all(functions).then((result) => {
      this._state.isLoading = false;
      this._onUpdated();
    });
    // this._state.exchangers.forEach((e) =>
    //   e._getRates(this._onUpdated.bind(this))
    // );
  },

  _stateUpdatedCallback: null,

  subscribeForStateUpdates(callback) {
    this._stateUpdatedCallback = callback;
  },

  _onUpdated() {
    if (
      this._stateUpdatedCallback &&
      this._stateUpdatedCallback instanceof Function
    ) {
      this._stateUpdatedCallback();
    }
  },
};

export default store;
