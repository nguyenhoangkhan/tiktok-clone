import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
const MenuItem = (props) => {
    return (
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={props.to}>
            <span className={cx('icon')}>{props.icon}</span>
            <span className={cx('active-icon')}>{props.activeIcon}</span>
            <span className={cx('title')}>{props.title}</span>
        </NavLink>
    );
};

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node.isRequired,
};

export default MenuItem;
