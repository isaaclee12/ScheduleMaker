import { createContext, useContext } from 'react';

interface RequestTypeContext {
  requestType: string;
  changeRequestType: (r: string) => void;
  formBackgroundStyle: string;
  changeFormBackgroundStyle: (r: string) => void;
}

export const defaultState = {
  requestType: "",
  changeRequestType: () => {},
  formBackgroundStyle: "",
  changeFormBackgroundStyle: () => {}
}

export const ScheduleContext = createContext<RequestTypeContext>(defaultState);

// Create the hook using that context
const useScheduleContext = () => useContext(ScheduleContext)

export default useScheduleContext;