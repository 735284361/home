import React from 'react';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Row wrap>
          <Col l="6">
            <p className={styles.title}>关于"后海"</p>
            <p className={styles.desc}>
              我叫饶后海，我为我自己代言(
              <a href="http://coffee.raohouhai.com" className={styles.link}>
                <b>进来坐坐</b>
              </a>
              ）
            </p>
          </Col>
          <Col l="6">
            <div className={styles.rightContent}>
              <img
                src={require('./images/qrcode.png')}
                alt=""
                className={styles.qrcode}
              />
              <div className={styles.textBox}>
                <p className={styles.subtit}>“后海咖啡”</p>
                <p className={styles.text}>
                  我愿与您分享我的生活，您愿意听么？
                </p>
              </div>
            </div>
          </Col>
          <Col l="6">
            <div className={styles.rightContent}>
              <img
                src={require('./images/qrcode.png')}
                alt=""
                className={styles.qrcode}
              />
              <div className={styles.textBox}>
                <p className={styles.subtit}>“饶后海”的简历</p>
                <p className={styles.text}>
                  我的所有本领都在这里了，快来看看我都会些啥~
                </p>
              </div>
            </div>
          </Col>
          <Col l="6">
            <div className={styles.rightContent}>
              <img
                src={require('./images/qrcode.png')}
                alt=""
                className={styles.qrcode}
              />
              <div className={styles.textBox}>
                <p className={styles.subtit}>“后海商城”</p>
                <p className={styles.text}>
                  这里是我最喜欢的，也希望有您喜欢的!
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
