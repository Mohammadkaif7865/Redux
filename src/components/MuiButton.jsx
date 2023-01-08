import { Button, Stack } from "@mui/material";
function MuiButton() {
    return (
        <>
            <Stack spacing={2} direction="row">
                <Button variant="text" href="https://google.com">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
        </>
    )
}
export default MuiButton;  