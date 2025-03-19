import { Navigate } from "react-router-dom";
import { useAuth } from "./components/generic/useAuth"

const ProtectedRoute = ({children}:{children:any})=>{    
    const {user}=useAuth();
    return user ? children :<Navigate to="/login"/>;
}

export default ProtectedRoute;