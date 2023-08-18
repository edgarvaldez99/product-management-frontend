import { Grid } from "@mui/material";
import React from "react";
import SearchField from "src/components/form/SearchField";
import Title from "src/components/ui/Title";

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
  onSearchChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PageLayout({
  title,
  children,
  onSearchChange,
}: PageLayoutProps) {
  return (
    <Grid container paddingTop={4} flexDirection="row" justifyContent="center">
      <Title title={title} />
      <SearchField onChange={onSearchChange} />
      <Grid item xs={10} alignSelf="center" paddingTop={4}>
        {children}
      </Grid>
    </Grid>
  );
}
