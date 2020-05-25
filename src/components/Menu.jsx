import React from 'react';

class Menu extends React.Component {
    
    render() {
        return (
            <React.Fragment>
            {this.props.children.map((child,i) => {
                return (
                    <li key={i} className="nav-item active">
                        {child}
                    </li>
                )
            })}
            </React.Fragment>
        );
    }
}

export default Menu;

