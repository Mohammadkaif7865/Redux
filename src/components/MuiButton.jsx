import { Button, Stack, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatUnderlined from "@mui/icons-material/FormatUnderlined";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
function MuiButton() {
    const [formats, setFormats] = useState([]);
    console.log(formats);
    const handleFormatChange = (event, updatedFormats) => {
        setFormats(updatedFormats);
    }
    return (
        <>
            <Stack spacing={4}>
                <Stack spacing={2} direction="row">
                    <Button variant="text" href="https://google.com">Text</Button>
                    <Button variant="contained">Contained</Button>
                    <Button variant="outlined">Outlined</Button>
                </Stack>
                <Stack spacing={2} direction="row">
                    <ButtonGroup aria-label="alignment button group" variant="contained" orientation="vertical" size='small' color="secondary">
                        <Button onClick={() => alert("Left")}>Left</Button>
                        <Button onClick={() => alert("Center")}>Center</Button>
                        <Button onClick={() => alert("Right")}>Right</Button>
                    </ButtonGroup>
                </Stack>
                <Stack spacing={2} direction="row">
                    <Button variant="contained" color="primary">Primary</Button>
                    <Button variant="contained" color="warning">Warning</Button>
                    <Button variant="contained" color="success">Success</Button>
                    <Button variant="contained" color="secondary">Secondary</Button>
                    <Button variant="contained" color="info">Info</Button>
                    <Button variant="contained" color="error">Error</Button>
                </Stack>
                {/*Color variant*/}
                <Stack spacing={2} direction="row">
                    <Button variant="text" color="primary">Primary</Button>
                    <Button variant="text" color="warning">Warning</Button>
                    <Button variant="text" color="success">Success</Button>
                    <Button variant="text" color="secondary">Secondary</Button>
                    <Button variant="text" color="info">Info</Button>
                    <Button variant="text" color="error">Error</Button>
                </Stack>
                {/*By default the buttom size is medium*/}
                <Stack display="block" spacing={2} direction="row">
                    <Button variant="outlined" size="small" color="primary">Primary</Button>
                    <Button variant="outlined" size="medium" color="warning">Warning</Button>
                    <Button variant="outlined" size="large" color="success">Success</Button>
                    <Button variant="outlined" size="small" color="secondary">Secondary</Button>
                    <Button variant="outlined" size="small" color="info">Info</Button>
                    <Button variant="outlined" size="small" color="error">Error</Button>
                </Stack>
                {/*Icon have 2000 icons options*/}
                <Stack display="block" spacing={2} direction="row">
                    <Button variant="contained" startIcon={<SendIcon />}>Send</Button>
                    <Button variant="contained" endIcon={<SendIcon />} disableElevation disableRipple value={2} onClick={(e) => { alert(e.target.value); console.log(e.target.value) }}>Send</Button>
                    <Button variant="contained" endIcon={<SendIcon />}></Button>
                    <IconButton aria-label="send" color="warning" size="small">
                        <SendIcon />
                    </IconButton>
                </Stack>
                <Stack direction='row'>
                    <ToggleButtonGroup aria-label="text formatting" value={formats} onChange={handleFormatChange} size="small" exclusive>
                        <ToggleButton value="bold" aria-label="bold">
                            <FormatBoldIcon />
                        </ToggleButton>
                        <ToggleButton value="italic" aria-label="italic">
                            <FormatItalicIcon />
                        </ToggleButton>
                        <ToggleButton value="underlined" aria-label="underlined">
                            <FormatUnderlined />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
            </Stack>
        </>
    )
}
export default MuiButton;  