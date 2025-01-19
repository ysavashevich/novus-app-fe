import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import * as Progress from "@radix-ui/react-progress";
import { css } from "@emotion/react";
import { useGetPlaceholderQuery } from "../../store/apiSlice";

type Props = {};

const progressStyles = css`
  position: relative;
  overflow: hidden;
  background: black;
  border-radius: 99999px;
  width: 300px;
  height: 25px;
  transform: translateZ(0);
`;

const progressIndicator = css`
  background-color: white;
  width: 100%;
  height: 100%;
  transition: transform 660ms cubic-bezier(0.65, 0, 0.35, 1);
`;

export default function HomePage({}: Props) {
  const { isError, isLoading, currentData, isSuccess } =
    useGetPlaceholderQuery();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(23), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => setProgress(100), 100);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  return (
    <div>
      <Progress.Root value={progress} css={progressStyles}>
        <Progress.Indicator
          css={progressIndicator}
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      </Progress.Root>
      <p>{isLoading ? "..." : currentData}</p>
      <p>{isError && "Error"}</p>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/register/user-type">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
}
