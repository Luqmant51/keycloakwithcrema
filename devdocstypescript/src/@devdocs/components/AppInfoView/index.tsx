import React from "react";
import AppMessageView from "../AppMessageView";
import AppLoader from "../AppLoader";
import {
  useInfoViewActionsContext,
  useInfoViewContext,
} from "@devdocs/context/AppContextProvider/InfoViewContextProvider";

const AppInfoView = () => {
  const { error, loading, message } = useInfoViewContext();
  const { clearInfoView } = useInfoViewActionsContext();
  const showMessage = () => {
    return (
      <AppMessageView
        variant="success"
        message={message.toString()}
        clearInfoView={clearInfoView}
      />
    );
  };

  const showError = () => {
    return (
      <AppMessageView
        variant="error"
        message={error.toString()}
        clearInfoView={clearInfoView}
      />
    );
  };
  return (
    <>
      {loading && <AppLoader />}

      {message && showMessage()}
      {error && showError()}
    </>
  );
};

export default AppInfoView;