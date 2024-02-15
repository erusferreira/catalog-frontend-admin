/* eslint-disable @typescript-eslint/no-unused-vars */
import { Routes as RoutesDom, Route, Navigate } from "react-router-dom";

import routesData from "utils/route-builder";

export const Routes = () => {
  return (
    <>
      <RoutesDom>
        {routesData.map(({ Element, ErrorBoundary, ...rest }: any) => {
          return <Route key={rest.path} path={rest.path} element={<Element />} />;
        })}
        <Route path="*" element={<Navigate to="./main" replace />} />  
      </RoutesDom>
    </>
  );
}
