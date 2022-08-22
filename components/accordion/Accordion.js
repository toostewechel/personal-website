import React from "react";
import { styled } from "../../stitches.config.js";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";

const StyledAccordion = styled(AccordionPrimitive.Root, {
  width: "100%",
})

const StyledItem = styled(AccordionPrimitive.Item, {
  overflow: "hidden",
  borderBottom: "1px solid $gray6",
  marginTop: 1,

  '&:focus-within': {
    outlineColor: "$violet11",
  },
})

const StyledHeader = styled(AccordionPrimitive.Header, {
  all: "unset",
  display: "flex",
  borderBottom: "1px solid $gray6",
})

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  all: "unset",
  display: "flex",
  flex: 1,
  alignItems: "center",
  justifyContent: "space-between",
  padding: "$spacing-05",
  fontFamily: "$header",
  fontSize: "$xl",
  lineHeight: "$compact",
  letterSpacing: "$tracking-tight",
  color: "$mauve12",
  '&[data-state="closed"]': {
    backgroundColor: "white",
  },
  '&[data-state="open"]': {
    backgroundColor: "$white",
  },
  "&:hover": {
    backgroundColor: "$violet3",
  },
})

const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: "hidden",
  color: "$gray-12",
  backgroundColor: "$gray2",
})

const StyledContentText = styled("div", {
  padding: "$spacing-05",
  fontSize: "$lg",
  fontFamily: "$default",
  color: "$gray12",
})

const StyledChevron = styled(ArrowRightSLineIcon, {
  color: "$violet11",
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  '[data-state=open] &': { transform: 'rotate(90deg)' },
})

const DecorativeIcon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pr: "$spacing-02",
  width: "24px",
  height: "24px",
  color: "$violet11",

  "@bp1": {
    pr: "$spacing-03",
  },
})

const Box = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
})

//exports
export const Accordion = StyledAccordion;
export const AccordionItem = StyledItem;
export const AccordionTrigger = React.forwardRef(({ children, ...props }, forwardedRef) => (
  <StyledHeader>
    <StyledTrigger {...props} ref={forwardedRef}>
      <Box>
        <DecorativeIcon>
          <img src={props.src} />
        </DecorativeIcon>
       <div style={{marginTop: "3px"}}>{children}</div>
      </Box>
      <StyledChevron aria-hidden />
    </StyledTrigger>
  </StyledHeader>
));
export const AccordionContent = React.forwardRef(({ children, ...props }, forwardedRef) => (
  <StyledContent {...props} ref={forwardedRef}>
    <StyledContentText>{children}</StyledContentText>
  </StyledContent>
));