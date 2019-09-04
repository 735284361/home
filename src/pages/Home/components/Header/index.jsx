import React, { useEffect } from 'react';
import ScrollAnim from 'rc-scroll-anim';
import Logo from '@/components/Logo';
import styles from './index.module.scss';

const Link = ScrollAnim.Link;
const EventListener = ScrollAnim.Event;
ScrollAnim.scrollScreen.init({ loop: true });

const NAVS = [
  {
    to: 'page1',
    name: '首页',
  },
  {
    to: 'page2',
    name: '后海和后海',
  },
  // {
  //   to: 'page3',
  //   name: '后海简历',
  // },
  {
    to: 'page4',
    name: '后海商城',
  },
  {
    to: 'page5',
    name: '我的产品',
  },
];

export default function Header() {
  useEffect(() => {
    // 添加改变窗口事件,可加setTimeout
    EventListener.addEventListener('resize.userResize', barAnimate);
  }, []);

  let dom;
  let barRef;

  const onFocus = (e) => {
    dom = e.target;
    barAnimate();
  };

  const barAnimate = () => {
    if (!dom) {
      return;
    }
    const bar = barRef;
    bar.style.left = `${dom.getBoundingClientRect().left}px`;
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Logo />
        <div className={styles.nav}>
          {NAVS.map((nav, index) => {
            return (
              <Link
                key={index}
                className={styles.navList}
                to={nav.to}
                showHeightActive="300"
                onFocus={onFocus}
              >
                {nav.name}
              </Link>
            );
          })}
          <div ref={bar => barRef = bar} className={styles.navBar} />
        </div>
      </div>
    </div>
  );
}
