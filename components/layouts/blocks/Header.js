import { styled } from "../../../stitches.config.js";
import React, { useState } from "react";
import AvatarStatusBadgePopover from "../../popover/AvatarStatusBadgePopover.js";

const HeaderContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "$spacing-04",
  backgroundColor: "transparent",

  "@bp1": {
    padding: "$spacing-05",
  },
});

const Box = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "196px",

  "@bp1": {
    width: "232px",
  },
});

const StyledLogo = styled("img", {
  width: "100%",
  height: "auto",
});

function Header() {
  return (
    <HeaderContainer>
      <Box href="/">
        <StyledLogo src="/logo/logo.png" />
      </Box>
      <AvatarStatusBadgePopover />
    </HeaderContainer>
  );
}

export default Header;
