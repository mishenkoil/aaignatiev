import { User as UserNextUI, UserProps } from "@nextui-org/react";
import { FC } from "react";
import styled from "styled-components";

const StyledUser = styled(UserNextUI)`
  color: white;

  & .text-small {
    white-space: nowrap;
    max-width: 30rem;
    overflow: hidden;
    text-overflow: ellipsis;

    font:
      600 12px var(--font-unbounded),
      sans-serif;

    @media (min-width: 744px) {
      font:
        600 16px var(--font-unbounded),
        sans-serif;
    }
  }

  & .text-tiny {
    color: white;
    font:
      300 12px var(--font-inter),
      sans-serif;

    @media (min-width: 744px) {
      font:
        300 14px var(--font-inter),
        sans-serif;
    }
  }
`;

export const User: FC<UserProps & { photo: string }> = ({
  photo,
  ...props
}) => {
  return (
    <StyledUser
      {...props}
      avatarProps={{
        src: photo,
        size: "lg",
      }}
    />
  );
};
