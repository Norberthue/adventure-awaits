import { type JSX } from 'react'
import { useUser } from '../context/UserContext'
import { Navigate } from 'react-router-dom'
type Props = {
    children : JSX.Element
}

const ProtectedRoute = ({children} : Props) => {
    const { user } = useUser();
    if (!user) {
        return <Navigate to={'/'} replace />
    }
    return children
}

export default ProtectedRoute