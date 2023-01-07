import { useState } from "react";

const useProvideSchedule = () => {
  const [formData, setFormData] = useState([]);
  // const [requestType, setRequestType] = useState("");
  let requestType = "";
  const setRequestType = (str: string): void => {
    requestType = str;
  }
  return {
    formData,
    requestType,
    setFormData,
    setRequestType
  };
};

export default useProvideSchedule;