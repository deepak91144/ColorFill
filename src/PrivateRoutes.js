import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
	return <>{false ? <Outlet /> : <Navigate to="/child" />}</>;
};

export default PrivateRoutes;
