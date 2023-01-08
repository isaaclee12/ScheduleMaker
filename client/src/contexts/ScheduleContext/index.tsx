import { createContext, useContext, useState } from 'react';
import { VoidExpression } from 'typescript';

interface RequestTypeContext {
  requestType: string;
  changeRequestType: (r: string) => void;
}

export const defaultState = {
  requestType: "",
  changeRequestType: () => {}
}

export const ScheduleContext = createContext<RequestTypeContext>(defaultState);

// Create the hook using that context
const useScheduleContext = () => useContext(ScheduleContext)

export default useScheduleContext;