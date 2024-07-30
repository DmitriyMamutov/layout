import { MdCalendarMonth } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';

import styles from './styles.module.scss';

const Comment = () => {
  return (
    <header className={styles['comment']}>
      <div className="container">
        <div className={styles['comment-content']}>
          <div className={styles['comment-content__title']}>
            Announcements from Tipaw
          </div>

          <div className={styles['comment-content-tab']}>
            <div className={styles['comment-content-tab-header']}>
              <div className={styles['comment-content-tab-header__text']}>
                What is Tipaw?
              </div>
              <div className={styles['comment-content-tab-header__arrow']}>
              <IoIosArrowDown color="white"/>
              </div>
            </div>
            <div className={styles['comment-content-tab-calendar']}>
              <div className={styles['comment-content-tab-calendar__icon']}>
                <MdCalendarMonth color="darkturquoise" />
              </div>
              <div className={styles['comment-content-tab-calendar__text']}>
                24 hours
              </div>
            </div>

            <div className={styles['comment-content-tab__comment']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Comment;
