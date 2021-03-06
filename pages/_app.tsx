import { withBlocs } from "@bloc-js/nextjs-bloc";
import App from "next/app";
import React from "react";
import { ClockBloc } from "../bloc/ClockBloc";
import { CounterBloc } from "../bloc/CounterBloc";
import { BlocContext, BlocContextValue } from "../context/BlocContext";

export interface BlocTestAppProps {
  blocs: BlocContextValue;
}

class BlocTestApp extends App<BlocTestAppProps> {
  render() {
    const { Component, pageProps, blocs } = this.props;
    return (
      <BlocContext.Provider value={blocs}>
        <Component {...pageProps} />
      </BlocContext.Provider>
    );
  }
}

export default withBlocs<BlocContextValue>(initialState => {
  console.log("INITIAL STATE", initialState);
  return {
    clockBloc: new ClockBloc(initialState.clockBloc),
    counterBloc: new CounterBloc(initialState.counterBloc)
  };
}, BlocTestApp);
