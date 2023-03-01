import withStyles from 'react-jss';
import {memo} from 'react';

import Settings from 'Settings';

import Grid from './Grid.jsx';

const styles = ({
    borderInset,
}) => ({
    container: {
        border: borderInset,
        display: 'grid',
        gridTemplateColumns: ({gridSize = Settings.defaultGridSize}) => `repeat(${gridSize}, 1fr)`,
    },
    cell: {
        cursor: 'pointer',
    },
});

export default memo(withStyles(styles)(Grid));