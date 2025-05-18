import { type JSX } from 'react'
import { useUser } from '../context/UserContext'
import { Navigate } from 'react-router-dom'
type Props = {
    children : JSX.Element
}

const ProtectedRoute = ({children} : Props) => {
    const { user, loading } = useUser();
    if (loading) {
        return null; // or a loading spinner if you have one
    }
    if (!user) {
        return <Navigate to={'/'} replace />
    }
    return children
}

export default ProtectedRoute