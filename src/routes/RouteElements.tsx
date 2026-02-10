import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";
import PublicRoute from "@/components/custom/PublicRoute";

const Home = lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(() => resolve(import("@/pages/Home")), 1500);
  });
});
const NotFound = lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(() => resolve(import("@/pages/NotFound")), 100);
  });
});

const RouteElements = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path={ROUTES.ROOT} element={<PublicRoute component={Home} />} />
      <Route path="*" element={<PublicRoute component={NotFound} />} />
    </Routes>
  );
};

export default RouteElements;
