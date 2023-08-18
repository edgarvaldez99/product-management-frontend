import { PropsWithChildren } from "react";

// Mui imports
import { Container, Typography } from "@mui/material";

interface FormLayoutProps extends PropsWithChildren {
  title: string;
}

export default function FormLayout({ children, title }: FormLayoutProps) {
  return (
    <div>
      <Container component="main" sx={{ mt: 2 }}>
        <Typography component="h2" variant="h5">
          {title}
        </Typography>
        {children}
      </Container>
    </div>
  );
}
