import React from "react";

type Props = {
  if: unknown;
  children: React.ReactNode;
};

const ShouldRender = ({ if: condition, children }: Props) => (
  <>{condition ? children : null}</>
);

export default ShouldRender;
