import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"
import { Navigate } from "react-router-dom"
import PropTypes from 'prop-types';
import Loading from "../components/Loading";

const PribetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <Loading />
    }
    if (!user) {
        return <Navigate to="/login" />
    }
    return children
}

PribetRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PribetRoute