import withStyles from 'react-jss';
import PropTypes from 'prop-types';

import SpriteImage from './SpriteImage.jsx';

const sprite = {
    '1': {xAxis: 0, yAxis: 0, width: 31, height: 55},
    '2': {xAxis: -33, yAxis: 0, width: 31, height: 55},
    '3': {xAxis: -66.5, yAxis: 0, width: 31, height: 55},
    '4': {xAxis: -100, yAxis: 0, width: 31, height: 55},
    '5': {xAxis: -133, yAxis: 0, width: 31, height: 55},
    '6': {xAxis: -166, yAxis: 0, width: 31, height: 55},
    '7': {xAxis: -200, yAxis: 0, width: 31, height: 55},
    '8': {xAxis: -232.5, yAxis: 0, width: 31, height: 55},
    '9': {xAxis: -266, yAxis: 0, width: 31, height: 55},
    '0': {xAxis: -299, yAxis: 0, width: 31, height: 55},
    'smile': {xAxis: -2, yAxis: -59, width: 60, height: 60},
    'smile-pressed': {xAxis: -64, yAxis: -57, width: 60, height: 60},
    'smile-scared': {xAxis: -130, yAxis: -59, width: 60, height: 60},
    'smile-cool': {xAxis: -194, yAxis: -59, width: 60, height: 60},
    'smile-dead': {xAxis: -258, yAxis: -59, width: 60, height: 60},
    'cell': {xAxis: 0, yAxis: -121, width: 38, height: 38},
    'cell-empty': {xAxis: -40, yAxis: -121, width: 38, height: 38},
    'cell-flag': {xAxis: -81, yAxis: -121, width: 38, height: 38},
    'cell-question': {xAxis: -121, yAxis: -121, width: 38, height: 38},
    'cell-question-pressed': {xAxis: -161, yAxis: -121, width: 38, height: 38},
    'cell-mine': {xAxis: -202, yAxis: -122, width: 38, height: 38},
    'cell-mine-undermined': {xAxis: -242.5, yAxis: -122, width: 38, height: 38},
    'cell-mine-miss': {xAxis: -282, yAxis: -121, width: 38, height: 38},
    'cell-1': {xAxis: 0, yAxis: -162, width: 38, height: 38},
    'cell-2': {xAxis: -40, yAxis: -162, width: 38, height: 38},
    'cell-3': {xAxis: -81, yAxis: -162, width: 38, height: 38},
    'cell-4': {xAxis: -121, yAxis: -162, width: 38, height: 38},
    'cell-5': {xAxis: -161, yAxis: -162, width: 38, height: 38},
    'cell-6': {xAxis: -201, yAxis: -162, width: 38, height: 38},
    'cell-7': {xAxis: -242, yAxis: -162, width: 38, height: 38},
    'cell-8': {xAxis: -282, yAxis: -162, width: 38, height: 38},
};

const styles = {
    image: {
        backgroundSize: [330, 200],
        backgroundPosition: ({element}) => [[sprite[element].xAxis, sprite[element].yAxis]],
        width: ({element}) => sprite[element].width,
        height: ({element}) => sprite[element].height,
    },
};

const Component = withStyles(styles)(SpriteImage);

Component.propTypes = {
    element: PropTypes.oneOf([
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
        'smile',
        'smile-pressed',
        'smile-scared',
        'smile-cool',
        'smile-dead',
        'cell',
        'cell-empty',
        'cell-flag',
        'cell-question',
        'cell-question-pressed',
        'cell-mine',
        'cell-mine-undermined',
        'cell-mine-miss',
        'cell-1',
        'cell-2',
        'cell-3',
        'cell-4',
        'cell-5',
        'cell-6',
        'cell-7',
        'cell-8',
    ]),
};
export default Component;