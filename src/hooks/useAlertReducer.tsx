import { useReducer } from 'react';
import { v4 as uuid } from 'uuid';

// types
import { Alert } from '../types/Alert';

enum ReducerActions {
  CREATE = 'create',
  REMOVE = 'remove',
}

const initialState: Alert[] = [];

type Action = {
  type: string;
  payload: Alert | string;
};

const useAlertReducer = () => {
  const reducer = (state: Alert[], action: Action) => {
    switch (action.type) {
      case ReducerActions.CREATE: {
        const alert = action.payload as Alert;
        if (!alert.id) {
          alert.id = uuid();
        }
        return [...state, alert];
      }

      case ReducerActions.REMOVE:
        return state.filter((alert) => alert.id !== action.payload);
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const createAlert = (alert: Alert) => {
    dispatch({ type: ReducerActions.CREATE, payload: alert });
    setTimeout(() => {
      removeAlert(alert.id!);
    }, parseInt(alert.timeLimit) * 1000);
  };

  const removeAlert = (id: string) => {
    dispatch({ type: ReducerActions.REMOVE, payload: id });
  };

  return {
    alerts: state,
    createAlert,
    removeAlert,
  };
};

export { useAlertReducer };
