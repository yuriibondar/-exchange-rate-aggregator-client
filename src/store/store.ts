import { getRate as getMinfinRate } from "../api/minfin";
import { getRates as getKitRates } from "../api/kit";
import { Dispatch, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunkMiddleware from "redux-thunk";

type Exchanger = {
  id: number;
  name: string;
  buyRate: number | null;
  sellRate: number | null;
  _getRates: () => Promise<any>;
};

const initialState = {
  isLoading: false,
  exchangers: [
    {
      id: 1,
      name: "Minfin 999Vadi",
      currencies: {
        USD: {
          buy: null as number | null,
          sell: null as number | null,
        },
      },
    },
    {
      id: 2,
      name: "Kit",
      currencies: {
        USD: {
          buy: null as number | null,
          sell: null as number | null,
        },
      },
    },
  ],
};

type RootState = typeof initialState;

const reducer = (
  state: RootState = initialState,
  action: any //RatesAction
): RootState => {
  switch (action.type) {
    case FETCH_RATES_START:
      return {
        ...state,
        isLoading: true,
        exchangers: state.exchangers.map((e) => ({
          ...e,
          currencies: {
            USD: {
              buy: null,
              sell: null,
            },
          },
        })),
      };
      case FETCH_RATES_END:
        return {
          ...state,
          isLoading: false,
        };
    case SET_KIT_RATES:
      return {
        ...state,
        exchangers: state.exchangers.map((e) => {
          if (e.id === 2) {
            return {
              ...e,
              currencies: {
                USD: {
                  buy: action.payload.buy,
                  sell: action.payload.sell,
                },
              },
            };
          } else {
            return e;
          }
        }),
      };
    case SET_MINFIN_RATES:
      return {
        ...state,
        exchangers: state.exchangers.map((e) => {
          if (e.id === 1) {
            return {
              ...e,
              currencies: {
                USD: {
                  buy: action.payload.buy,
                  sell: action.payload.sell,
                },
              },
            };
          } else {
            return e;
          }
        }),
      };
    default:
      return state;
  }
};

const FETCH_RATES = "FETCH_RATES";
const FETCH_RATES_START = "FETCH_RATES_START";
const FETCH_RATES_END = "FETCH_RATES_END";
const SET_KIT_RATES = "SET_KIT_RATES";
const SET_MINFIN_RATES = "SET_MINFIN_RATES";

type FetchRatesAction = {
  type: typeof FETCH_RATES;
};
type FetchRatesStartAction = {
  type: typeof FETCH_RATES_START;
};
type FetchRatesEndAction = {
  type: typeof FETCH_RATES_END;
};

type SetKitRatesAction = {
  type: typeof SET_KIT_RATES;
  payload: {
    buy: number | null;
    sell: number | null;
  };
};

type SetMinfinRatesAction = {
  type: typeof SET_MINFIN_RATES;
  payload: {
    buy: number | null;
    sell: number | null;
  };
};

const setKitRates = (
  buy: number | null,
  sell: number | null
): SetKitRatesAction => ({
  type: SET_KIT_RATES,
  payload: {
    buy,
    sell,
  },
});

const setMinfinRates = (
  buy: number | null,
  sell: number | null
): SetMinfinRatesAction => ({
  type: SET_MINFIN_RATES,
  payload: {
    buy,
    sell,
  },
});

type RatesAction =
  | FetchRatesAction
  | FetchRatesStartAction
  | FetchRatesEndAction
  | SetKitRatesAction
  | SetMinfinRatesAction;

const fetchRatesStart = (): FetchRatesStartAction => ({
  type: FETCH_RATES_START,
});

const fetchRatesEnd = (): FetchRatesEndAction => ({
  type: FETCH_RATES_END,
});
export const fetchRates = () => (dispatch: Dispatch<RatesAction>) => {
  // Set loading status and reset values
  dispatch(fetchRatesStart());
  // Fetch Kit and Minfin rates simultaneously
  const _getKitRates = () => {
    return getKitRates("USD")
      .then((response) => {
        const [buy, sell] = response;
        dispatch(setKitRates(buy, sell));
      })
      .catch((error) => {
        dispatch(setKitRates(null, null));
      });
  };
  const _getMinfinRates = () => {
    return Promise.all([
      getMinfinRate("buy", "usd", "999Vadi")
        .then((response) => {
          return response;
        })
        .catch((error) => {
          return null;
        }),
      getMinfinRate("sell", "usd", "999Vadi")
        .then((response) => {
          return response;
        })
        .catch((error) => {
          return null;
        }),
    ]).then((result) => {
      console.log("Minfin THUNK rates response: ", result);
      const [buy, sell] = result;
      dispatch(setMinfinRates(buy, sell));
    });
  };
  Promise.all([_getKitRates(), _getMinfinRates()]).then(() => {
    // Disable loading status
    dispatch(fetchRatesEnd());
  });
};

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(reducer, composedEnhancer);

declare global {
  interface Window {
    store: any;
  }
}

window.store = store;

export default store;
