import { createContext, useContext, useState } from "react";

interface AuthContextType{
    user:string|null;
    login:(user:string, token:string)=>void;
    logout:()=>void;
}

const AuthContext = createContext<AuthContextType|undefined>(undefined);

export const AuthProvider = ({children}:{children:React.ReactNode})=>{
    const [user, setUser] = useState<string|null>(()=>localStorage.getItem("userId"));

    const login = (userId:string, token:string)=>{
        localStorage.setItem("userId", userId);
        localStorage.setItem("token", token);
        setUser(userId);
    };

    const logout = ()=>{
        localStorage.removeItem("userId");
        localStorage.removeItem("accessToken");
        setUser(null);
    };

    return(
        <AuthContext.Provider value={{user, login, logout}}>
        {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () =>{
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be used with an AuthProvider");
    }
    return context;
}