import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Container, FormControl, Grid, Input, InputAdornment, InputLabel } from "@mui/material";
import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

export default class Trackpad extends Component<any, any> {
    state = {
        finalValue: 0,
        arrayValue: []
    };
    render() {
        const buttons: any = [];
        const grid: any = [];
        let coin = require('../config/config.json');

        const buttonGenerator = () => {
            for (let i = 1; i <= 9; i++) {
                buttons.push(
                    <Button variant="outlined" className="inputButton" value={i} onClick={() => addValue(i)}>
                        <p>{i}</p>
                    </Button>
                )
            }
        }
        const updateValue = () => {
            let newValue: any = this.state.arrayValue.join("");
            this.setState(
                {
                    finalValue: +newValue
                }
            )
        }

        const addValue = (value: number) => {
            let newArray: any = this.state.arrayValue;
            newArray.push(value);
            this.setState(
                {
                    arrayValue: newArray
                }
            )
            updateValue();
        }

        const removeValue = () => {
            let newArray: any = this.state.arrayValue;
            newArray.pop();
            this.setState(
                {
                    arrayValue: newArray
                }
            )
            updateValue();
        }

        const onTrigger = () => {
            this.props.parentCallback(this.state.finalValue);
        }


        function FormRow(_index: number) {
            return (
                <React.Fragment>
                    <Grid item >
                        {buttons[_index]}
                    </Grid>
                    <Grid item >
                        {buttons[_index + 1]}
                    </Grid>
                    <Grid item >
                        {buttons[_index + 2]}
                    </Grid>
                </React.Fragment>
            );
        }
        const gridGenerator = () => {
            buttonGenerator()
            for (let i = 0; i < 3; i++) {
                grid.push(<Grid container item className="buttonRow">
                    {FormRow(i * 3)}
                </Grid>)
            }
        }

        gridGenerator();
        return (
            <Grid container className="semiContainer">
                <FormControl sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-amount" className="trackpadLabel">
                        <p>Select amount</p>
                    </InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        type="number"
                        disableUnderline={true}
                        readOnly={true}
                        className="trackpadInput"
                        value={this.state.finalValue}
                        startAdornment={<InputAdornment position="start" className="inputAdornment"><p>{coin[this.props.currentCoin].currency}</p></InputAdornment>}
                    />
                    <Box className="trackpad">
                        <Grid container xs={8}>
                            {grid}
                            <Grid container item className="buttonRow">
                                <Grid item >
                                    <Button variant="outlined" className="inputButton" onClick={() => removeValue()}>
                                        <ArrowBack className="backArrow" />
                                    </Button>
                                </Grid>
                                <Grid item >
                                    <Button variant="outlined" className="inputButton" value={0} onClick={() => addValue(0)}>
                                        <p>0</p>
                                    </Button>
                                </Grid>
                                <Grid item >
                                    <Button variant="outlined" className="inputButton" style={{ visibility: "hidden" }} >
                                        <p>0</p>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                    {this.state.finalValue != 0 ?
                        <Link to="/results" style={{ textDecoration: "none" }}>
                            <Button variant="outlined" className="submitButton" onClick={() => onTrigger()}>
                                <p>Submit</p>
                            </Button>
                        </Link>
                        :
                        <Button variant="outlined" className="submitButton" disabled={true}>
                            <p>Submit</p>
                        </Button>
                    }

                </FormControl>
            </Grid>
        )
    }
}
