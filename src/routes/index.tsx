import { BrowserRouter, Route, Routes } from "react-router";
import routes from "./routes";
import ProtectedRoute from "./protectedRoute";

const RouterIndex = () => {
  const renderRoute = (route: typeof routes[number], index: number) => {
    const Component = route.element;

    const element = route.protected ? (
      <ProtectedRoute>
        <Component />
      </ProtectedRoute>
    ) : (
      <Component />
    );

    return (
      <Route key={index} path={route.path} element={element}>
        {route.children?.map(renderRoute)}
      </Route>
    );
  };

  return (
    <BrowserRouter>
      <Routes>{routes.map(renderRoute)}</Routes>
    </BrowserRouter>
  );
};

export default RouterIndex;
