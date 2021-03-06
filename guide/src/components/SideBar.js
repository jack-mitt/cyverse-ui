import React from "react";
import PropTypes from "prop-types";

class SideBar extends React.Component {
    render() {
        const openWidth = 250;
        const currentWidth = this.props.isOpen ? openWidth : 0;
        const style = {
            wrapper: {
                position: "relative",
                width: openWidth,
            },
            sideBar: {
                position: "sticky",
                top: "48px",
                bottom: "0px",
                width: currentWidth,
                padding: "20px 0",
                background: "#EEEEEE",
                overflowY: "auto",
                height: "calc(100vh - 48px)",
                margin: 0,
            }
        };

        return (
            <nav id="sideBar" style={style.wrapper}>
                <ul style={style.sideBar}>
                   {this.props.children}
                </ul>
            </nav>
        );
    }
}

SideBar.propTypes = {
    className: PropTypes.string,
};

export default SideBar;
