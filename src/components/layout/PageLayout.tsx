import { CircularProgress, Grid } from "@mui/material";
import React from "react";
import Title from "src/components/ui/Title";
import useIsLoading from "src/hooks/useIsLoading";

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function PageLayout({
  title,
  children,
}: PageLayoutProps) {
  const isLoading = useIsLoading();
  return (
    <Grid container paddingTop={2}>
      <Grid item xs={12} display="flex" alignItems="center">
        <Title title={title} />
        <div style={{ flex: 1, textAlign: "center" }}>
          {isLoading && <CircularProgress />}
        </div>
      </Grid>
      <Grid item xs={12} alignSelf="center" paddingTop={1}>
        {children}
      </Grid>
    </Grid>
  );
}
