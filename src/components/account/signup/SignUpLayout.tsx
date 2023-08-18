import { Container, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

interface SignUpLayoutProps extends PropsWithChildren {
  title: string;
}

export default function SignUpLayout({
  children,
  title,
}: SignUpLayoutProps) {
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Typography component="h2" variant="h5">
          {title}
        </Typography>
        {children}
      </Container>
    </div>
  );
}
