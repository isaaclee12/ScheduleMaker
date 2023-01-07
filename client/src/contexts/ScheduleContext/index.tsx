import { createContext, useContext } from 'react';
import useProvideSchedule from './useProvideSchedule';

// Creating a named context
const ScheduleContext = createContext([]);

// Hook for consuming form related data
export const useScheduleContext = () => {
  return useContext(ScheduleContext);
};

// Creating a provider to wrap components that needs to access form's data
// Note: a provider is a special component that pass the context to its children to access
// TODO: Create types that replace these any tags (and all the any tags for that matter)
const ScheduleProvider = ({ children }: any) => {
  const formData: any = useProvideSchedule();
  return <ScheduleContext.Provider value={formData}>{children}</ScheduleContext.Provider>;
};

export default ScheduleProvider;