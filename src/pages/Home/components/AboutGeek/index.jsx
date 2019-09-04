import React from 'react';
import QueueAnim from 'rc-queue-anim';
import ScrollAnim from 'rc-scroll-anim';
import styles from './index.module.scss';

const ScrollOverPack = ScrollAnim.OverPack;

export default () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <ScrollOverPack>
        <QueueAnim delay={200} duration={1000} interval={300} type="bottom">
          <div key="summary" className={styles.summary}>
            <div className={styles.num}>01_</div>
            <div className={styles.title}>About</div>
            <div className={styles.subtitle}>后海和后海</div>
          </div>
          <div
            key="introOne"
            className={styles.introOne}
          >
            <div className={styles.itemTitle}>北京的后海</div>
            <div className={styles.itemDesc}>
              “后海”北京文艺青年的名片。一杯清酒就民谣，和同龄人一起释放青春的活力。一缕夏日的微风，远离都市喧嚣享受繁华背后的少有宁静。
            </div>
          </div>
          <div
            key="introTwo"
            className={styles.introTwo}
          >
            <div className={styles.itemTitle}>我是后海</div>
            <div className={styles.itemDesc}>
              我叫“饶后海”，一个贪玩的技术宅男，我为我自己代言。往下翻你会了解我更多...
            </div>
          </div>
        </QueueAnim>
      </ScrollOverPack>
    </div>
  </div>
);
