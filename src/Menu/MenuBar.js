import * as React from "react";
import {AppBar, Drawer, MenuItem, MuiThemeProvider} from "material-ui";
import Person from 'material-ui/svg-icons/social/person';
import {Link} from "react-router-dom";

class MenuBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            drawerOpen: false
        }
    }

    toggleDrawer = () => {
        this.setState({
            drawerOpen: !this.state.drawerOpen
        })
    }

    handleClose = () => {
        this.setState({
            drawerOpen: false
        })
    }


    render() {
        const contentStyle = {transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)'};

        return (
            <MuiThemeProvider>
                <AppBar
                    title="Family"
                    className={"Top-bar"}
                    style={contentStyle}
                    onLeftIconButtonTouchTap={this.toggleDrawer.bind(this)}
                />
                <div>
                    <Drawer
                        docked={true}
                        width={200}
                        open={this.state.drawerOpen}
                        onRequestChange={(drawerOpen) => this.setState({drawerOpen})}
                    >
                        <AppBar
                            title="Family"
                            className={"Top-bar"}
                            onLeftIconButtonTouchTap={this.toggleDrawer.bind(this)}
                        />
                        <div>
                            <MenuItem onClick={this.handleClose}
                                      // containerElement={<Link to="/owner"/>}
                                      primaryText="Owner"
                                      leftIcon={<Person/>}></MenuItem>
                            <MenuItem onClick={this.handleClose} primaryText="Market Data"
                                      leftIcon={<Person/>}></MenuItem>
                        </div>
                    </Drawer>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default MenuBar;