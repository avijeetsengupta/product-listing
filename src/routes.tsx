import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import FooterComponent from "./component/footer";
import TopBarComponent from "./component/topBar";
import Spinner from "./component/shared/Spinner";
const HomeComponent = lazy(() => import("./component/home/components/index"));
const ProductCartComponent = lazy(() => import("./component/productCart/ProductCartComponent"));
const NotFound = lazy(() => import("./component/notFound/NotFound"));

export const ProductRoutes = () => {
  return (
    <>
      <Router>
        <div style={{ height: "4rem", background: "red" }}>
          <TopBarComponent />
        </div>
        <div style={{ height: "calc(100vh - 8rem)", overflow: "scroll" }}>
          <Suspense fallback={<Spinner />}>
            <>
              <Switch>
                <Route exact={true} path="/" render={() => <Redirect to="/product-home" />} />
                <Route exact={true} path="/product-home" component={HomeComponent} />

                <Route exact={true} path="/product-cart" component={ProductCartComponent} />
                <Route component={NotFound} />
              </Switch>
            </>
          </Suspense>
        </div>
        <div style={{ height: "4rem" }}>
          <FooterComponent />
        </div>
      </Router>
    </>
  );
};
