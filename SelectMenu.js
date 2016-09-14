'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectMenu = _react2.default.createClass({
    displayName: "SelectMenu",

    getInitialState: function getInitialState() {
        return {
            isFocused: false
        };
    },


    propTypes: {
        defaultId: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
        optionName: _react2.default.PropTypes.func.isRequired,
        onSelectChange: _react2.default.PropTypes.func.isRequired,
        list: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.array]),

        hintText: _react2.default.PropTypes.string
    },

    onBlur: function onBlur() {
        this.setState({
            isFocused: false
        });
    },
    onFocus: function onFocus() {
        this.setState({
            isFocused: true
        });
    },


    onSelectChange: function onSelectChange(e) {
        var i = e.target.value;
        this.props.onSelectChange(i);
    },

    hintText: function hintText() {
        if (this.props.hintText) {

            return _react2.default.createElement(
                'option',
                { value: 'hint', disabled: true, hidden: true },
                this.props.hintText
            );
        }
    },

    renderOption: function renderOption(item, i) {
        return _react2.default.createElement(
            'option',
            { key: i, value: i },
            this.props.optionName(i)
        );
    },

    render: function render() {
        var value = this.props.defaultId;
        if (this.props.hintText) {
            value = "hint";
        }
        if (this.props.list) {
            var options = this.props.list.map(this.renderOption);

            return _react2.default.createElement(
                'select',
                {
                    style: this.style().select,
                    value: value,
                    onChange: this.onSelectChange,
                    onFocus: this.onFocus,
                    onBlur: this.onBlur
                },
                options
            );
        }

        return _react2.default.createElement(
            'select',
            {
                style: this.style().select,
                onFocus: this.onFocus,
                onBlur: this.onBlur,
                value: this.props.defaultId
            },
            _react2.default.createElement(
                'option',
                { key: '1', value: '1' },
                'Loading...'
            )
        );
    },

    style: function style() {
        var focused = this.state.isFocused;
        var color = this.props.color || "rgba(0,0,0,.3)";
        var borderColor = focused ? color : "rgba(0,0,0,.15)";
        return {
            select: _extends({
                cursor: "pointer",
                width: "100%",
                border: "none",
                borderBottom: 'solid 3px ' + borderColor,
                fontSize: "14px",
                borderRadius: "0px",
                appearance: "none",
                MozAppearance: "none",
                background: "rgba(255,255,255,0)",
                backgroundPosition: "right 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: 'url(\'data:image/svg+xml;utf8, <svg fill="' + borderColor + '" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>\')',
                padding: "8px 8px 8px 0px",
                paddingRight: "1.5em"
            }, (0, _styles.marg)(this.props), {

                ':focus': {
                    outline: "none"
                }

            })
        };
    }
});

exports.default = (0, _radium2.default)(SelectMenu);