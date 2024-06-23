import { createContext, useState } from "react";

const LoginContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState({ name: "", email: "", auth: false });

    const setDetail = (username, useremail) => {
        setUser({ name: username, email: useremail, auth: true });
    };

    const logout = () => {
        setUser({ name: "", email: "", auth: false });
    };

    return (
        <LoginContext.Provider value={{ user, setDetail, logout }}>
            {children}
        </LoginContext.Provider>
    );
};

export default UserContext;
export { LoginContext };