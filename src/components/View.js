import React, { useContext } from "react";
import Mushaf from "./Mushaf/Mushaf";
import Stats from "./Stats/Stats";
import Detail from "./Detail/Detail";

import { MainContext } from "../context";
import { views } from "./views";

const View = () => {
  const { view } = useContext(MainContext);
  const Select = () => {
    const v = {
      [views.MUSHAF]: () => <Mushaf />,
      [views.STATS]: () => <Stats />,
      [views.DETAIL]: () => <Detail />,
    };
    return v[view]();
  };

  return <Select />;
};

export default View;
