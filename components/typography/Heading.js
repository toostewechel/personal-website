import { styled } from "../../stitches.config.js";

const StyledHeading = styled("h1", {
  fontFamily: "$header",
  fontWeight: "$extra-bold",
  lineHeight: "$compact",
  color: "$mauve12",
  m: 0,

  variants: {
    color: {
      dark: {
        color: "$mauve12",
      },
      light: {
        color: "$mauve1",
      },
    },
    level: {
      1: {
        fontSize: "$4xl",
        fontWeight: "$black",
        letterSpacing: "$tracking-tighter",
        lineHeight: "$tight",
        pt: "$spacing-06",
        pb: "$spacing-04",
      },
      2: {
        fontSize: "$3xl",
        fontWeight: "$black",
        letterSpacing: "$tracking-tighter",
        lineHeight: "$tight",
        pt: "$spacing-06",
        pb: "$spacing-05",

        "@bp2": {
          fontSize: "$3xl",
        },
      },
      3: {
        fontSize: "$3xl",
        fontWeight: "$extra-bold",
        letterSpacing: "$tracking-tighter",
        pt: "$spacing-05",
        pb: "$spacing-03",
      },
      4: {
        fontSize: "$2xl",
        fontWeight: "$extra-bold",
        letterSpacing: "$tracking-tighter",
        pt: "$spacing-04",
        pb: "$spacing-02",
      },
      5: {
        fontSize: "$xl",
        fontWeight: "$semi-bold",
        letterSpacing: "$tracking-normal",
      },
    },
  },
});

function Heading(props) {
  return (
    <StyledHeading as={props.as} level={props.level} color={props.color}>
      {props.title}
    </StyledHeading>
  );
}

export default Heading;
