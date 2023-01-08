import { createContext, useContext } from 'react';
import useProvideSchedule from './useProvideSchedule';

// Establish a type for global content
export type GlobalContent = {
  requestType: string
  setRequestType: (r: string) => void
}

// Create a context using that type
export const ScheduleContext = createContext<GlobalContent>({
  requestType: '', // set a default value
  setRequestType: (r: string) => {}
})

// Create the hook using that context
const useScheduleContext = () => useContext(ScheduleContext)

// Creating a provider to wrap components that needs to access form's data
// Note: a provider is a special component that pass the context to its children to access
// TODO: Create types that replace these any tags (and all the any tags for that matter)
// const ScheduleProvider = ({ children }) => {
//   const formData: any = useProvideSchedule();
//   return <ScheduleContext.Provider value={formData}>{children}</ScheduleContext.Provider>;
// };

export default useScheduleContext;