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
              “后海”是北京文艺的名片。来到这里你可以找一家小酒吧或者小清吧坐一坐，可以点上一杯鸡尾酒，听着小哥哥小姐姐唱民谣，
              和同龄人一起释放生活的压力。也可以沿着河边吹着河风，远离都市的喧嚣，感受繁华的首都之后的少有静谧。
            </div>
          </div>
          <div
            key="introTwo"
            className={styles.introTwo}
          >
            <div className={styles.itemTitle}>我的后海</div>
            <div className={styles.itemDesc}>
              我的“后海”前面还有个——饶，我叫“饶后海”，一个爱玩的资深技术宅男。往下翻你会了解我更多...
            </div>
          </div>
        </QueueAnim>
      </ScrollOverPack>
    </div>
  </div>
);
