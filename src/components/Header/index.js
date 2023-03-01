import withStyles from 'react-jss';
import {memo} from 'react';

import Header from './Header.jsx';

const styles = ({
    borderInset,
}) => ({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        padding: 13,
        background: '#C0C0C0',
        border: borderInset,
    },
    counter: {
        display: 'flex',
    },
    button: {
        cursor: 'pointer',
    },
});

export default memo(withStyles(styles)(Header));