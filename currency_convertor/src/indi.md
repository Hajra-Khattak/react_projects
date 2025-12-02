import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  MenuItem,
  Typography,
  Container,
} from '@mui/material';
// import SwapVertIcon from '@mui/icons-material/SwapVert';

const CurrencyConverter = () => {
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('usd');
  const [toCurrency, setToCurrency] = useState('inr');

  const currencies = [
    { code: 'usd', label: 'USD' },
    { code: 'inr', label: 'INR' },
    { code: 'eur', label: 'EUR' },
    { code: 'gbp', label: 'GBP' },
    { code: 'jpy', label: 'JPY' },
  ];

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  const handleConvert = () => {
    if (fromAmount === '' || fromAmount === '0') return;
    
    const exchangeRates = {
      'usd-inr': 83.12,
      'usd-eur': 0.92,
      'usd-gbp': 0.79,
      'usd-jpy': 149.50,
      'inr-usd': 0.012,
      'inr-eur': 0.011,
      'inr-gbp': 0.0095,
      'inr-jpy': 1.80,
      'eur-usd': 1.09,
      'eur-inr': 90.65,
      'eur-gbp': 0.86,
      'eur-jpy': 162.72,
      'gbp-usd': 1.27,
      'gbp-inr': 105.35,
      'gbp-eur': 1.16,
      'gbp-jpy': 189.24,
      'jpy-usd': 0.0067,
      'jpy-inr': 0.56,
      'jpy-eur': 0.0062,
      'jpy-gbp': 0.0053,
    };

    const key = `${fromCurrency}-${toCurrency}`;
    const rate = exchangeRates[key] || 1;
    const converted = (parseFloat(fromAmount) * rate).toFixed(2);
    setToAmount(converted);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: 2,
      }}
    >
      <Container maxWidth="sm">
        <Card
          sx={{
            borderRadius: 3,
            boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
          }}
        >
          <CardContent sx={{ padding: 4 }}>
            <Typography
              variant="h4"
              sx={{
                marginBottom: 4,
                textAlign: 'center',
                fontWeight: 700,
                color: '#333',
              }}
            >
              Currency Converter
            </Typography>

            {/* From Field */}
            <Box sx={{ marginBottom: 3 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: 1,
                }}
              >
                <Typography variant="caption" sx={{ color: '#999', fontWeight: 500 }}>
                  From
                </Typography>
                <Typography variant="caption" sx={{ color: '#999', fontWeight: 500 }}>
                  Currency Type
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <TextField
                  type="number"
                  value={fromAmount}
                  onChange={(e) => setFromAmount(e.target.value)}
                  placeholder="0"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      backgroundColor: '#f5f5f5',
                      '&:hover fieldset': {
                        borderColor: '#667eea',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#667eea',
                      },
                    },
                  }}
                />
                <TextField
                  select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  variant="outlined"
                  sx={{
                    width: 120,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      backgroundColor: '#f5f5f5',
                      '&:hover fieldset': {
                        borderColor: '#667eea',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#667eea',
                      },
                    },
                  }}
                >
                  {currencies.map((curr) => (
                    <MenuItem key={curr.code} value={curr.code}>
                      {curr.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            </Box>

            {/* Swap Button */}
            <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 3 }}>
              <Button
                onClick={handleSwap}
                variant="contained"
                sx={{
                  backgroundColor: '#667eea',
                  borderRadius: '50%',
                  width: 56,
                  height: 56,
                  minWidth: 56,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)',
                  '&:hover': {
                    backgroundColor: '#5568d3',
                    boxShadow: '0 6px 16px rgba(102, 126, 234, 0.6)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {/* <SwapVertIcon sx={{ color: 'white', fontSize: 28 }} /> */}
              </Button>
            </Box>

            {/* To Field */}
            <Box sx={{ marginBottom: 3 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: 1,
                }}
              >
                <Typography variant="caption" sx={{ color: '#999', fontWeight: 500 }}>
                  To
                </Typography>
                <Typography variant="caption" sx={{ color: '#999', fontWeight: 500 }}>
                  Currency Type
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <TextField
                  type="number"
                  value={toAmount}
                  onChange={(e) => setToAmount(e.target.value)}
                  placeholder="0"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      backgroundColor: '#f5f5f5',
                      '&:hover fieldset': {
                        borderColor: '#667eea',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#667eea',
                      },
                    },
                  }}
                />
                <TextField
                  select
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  variant="outlined"
                  sx={{
                    width: 120,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      backgroundColor: '#f5f5f5',
                      '&:hover fieldset': {
                        borderColor: '#667eea',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#667eea',
                      },
                    },
                  }}
                >
                  {currencies.map((curr) => (
                    <MenuItem key={curr.code} value={curr.code}>
                      {curr.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            </Box>

            {/* Convert Button */}
            <Button
              variant="contained"
              fullWidth
              onClick={handleConvert}
              sx={{
                backgroundColor: '#667eea',
                padding: '16px',
                fontSize: '16px',
                fontWeight: 600,
                borderRadius: 2,
                textTransform: 'none',
                boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)',
                '&:hover': {
                  backgroundColor: '#5568d3',
                  boxShadow: '0 6px 16px rgba(102, 126, 234, 0.6)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default CurrencyConverter;

<!-- ============================================ -->

import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  MenuItem,
  Typography,
  Container,
} from "@mui/material";
// import SwapVertIcon from "@mui/icons-material/SwapVert";
import SwapVertIcon from "@mui/icons-material/SwapVert";


const App = () => {
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");

  const currencies = [
    { code: "usd", label: "USD" },
    { code: "inr", label: "INR" },
    { code: "eur", label: "EUR" },
    { code: "gbp", label: "GBP" },
    { code: "jpy", label: "JPY" },
  ];

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  return (
    <Box sx={{width: "100vw", minHeight: "100vh"}}>
    <Box
      sx={{
        minHeight: "94vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(15deg, #161616 0%, #20023e 100%",
        // p: 2,
      }}
    >
      <Container maxWidth="sm">
        <Card
          sx={{
            borderRadius: 3,
            boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Typography
              variant="h4"
              sx={{
                mb: 4,
                textAlign: "center",
                fontWeight: 750,   
              }}
              color="warning"
            >
              Currency Converter
            </Typography>

            {/* FROM FIELD */}
            <Box sx={{ mb: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Typography variant="caption" sx={{ color: "#999", fontWeight: 500 }}>
                  From
                </Typography>
                <Typography variant="caption" sx={{ color: "#999", fontWeight: 500 }}>
                  Currency Type
                </Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                <TextField
                  type="number"
                  value={fromAmount}
                  onChange={(e) => setFromAmount(e.target.value)}
                  placeholder="0"
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      backgroundColor: "#f5f5f5",
                    },
                  }}
                />

                <TextField
                  select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  sx={{
                    width: 120,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      backgroundColor: "#f5f5f5",
                    },
                  }}
                >
                  {currencies.map((curr) => (
                    <MenuItem key={curr.code} value={curr.code}>
                      {curr.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            </Box>

            {/* SWAP BUTTON */}
            <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
              <Button
                onClick={handleSwap}
                variant="contained"
                sx={{
                  backgroundColor: "#667eea",
                  borderRadius: "50%",
                  width: 56,
                  height: 56,
                  minWidth: 56,
                }}
              >
                <SwapVertIcon sx={{ color: "white", fontSize: 28 }} />
              </Button>
            </Box>

            {/* TO FIELD */}
            <Box sx={{ mb: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Typography variant="caption" sx={{ color: "#999", fontWeight: 500 }}>
                  To
                </Typography>
                <Typography variant="caption" sx={{ color: "#999", fontWeight: 500 }}>
                  Currency Type
                </Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                <TextField
                  type="number"
                  value={toAmount}
                  onChange={(e) => setToAmount(e.target.value)}
                  placeholder="0"
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      backgroundColor: "#f5f5f5",
                    },
                  }}
                />

                <TextField
                  select
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  sx={{
                    width: 120,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      backgroundColor: "#f5f5f5",
                    },
                  }}
                >
                  {currencies.map((curr) => (
                    <MenuItem key={curr.code} value={curr.code}>
                      {curr.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            </Box>

            {/* CONVERT BUTTON */}
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#667eea",
                p: "16px",
                fontSize: "16px",
                fontWeight: 600,
                borderRadius: 2,
                textTransform: "none",
              }}
            >
              Convert {fromCurrency.toUpperCase()} → {toCurrency.toUpperCase()}
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
    </Box>
  );
};

export default App;


