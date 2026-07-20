import { Button, Container, Typography, Box } from "@mui/material";

interface WelcomeHeroProps {
  title: string;
  onActionClick: () => void;
}

function WelcomeHero({ title, onActionClick }: WelcomeHeroProps) {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 4,
          p: 3,
          boxShadow: 2,
          borderRadius: 2,
          textAlignment: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Welcome back to your dashboard. Explore your latest performance
          insights below.
        </Typography>

        {/* Components come with strict, type-safe variant selections */}

        <Button variant="contained" color="primary">
          Click Me
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={onActionClick}
          fullWidth
        >
          Get Started
        </Button>
      </Box>
    </Container>
  );
}

export const Day29 = () => {
  return (
    <>
      <WelcomeHero
        title="Headlines for the day"
        onActionClick={() => alert("Button Clicked!")}
      />
    </>
  );
};
