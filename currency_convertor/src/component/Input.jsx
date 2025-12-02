import React, { useEffect, useId } from 'react'
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

function Input(
{
    label, 
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    // className = ""
}) {

    // useEffect(()=>{
    //     fetch = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`
    //     .then((res)=>res.json)
    //     .then((res)=>setCurrency(res.currency))
    // }, [])
    
    //   const [fromAmount, setFromAmount] = useState("");
    //   const [toAmount, setToAmount] = useState("");
    //   const [fromCurrency, setFromCurrency] = useState("usd");
    //   const [toCurrency, setToCurrency] = useState("inr");
    //   const [currencies, setCurrency] = useState([]);
    
    //   const currencies = [
    //     { code: "usd", label: "USD" },
    //     { code: "inr", label: "INR" },
    //     { code: "eur", label: "EUR" },
    //     { code: "gbp", label: "GBP" },
    //     { code: "jpy", label: "JPY" },
    //   ];
    
    //   const handleSwap = () => {
    //     setFromCurrency(toCurrency);
    //     setToCurrency(fromCurrency);
    //     setFromAmount(toAmount);
    //     setToAmount(fromAmount);
    //   };
    const amountInputId = useId()

    return (
        <>
            <Box  sx={{width: "100vw", minHeight: "100vh" }}>
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
                        {/* <Typography
                          variant="h4"
                          sx={{
                            mb: 4,
                            textAlign: "center",
                            fontWeight: 750,   
                          }}
                          color="warning"
                        >
                          Currency Converter
                        </Typography> */}
            
                        {/* FROM FIELD */}
                        <Box sx={{ mb: 3 }}>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              mb: 1,
                            }}
                          >
                            <Typography htmlFor={amountInputId} variant="caption" sx={{ color: "#999", fontWeight: 500 }}>
                              {label}
                            </Typography>
                            <Typography variant="caption" sx={{ color: "#999", fontWeight: 500 }}>
                              Currency Type
                            </Typography>
                          </Box>
            
                          <Box sx={{ display: "flex", gap: 2 }}>
                            <TextField
                                id= {amountInputId}
                              type="number"
                              value={amount}
                              disabled={amountDisable}
                              onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
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
                              value={selectCurrency}
                              onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                              disabled = {currencyDisable}
                              sx={{
                                width: 120,
                                "& .MuiOutlinedInput-root": {
                                  borderRadius: 2,
                                  backgroundColor: "#f5f5f5",
                                },
                              }}
                            >
                              {currencyOptions.map((curr) => (
                                <MenuItem key={curr} value={curr}>
                                  {curr}
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
        </>
    )
}

export default Input
