
import { createContext, useState } from 'react';

export const userDetailContext = createContext();

const UserDetailProvider = ({children}) => {
  const [userDetail, setUserDetail] = useState();

  return (
    <userDetailContext.Provider value={[userDetail, setUserDetail]}>
        {children}
    </userDetailContext.Provider>
  );
};

export default UserDetailProvider;