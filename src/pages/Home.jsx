import {Typography, Box, useTheme, useMediaQuery} from "@mui/material";

export const Home = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));

  let variant = 'h2';
  if (isSm) variant = 'h3'
  if (isXs) variant = 'h4'

  return (
    <Box sx={{
      position: "relative",
      height: "94vh",
      overflow: "hidden",
    }}>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "background.paper",
          justifyContent: "center",
          alignItems: "center",
          height: "30vh",
          width: "45vw",
          position: "relative",
          zIndex: "2",
          borderRadius: "0 10rem 10rem 0",
          top: "5rem",
        }}>
        <Typography
          variant={variant}
          color="primary"
          sx={{
            textShadow: `
      0 0 5px #facef5,
      0 0 10px #facef5,
      0 0 20px #ff80ff,
      0 0 30px #ff80ff,
      0 0 40px #ff80ff
    `,
          }}
        >
          Welcome to GlowBites
        </Typography>
      </Box>
      <img
        src="/foodBackground.jpg"
        alt="background"
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}/>
    </Box>
  )
}