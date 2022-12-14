import { styled } from "../../stitches.config.js";

const Container = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "$spacing-04",
  alignItems: "center",
});

const AvatarContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "100%",
});

const StyledImage = styled("img", {
  size: "$7",
});

const FlexWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
});

const Title = styled("h3", {
  fontSize: "$lg",
  fontWeight: "$extra-bold",
  fontFamily: "$header",

  color: "$mauve12",

  "@bp4": {
    fontSize: "$lg",
  },
});

const Description = styled("p", {
  fontSize: "$sm",
  fontWeight: "$regular",
  fontFamily: "$default",
  color: "$gray11",

  "@bp4": {
    fontSize: "$sm",
  },
});

function Avatar(props) {
  return (
    <Container>
      <AvatarContainer>
        <StyledImage src={props.src} />
      </AvatarContainer>
      <FlexWrapper>
        <Title>{props.name}</Title>
        <Description>{props.description}</Description>
      </FlexWrapper>
    </Container>
  );
}

export default Avatar;
