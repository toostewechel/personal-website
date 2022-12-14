import { styled } from "../../../stitches.config.js";

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",

  variants: {
    alignment: {
      center: {
        alignItems: "center",
        textAlign: "center",
      },
      left: {
        alignItems: "start",
        textAlign: "left",
      },
    },
  },
});

const Heading = styled("h2", {
  fontSize: "$3xl",
  fontWeight: "$black",
  fontFamily: "$header",
  letterSpacing: "$tracking-tighter",
  color: "$mauve12",
  mb: "$spacing-02",

  "@bp1": {
    fontSize: "$4xl",
    mb: "$spacing-02",
  },
});

const Description = styled("p", {
  fontSize: "$base",
  fontWeight: "$regular",
  fontFamily: "$default",
  lineHeight: "$base",
  letterSpacing: "$tracking-normal",
  color: "$mauve12",
  maxWidth: "720px",

  "@bp1": {
    fontSize: "$xl",
  },
});

function ContentBlock(props) {
  return (
    <Container alignment={props.alignment}>
      <Heading>{props.heading}</Heading>
      <Description>{props.description}</Description>
    </Container>
  );
}

export default ContentBlock;
