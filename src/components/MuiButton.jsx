import { Button, Stack, IconButton , ButtonGroup} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
function MuiButton() {
    return (
        <>
            <Stack spacing={4}>
                <Stack spacing={2} direction="row">
                    <Button variant="text" href="https://google.com">Text</Button>
                    <Button variant="contained">Contained</Button>
                    <Button variant="outlined">Outlined</Button>
                </Stack>
                <Stack spacing={2} direction="row">
                  <Button variant="contained"></Button>
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
                    <Button variant="contained" endIcon={<SendIcon />} disableElevation disableRipple value={2} onClick={(e) =>{ alert( e.target.value); console.log(e.target.value)}}>Send</Button>
                    <Button variant="contained" endIcon={<SendIcon />}></Button>
                    <IconButton aria-label="send" color="warning" size="small">
                        <SendIcon />
                    </IconButton>
                </Stack>
            </Stack>
        </>
    )
}
export default MuiButton;  