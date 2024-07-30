import { CHECKMARK, PROGRESS_LIST, CHECK_LIST } from 'constants';
import { ReactSVG } from 'react-svg';

import styles from './styles.module.scss';

const Hero = () => {
  return (
    <header className={styles['hero']}>
      <div className="container">
        <div className={styles['hero-content']}>
          <div className={styles['hero-content-header']}>
            <div className={styles['hero-content-header-left']}>
              <div className={styles['hero-content-header-left__title']}>
                You successfully complete your profile at Tipaw
              </div>
              <div className={styles['hero-content-header-left__subtitle']}>
                Now you can use Tipaw for 100% 🎉
              </div>
            </div>

            <div className={styles['hero-content-header-right']}>
              <div className={styles['hero-content-header-right-top']}>
                <div className={styles['hero-content-header-right-top__title']}>
                  Profile completed
                </div>

                <div
                  className={styles['hero-content-header-right-top__percent']}
                >
                  100%
                </div>
              </div>

              <div className={styles['hero-content-header-right-progress']}>
                {PROGRESS_LIST.map(({ id }) => {
                  return (
                    <div
                      className={
                        styles['hero-content-header-right-progress__item']
                      }
                      key={id}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles['hero-content-list']}>
            {CHECK_LIST.map(({ id, title, subtitle }) => {
              return (
                <div key={id} className={styles['hero-content-list-card']}>
                  <div className={styles['hero-content-list-card__check']}>
                    <ReactSVG src={CHECKMARK} />
                  </div>
                  <div className={styles['hero-content-list-card__title']}>
                    {title}
                  </div>
                  <div className={styles['hero-content-list-card__subtitle']}>
                    {subtitle}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
