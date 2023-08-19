import { Typography } from "@mui/material";
import { styled } from "@mui/system";

interface TitleProps {
  title: string;
}

const TypographyStyled = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.primary.main,
    fontWeight: "bold",
  };
});

export default function Title({ title }: TitleProps) {
  return <TypographyStyled variant="body1">{title}</TypographyStyled>;
}
