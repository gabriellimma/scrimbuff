import styled from 'styled-components';
import { Popover, PopoverDisclosure, PopoverArrow } from 'reakit/Popover';

import { FaInfoCircle } from 'react-icons/fa';

export const Info = styled(FaInfoCircle)`
  margin-right: 10px;
  color: white;
`;

export const StyledPopover = styled(Popover)``;
export const StyledPopoverDisclosure = styled(PopoverDisclosure)`
  background: transparent;
  border: 0;
`;
export const StyledPopoverArrow = styled(PopoverArrow)``;
export const AnimatedPopover = styled.div`
  background-color: ${(props): string => props.theme.colors.darkgray};
  padding: 16px;
  border: 1px solid ${(props): string => props.theme.colors.red};
  border-radius: 4px;
  transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;
  opacity: 0;
  transform-origin: top center;
  transform: translate3d(0, -20px, 0);
  [data-enter] & {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
