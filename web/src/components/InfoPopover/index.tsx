/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { usePopoverState } from 'reakit/Popover';

import {
  StyledPopoverDisclosure,
  Info,
  StyledPopover,
  AnimatedPopover,
} from './styles';

interface Props {
  content: string;
}

const InfoPopover: React.FC<Props> = ({ content }) => {
  const popover = usePopoverState({ animated: 250, placement: 'right-start' });

  return (
    <>
      <StyledPopoverDisclosure {...popover} tabIndex={0}>
        <Info />
      </StyledPopoverDisclosure>

      <StyledPopover
        {...popover}
        tabIndex={0}
        aria-label="Form info"
        hideOnEsc
        hideOnClickOutside
      >
        <AnimatedPopover>
          {/* <StyledPopoverArrow {...popover} /> */}
          {content}
        </AnimatedPopover>
      </StyledPopover>
    </>
  );
};

export default InfoPopover;
