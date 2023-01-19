import { createContext, useContext } from 'react';

interface RequestTypeContext {
  requestType: string;
  changeRequestType: (r: string) => void;
  formBackgroundStyle: string;
  changeFormBackgroundStyle: (r: string) => void;
  serverAddress : string;
}

export const defaultState = {
  requestType: "",
  changeRequestType: () => {},
  formBackgroundStyle: "",
  changeFormBackgroundStyle: () => {},
  serverAddress : "server" // TODO: Have this value set by whether or not we're using docker.
  // "server" for docker, "localhost" for local
}

export const ScheduleContext = createContext<RequestTypeContext>(defaultState);

// Create the hook using that context
const useScheduleContext = () => useContext(ScheduleContext)

export default useScheduleContext;