import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';
const cx = classNames.bind(styles);
const AccountItem = (props) => {
    return (
        <Link to={`/@${props.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={props.avatar} alt={props.fullname} />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{props.fullname}</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>{props.username}</span>
            </div>
        </Link>
    );
};
AccountItem.propTypes = {
    nickName: PropTypes.string,
    avatar: PropTypes.string,
    fullname: PropTypes.string,
    username: PropTypes.string,
};
export default AccountItem;
