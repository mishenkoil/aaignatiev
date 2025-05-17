import { Card, CardFooter, Skeleton } from "@nextui-org/react";
import { styled } from "styled-components";
import { FC } from "react";

const StyledCard = styled(Card)`
  position: relative;
  border-radius: 32px;
  width: 100%;
  height: 371.64px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: transparent;
`;

const StyledCardFooter = styled(CardFooter)`
  padding: 22px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const StyledSkeleton = styled(Skeleton)`
  border-radius: var(--nextui-radius-large) var(--nextui-radius-large) 0 0;
  height: 254px;
`;

export const MemberSkeletonCard: FC = () => {
  return (
    <StyledCard>
      <StyledSkeleton className="z-0 w-full h-full object-cover" />
      <StyledCardFooter>
        <div className="w-full flex flex-col gap-2">
          <Skeleton className="h-4 w-3/5 rounded-lg" />
          <Skeleton className="h-4 w-4/5 rounded-lg" />
        </div>
      </StyledCardFooter>
    </StyledCard>
  );
};
