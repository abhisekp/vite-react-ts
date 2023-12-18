import { Outlet } from "react-router-dom";
import { FC } from "react";

export const Layout: FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
