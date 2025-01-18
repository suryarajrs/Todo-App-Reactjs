import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Stack,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    if (email === "example@gmail.com" && password === "password123") {
      navigate("/home");
    } else {
      setError(true);
    }
  };

  const handleAutoFill = () => {
    setEmail("example@gmail.com");
    setPassword("password123");
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="90vh"
      sx={{
        background: "linear-gradient(to right,rgb(253, 252, 255),rgb(255, 255, 255))",
        padding: 3,
      }}
    >
      <Paper
        elevation={10}
        sx={{
          width: "100%",
          maxWidth: 400,
          padding: 4,
          borderRadius: 3,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          color="primary"
          fontWeight="bold"
          gutterBottom
          sx={{
            textTransform: "uppercase",
            letterSpacing: 2,
            mb: 1,
          }}
        >
          Sign In
        </Typography>
        <Typography variant="body2" color="textSecondary" mb={3}>
          Access your To-Do App by signing in.
        </Typography>
        <Stack spacing={3}>
          <TextField
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error}
            helperText={
              error && email !== "example@example.com"
                ? "Invalid email. Use: example@gmail.com"
                : ""
            }
          />
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={error}
            helperText={
              error && password !== "password123"
                ? "Invalid password. Use: password123"
                : ""
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            autoComplete="current-password" // Setting autocomplete to password field
          />
          <Button
            variant="contained"
            fullWidth
            onClick={handleSignIn}
            sx={{
              background: "linear-gradient(to right, #6a11cb, #2575fc)",
              ":hover": {
                background: "linear-gradient(to right, #5b0fbf, #1f60f6)",
              },
              textTransform: "none",
              borderRadius: 3,
              padding: "10px 0",
              fontWeight: "bold",
            }}
          >
            Sign In
          </Button>
          {/* Auto-Fill Button */}
          <Button
            variant="outlined"
            fullWidth
            onClick={handleAutoFill}
            sx={{
              marginTop: 2,
              textTransform: "none",
              borderRadius: 3,
              padding: "10px 0",
              fontWeight: "bold",
              color: "#2575fc",
              borderColor: "#2575fc",
              ":hover": {
                borderColor: "#1f60f6",
                color: "#1f60f6",
              },
            }}
          >
            Auto-Fill Credentials
          </Button>
        </Stack>
        <Typography
          variant="caption"
          color="textSecondary"
          display="block"
          sx={{ mt: 2 }}
        >
          Need an account? Contact admin
        </Typography>
      </Paper>
    </Box>
  );
};

export default SignIn;
