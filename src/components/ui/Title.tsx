import { Grid, Typography } from "@mui/material";

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <Grid item xs={10}>
      <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
        {title}
      </Typography>
    </Grid>
  );
}
