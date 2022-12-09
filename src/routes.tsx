import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import ProductComponent from "./component/product";
import Spinner from "./component/shared/Spinner";
import TopBarComponent from "./component/topBar";
const HomeComponent = lazy(() => import("./component/home/components"));
const NotFound = lazy(() => import("./component/product"));

export const ProductRoutes = () => {
  return (
    <>
      <Router basename="product">
        <div style={{ height: "4rem", background: "red" }}>
          <TopBarComponent />
        </div>
        <div style={{ height: "calc(100vh - 8rem)", overflow: "scroll" }}>
          <Suspense fallback={<Spinner />}>
            <>
              <Switch>
                <Route exact={true} path="/" render={() => <Redirect to="/product-home" />} />
                <Route exact={true} path="/product-home" component={HomeComponent} />
                <Route component={NotFound} />
              </Switch>
            </>
          </Suspense>
        </div>
        <div style={{ height: "4rem" }}>
          <ProductComponent />
        </div>
      </Router>
    </>
  );
};
