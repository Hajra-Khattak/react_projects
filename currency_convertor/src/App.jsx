import React from 'react'
import { useState } from 'react'
import { Input } from './component'
import useCurrencyInfo from "./hooks/useCurrencyInfo"
import {
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  MenuItem,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, SetConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from) || {};
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    SetConvertedAmount(amount);
  }

  const convert = () => {
    if (currencyInfo[to]) {
      SetConvertedAmount(amount * currencyInfo[to]);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        // backgroundImage: `url('https://images.pexels.com/photos/20574226/pexels-photo-20574226.jpeg')`,
        backgroundImage: `url('https://images.unsplash.com/photo-1669881336715-5a51a78d5434?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        // background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            maxWidth: 450,
            mx: "auto",
            p: 3,
            borderRadius: 3,
            border: "1px solid rgba(255,255,255,0.6)",
            backdropFilter: "blur(6px)",
            backgroundColor: "rgba(255,255,255,0.3)",
          }}
        >
          <Typography variant="h5" sx={{ textAlign: "center", mb: 3, fontWeight: 700 }}>
            Currency Converter
          </Typography>

          <Box
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            {/* FROM SECTION */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="caption" sx={{ display: "block", mb: 1, fontWeight: 500 }}>
                From
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <TextField
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0"
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      backgroundColor: "rgba(255,255,255,0.8)",
                    },
                  }}
                />
                <TextField
                  select
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  sx={{
                    width: 100,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      backgroundColor: "rgba(255,255,255,0.8)",
                    },
                  }}
                >
                  {options.map((curr) => (
                    <MenuItem key={curr} value={curr}>
                      {curr.toUpperCase()}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            </Box>

            {/* SWAP BUTTON */}
            <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
              <Button
                onClick={swap}
                variant="contained"
                sx={{
                  backgroundColor: "#667eea",
                  borderRadius: "50%",
                  width: 50,
                  height: 50,
                  minWidth: 50,
                  "&:hover": {
                    backgroundColor: "#5568d3",
                  },
                }}
              >
                <SwapVertIcon sx={{ color: "white" }} />
              </Button>
            </Box>

            {/* TO SECTION */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="caption" sx={{ display: "block", mb: 1, fontWeight: 500 }}>
                To
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <TextField
                  type="number"
                  value={convertedAmount}
                  disabled
                  placeholder="0"
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      backgroundColor: "rgba(255,255,255,0.8)",
                    },
                  }}
                />
                <TextField
                  select
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  sx={{
                    width: 100,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      backgroundColor: "rgba(255,255,255,0.8)",
                    },
                  }}
                >
                  {options.map((curr) => (
                    <MenuItem key={curr} value={curr}>
                      {curr.toUpperCase()}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            </Box>

            {/* SUBMIT BUTTON */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#667eea",
                py: 2,
                fontWeight: 600,
                fontSize: "16px",
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "#5568d3",
                },
              }}
            >
              Convert
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default App;
