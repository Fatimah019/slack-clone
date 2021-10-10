import React from "react";
import AllRoutes from "./Route";
import { Provider } from "react-redux";
import store from "./store";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { Login } from "./Components/Login";
import styled from "styled-components";
import Spinner from "react-spinkit";

function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContent>
          <img
            src="https//cdn.mos.cms.futurecdn.net/SDDw7cnuoUGax6x9mTo7dd.jpg"
            alt=""
          />
          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </AppLoadingContent>
      </AppLoading>
    );
  }
  return <Provider store={store}>{!user ? <Login /> : <AllRoutes />}</Provider>;
}

export default App;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;
const AppLoadingContent = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
  }
`;
