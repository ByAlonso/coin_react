import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, Button, FormControl, Grid, Input, InputAdornment, InputLabel } from "@mui/material";
import { display, flexbox } from "@mui/system";
import React from "react";
import { Component } from "react";

export default class Trackpad extends Component {
    render() {
        const buttons: any = [];
        const grid: any = [];

        for (let i = 1; i <= 9; i++) {
            buttons.push(<Button variant="outlined" className="inputButton" value={i}><p>{i}</p></Button>)
        }

        function FormRow(_index: number) {
            return (
                <React.Fragment>
                    <Grid item xs={1}>
                        {buttons[_index]}
                    </Grid>
                    <Grid item xs={1}>
                        {buttons[_index + 1]}
                    </Grid>
                    <Grid item xs={1}>
                        {buttons[_index + 2]}
                    </Grid>
                </React.Fragment>
            );
        }

        for (let i = 0; i < 3; i++) {
            grid.push(<Grid container item spacing={2}>
                {FormRow(i * 3)}
            </Grid>)
        }
        console.log(grid);


        return (
            <Grid container className="semiContainer">
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    />
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            {grid}
                            <Grid container item spacing={2}>
                                <Grid item xs={1}>
                                    <Button variant="outlined" className="inputButton"><ArrowBack /></Button>
                                </Grid>
                                <Grid item xs={1}>
                                    <Button variant="outlined" className="inputButton" value={0}><p>0</p></Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </FormControl>
            </Grid>
        )
    }
}
