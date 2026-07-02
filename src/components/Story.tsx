import { brand } from '../data'

export function Story() {
  return (
    <section id="story" className="section">
      <div className="container">
        <h2 className="section__title">브랜드 스토리</h2>
        <p className="about__text">
          {brand.name}는 &ldquo;좋은 재료로 만든 빵은 거짓말을 하지 않는다&rdquo;는 믿음에서
          시작했습니다. 매일 새벽, 그날 판매할 만큼만 반죽하고 구워내며, 남은 빵을 다음 날 파는
          일은 하지 않습니다. 작은 동네 빵집이지만 재료와 정성만큼은 타협하지 않습니다.
        </p>
      </div>
    </section>
  )
}
