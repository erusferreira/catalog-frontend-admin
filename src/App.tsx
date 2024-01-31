/* eslint-disable @typescript-eslint/no-unused-vars */
import { Routes, Route, Navigate } from "react-router-dom";

import routes from "utils/buildRoutes";

function App() {
  return (
    <>
      <Routes>
        {routes.map(({ Element, ErrorBoundary, ...rest }: any) => {
          return <Route key={rest.path} path={rest.path} element={<Element />} />;
        })}
        <Route path="*" element={<Navigate to="./main" replace />} />  
      </Routes>
    </>
  );
}

export default App;
