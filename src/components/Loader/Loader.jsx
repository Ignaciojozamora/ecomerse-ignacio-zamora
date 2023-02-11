import React from "react";
import { RaceBy } from "@uiball/loaders";


function Loader(props) {
  return (
    <RaceBy size={220} lineWeight={6} speed={0.8} color="orange" {...props} />
  );
}
export default Loader;