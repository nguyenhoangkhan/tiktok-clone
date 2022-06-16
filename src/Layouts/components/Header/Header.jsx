import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCoins,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faLanguage,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../../components/Button';
import styles from './Header.module.scss';
import images from '../../../assets/images';
import Menu from '../../../components/Popper/Menu';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { MessageIcon, UploadIcon, BoxIcon } from '../../../components/Icons/Icons';
import Image from '../../../components/Image';
import Search from '../Search/Search';
import config from '../../../config';
const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    type: 'languages',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'languages',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'lasnguages',
                    code: 'jp',
                    title: '日本語（日本）',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt trên bàn phím',
    },
];
const USER_MENU = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Xem hồ sơ',
        to: '/user',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Nhận xu',
        href: '',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Cài đặt',
        href: '',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Đăng xuất',
        to: '/logout',
        separate: true,
    },
];
let currentUser = true;

const Header = () => {
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <Link className={cx('logo-link')} to={config.routes.home}>
                        <img src={images.logo} alt="TikTok" />
                    </Link>
                </div>
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy placement="bottom" content="Tải video lên">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy placement="bottom" content="Tin nhắn">
                                <button className={cx('action-btn')}>
                                    <MessageIcon width="2.6rem" height="2.6rem" />
                                </button>
                            </Tippy>
                            <Tippy placement="bottom" content="Hộp thư">
                                <button className={cx('action-btn')}>
                                    <BoxIcon />
                                    <span className={cx('badge')}>28</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text> Tải lên</Button>
                            <Button primary>Đăng nhập</Button>
                        </>
                    )}
                    <Menu items={currentUser ? USER_MENU : MENU_ITEMS} onChange={handleMenuChange} hideOnClick={false}>
                        {currentUser ? (
                            <Image
                                src="https://static2.yan.vn/YanNews/2167221/201705/20170509-013433-image6_600x744.PNG"
                                className={cx('user-avatar')}
                                alt=""
                                fallback="https://api-private.atlassian.com/users/45d6e9dd6ed8b9b0d6abff97da5284ac/avatar"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    );
};

export default Header;
