import { LANGUAGES } from 'constants';
import cn from 'classnames';
import { VscBell } from 'react-icons/vsc';
import { IoIosArrowDown } from 'react-icons/io';

import { AVATAR } from 'constants';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles['header']}>
      <div className="container">
        <div className={styles['header-content']}>
          <div className={styles['header-content__logo']}>My Tipaw</div>

          <div className={styles['header-content-right']}>
            <div className={styles['header-content-right-language']}>
              {LANGUAGES.map(({ id, text, isActive }) => {
                return (
                  <div
                    key={id}
                    className={cn(
                      styles['header-content-right-language__item'],
                      {
                        [styles['header-content-right-language__item--active']]:
                          isActive,
                      },
                    )}
                  >
                    {text}
                  </div>
                );
              })}
            </div>
            <div className={styles['header-content-right__bell']}>
              <VscBell />
            </div>

            <div className={styles['header-content-right-user']}>
              <div className={styles['header-content-right-user__avatar']}>
                <img src={AVATAR} alt="avatar" />
              </div>
              <div className={styles['header-content-right-user__name']}>
                John Smith
              </div>
              <div className={styles['header-content-right-user__arrow']}>
                <IoIosArrowDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
