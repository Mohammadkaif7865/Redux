import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";
function MuiSelect() {
    const [country , setCountry] = useState("");
    const handleChange = (e)=>{
        setCountry(e.target.value);
    }
    console.log({country});
    return (
        <>
            <Box width="250px">
                <TextField label="Select country" select onChange={handleChange} value={country} fullWidth>
                    <MenuItem value="IN">India</MenuItem>
                    <MenuItem value="US">USA</MenuItem>
                    <MenuItem value="AU">Australia</MenuItem>
                </TextField>
            </Box>
        </>
    )
}
export default MuiSelect;