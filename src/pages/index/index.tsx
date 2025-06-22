import React from 'react'
import CommonHeader from './components/common/header/CommonHeader'
import styles from './styles/index.module.scss'

export default function MainPage() {
  return (
    <div className={styles.page}>
      {/* 공통 헤더 */}
      <CommonHeader />

      <div className={styles.page__introBox}>
        <div className={styles.page__wrapper}>
          <span className={styles.page__title}>PhotoSplash</span>
          <span className={styles.page__desc}>
            인터넷의 시각 자료 출처입니다.
            <br />
            모든 지역에 있는 크리에이터들의 지원을 받습니다.
          </span>
          </div>
      </div>
    </div>
  )
}
