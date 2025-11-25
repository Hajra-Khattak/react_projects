import { useCallback, useState, useEffect, useRef } from "react";
import {
  Box,
  TextField,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Checkbox,
  Button,
  LinearProgress,
  Typography
} from "@mui/material";
import Slider from "@mui/material/Slider";

function App() {
  // const [loading, setLoading] = useState(false);
  const [terms, setTerms] = useState(false);

  const [length, setLength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)

  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@$#^&*()_+-|\{}[]~/"

    for (let i = 0; i < length; i++) {
      let element = Math.random() * str.length + 1;
      pass += str.charAt(element);
    }
    setPassword(pass);

  }, [length, numAllowed ,charAllowed, setPassword])

  const copyPasswordtoClipboard = useCallback(()=> {
      // passwordRef.current?.select()
       passwordRef.current.focus();
      passwordRef.current.setSelectionRange(0, 9)
      console.log("passwordRef.current:", passwordRef.current);
console.log("is input element?", passwordRef.current instanceof HTMLInputElement);
console.log("has setSelectionRange?", typeof passwordRef.current?.setSelectionRange);
      window.navigator.clipboard.writeText(password)
  }, [password])

  // Progress value for example (50%)
  // const progressValue = 80;

  // passwordGenerator();
  useEffect(()=>{
    passwordGenerator()
  }, [length, charAllowed, numAllowed, passwordGenerator])

  
  return (
    // <Box  sx={{ display:"flex", justifyContent: "center"}}>
    <Box
      sx={{
        width: "400px",
        margin: "50px auto",
        padding: 4,
        borderRadius: 3,
        boxShadow: "0px 4px 20px 15px rgba(0,0,0,0.1)",
        backgroundColor: "#ffffffff",
      }}
    >
      <Typography variant="h5" mb={2} textAlign="center">
        MUI Form
      </Typography>

      {/* Password input */}
      <TextField
        fullWidth
        // label="Password"
        type="text"
        placeholder="*******"
        variant="outlined" 
        sx={{ mb: 2 }}
        value={password}
        aria-readonly
        inputRef={passwordRef}
      />
        <Box>
          
        <Button 
    variant="contained"
    sx={{ backgroundColor: "primary" }}
    onClick={copyPasswordtoClipboard}
  >
    Copy
  </Button>
  </Box>

      {/* Checkboxes */}
      <FormControl sx={{ mb: 2 }}>
        <FormControlLabel id="numInput" defaultChecked={numAllowed} onChange={()=>{setnumAllowed((prev)=> !prev);}} control={<Checkbox />}  label="Numbers" />
        <FormControlLabel  id="charInput" defaultChecked={charAllowed} onChange={()=>{setcharAllowed((prev)=> !prev);}}  control={<Checkbox />} label="Characters" />
      </FormControl>

      {/* Progress bar + label */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
    <Slider
  value={length}
  min={6}
  max={100}
  sx={{ mr: 2 }}
  onChange={(e) => setLength(e.target.value)}
/>
       
        <Typography variant="body2" color="warning" >
          Length<Box component="span" sx={{ fontWeight: "bold" }}>{length}</Box>
        </Typography>
      </Box>
    </Box>
    // </Box>
  );
}


export default App