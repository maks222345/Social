import { Link } from "react-router-dom";
import { AppButton, AppButtonProps } from "../AppButton/AppButton";

type LinkButtonProps = {
  path: string;
} & AppButtonProps; 

export const LinkButton = ({ path, buttonLabel, ...buttonProps }: LinkButtonProps) => {
  return (
    <Link to={path}>
      <AppButton buttonLabel={buttonLabel} {...buttonProps} />
    </Link>
  );
};

