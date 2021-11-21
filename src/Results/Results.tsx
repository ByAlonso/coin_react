import { ArrowBack } from "@mui/icons-material";
import { Button, Grid, ListItem } from "@mui/material";
import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

export default class Results extends Component<any> {

    state = {
        display: {}
    }
    componentDidMount() {

    }
    render() {
        let display: any = {}
        const coin = require('../config/config.json');
        let currentCoin = "lb";
        const grid: any = [];
        const processCoins = () => {
            let coins = this.props.amount;
            console.log(coin[currentCoin].values.reverse())
            while (coins > 0) {
                coin[currentCoin].values.reverse().forEach((element: any) => {
                    let key = Object.keys(element)[0];
                    let value = element[Object.keys(element)[0]];
                    while (coins - (+key) >= 0) {
                        coins -= (+key);
                        if (value in display) {
                            if (key in display[value]) {
                                display[value][key] += 1;
                            }
                            else {
                                display[value][key] = 1;
                            }
                        }
                        else {
                            display[value] = {};
                            display[value][key] = 1;
                        }
                    }
                });
            }
        };
        processCoins();
        const gridLayoutSize = 12 / Object.keys(display).length;
        const gridBuilder = () => {
            let auxGrid = []
            let finalGrid = []
            console.log(display);
            for (let key in display) {
                for (let innerKey in display[key]) {
                    auxGrid.push(
                        <Grid item xs={gridLayoutSize}>
                            <ListItem><p>{display[key][innerKey]} x {innerKey}</p></ListItem>
                        </Grid>
                    )
                }
                grid.push(
                    <Grid item direction={'column'} >
                        {auxGrid.reverse()}
                    </Grid>
                )
                auxGrid = []
            }
        }
        gridBuilder();

        return (
            <>
                <Link to="/trackpad">
                    <Button
                        variant="outlined"
                    ><ArrowBack className="initArrow" />
                    </Button>
                </Link>
                <p>Depositing</p>
                <p>{coin[currentCoin].currency} {this.props.amount}</p>
                <Grid container>
                    {grid}
                </Grid>
            </>

        )
    }
}
