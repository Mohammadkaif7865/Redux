import { InputAdornment, Stack, TextField } from "@mui/material";
import '../App.css';
import { useState } from "react";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
function MuiTextField() {
    const [visibilty, setVisibility] = useState("password");
    const changePasswordVisibilty = () => {
        if (visibilty === "password") {
            setVisibility("text");
        }
        if (visibilty === "text") {
            setVisibility("password");
        }
    }
    return (
        <>
            <Stack spacing={4}>
                <Stack spacing={2} direction="row">
                    <TextField label="name" variant="outlined" color="secondary">
                    </TextField>
                    <TextField label="subject" variant="filled" color="error">
                    </TextField>
                    <TextField label="age" variant="standard" color="success">
                    </TextField>
                </Stack>
                <Stack spacing={2} direction="row">
                    <TextField label="
                   Secondary small" variant="outlined" color="secondary" size="small">
                    </TextField>
                    <TextField label="
                   Warning Large" variant="outlined" color="warning" size="large" required helperText="Do not give the wrong value">
                    </TextField>
                    <TextField label="Password" variant="outlined" color="secondary" size="medium" required helperText="Do not share your password with anyone" type="password" disabled>
                    </TextField>
                    <TextField label="Password" variant="outlined" value="dang" color="secondary" size="medium" required helperText="Do not share your password with anyone" InputProps={{ readOnly: true }}>
                    </TextField>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <TextField
                        label="Amount"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>
                        }} />
                    <TextField
                        label="Weight"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">kg</InputAdornment>
                        }} />
                    <TextField
                        label="password"
                        helperText="Enter your password"
                        type={visibilty}
                        // style={{ webkitTextSecurity: "square"}}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">{
                                visibilty === "password" ? <VisibilityOffIcon  cursor="pointer" onClick={changePasswordVisibilty} />
                                    : <VisibilityIcon  cursor="pointer" onClick={changePasswordVisibilty} />}</InputAdornment>
                        }} />
                </Stack>
            </Stack>
        </>
    )
}
// style="-webkit-text-security: square;"
export default MuiTextField;