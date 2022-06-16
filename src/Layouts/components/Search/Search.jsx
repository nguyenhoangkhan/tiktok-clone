import { useState, useEffect, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import AccountItem from '../../../components/AccountItem';
import { Wrapper as PopperWrapper } from '../../../components/Popper';
import { SearchIcon } from '../../../components/Icons/Icons';
import { useDebounce } from '../../../hooks/index';
import * as searchServices from '../../../services/searchServices';
const cx = classNames.bind(styles);
const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResults, setShowResults] = useState(true);
    const [loading, setLoading] = useState(false);
    const searchRef = useRef();
    const debouncedValue = useDebounce(searchValue, 500);
    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }
        const fetchApi = async () => {
            setLoading(true);
            const result = await searchServices.search(debouncedValue);
            try {
                setSearchResult(result);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };
        fetchApi();
    }, [debouncedValue]);
    const handleClearSearchInput = () => {
        setSearchValue('');
        searchRef.current.focus();
    };
    const handleHideResults = () => {
        setShowResults(false);
    };
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(e.target.value);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div>
            <HeadlessTippy
                visible={showResults && searchResult.length > 0}
                interactive
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h3 className={cx('search-title')}>Account</h3>
                            {searchResult.map((result) => (
                                <AccountItem
                                    key={result.id}
                                    avatar={result.avatar}
                                    fullname={result.full_name}
                                    username={result.nickname}
                                    nickname={result.nickname}
                                />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResults}
            >
                <div className={cx('search')}>
                    <input
                        ref={searchRef}
                        value={searchValue}
                        placeholder="Tìm kiếm tài khoản và video"
                        onChange={handleChange}
                        onFocus={() => setShowResults(true)}
                    />

                    {loading ? (
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    ) : (
                        searchValue && (
                            <button onClick={handleClearSearchInput} className={cx('clear')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        )
                    )}

                    <button className={cx('search-btn')} onMouseDown={handleSubmit}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
};

export default Search;
