import Button from '../../Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

const MenuItems = (props) => {
    const classes = cx('menu-item', {
        separate: props.data.separate,
    });
    return (
        <Button className={classes} leftIcon={props.data.icon} to={props.data.to} onClick={props.onClick}>
            {props.data.title}
        </Button>
    );
};
MenuItems.propTypes = {
    data: PropTypes.object.isRequired,
};

export default MenuItems;
