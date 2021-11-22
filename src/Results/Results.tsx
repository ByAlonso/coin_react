import { ArrowBack } from "@mui/icons-material";
import { Button, Container, Grid, ListItem } from "@mui/material";
import { Component } from "react";
import { Link } from "react-router-dom";
import billIcon from "../assets/500-bill.png"
import coinIcon from "../assets/2-coin.png"

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
            for (let key in display) {
                for (let innerKey in display[key]) {
                    auxGrid.push(
                        <Grid item xs={gridLayoutSize} className="coinBox">
                            <ListItem>
                                <img src={key === "note" ? billIcon : coinIcon} alt="coin" style={{margin:"10px"}}/>
                                <p style={{margin:"10px"}}>{display[key][innerKey]} x {innerKey}</p>
                            </ListItem>
                        </Grid>
                    )
                }
                grid.push(
                    <Grid item direction={'column'}>
                        {auxGrid.reverse()}
                    </Grid>
                )
                auxGrid = []
            }
        }
        gridBuilder();

        return (
            <Container >
                <Container style={{marginTop:"3%"}} >
                    <Link to="/trackpad">
                        <Button
                            variant="outlined"
                            className="inputButton"
                        ><ArrowBack className="backArrow" />
                        </Button>
                    </Link>
                </Container>
                <Container className="semiContainer">
                    <p>Depositing</p>
                    <p className="bigNumber">{coin[currentCoin].currency} {this.props.amount}</p>
                    <Grid container className="coinGrid">
                        {grid}
                    </Grid>
                    <p>Thank you for using Enalyzer ATM</p>
                </Container>
            </Container>
        )
    }
}
