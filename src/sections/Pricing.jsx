import React from "react";
import { Element } from "react-scroll";

const Pricing = () => {
  return (
    <section>
      <Element name={"pricing"}>
        <div className={"container"}>
          <div className={"max-w-960 border-2 border-red-500"}>
            <h3 className={"h3 max-lg:h-4"}>
              Flexible pricing or teams of all sizes
            </h3>
          </div>
        </div>
      </Element>
    </section>
  );
};
export default Pricing;
