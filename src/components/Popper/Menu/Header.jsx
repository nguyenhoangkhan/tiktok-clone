import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
const Header = (props) => {
    return (
        <header className={cx('header')}>
            <button onClick={props.onBack} className={cx('back-btn')}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cx('header-title')}>{props.title}</h4>
        </header>
    );
};

export default Header;
