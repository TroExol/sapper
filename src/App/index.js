import withStyles from 'react-jss';

import App from './App.jsx';

const styles = ({
    borderOutset,
}) => ({
    warningContainer: {
        display: 'block',
        fontSize: 16,
        textAlign: 'center',
        
        '@media (hover: hover) and (pointer: fine)': {
            display: 'none',
        },
    },
    gameContainer: {
        display: 'none',
        padding: 10,
        background: '#BDBDBD',
        border: borderOutset,
        userSelect: 'none',
    
        '@media (hover: hover) and (pointer: fine)': {
            display: 'block',
        },
    },
});

export default withStyles(styles)(App);