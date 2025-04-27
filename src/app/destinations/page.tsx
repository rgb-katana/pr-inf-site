import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Destinations() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Travel Tips</h1>
        <nav className={styles.nav}>
          <Link href="/">Главная</Link>
          <Link href="/tips">Советы</Link>
          <Link href="/facts">Факты</Link>
          <Link href="/destinations">Направления</Link>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h2>Популярные направления</h2>
          <p>Откройте для себя лучшие места для путешествий</p>
        </section>

        <section className={styles.destinationsSection}>
          <div className={styles.destinationsGrid}>
            <div className={styles.destinationCard}>
              <div className={styles.destinationImage}>
                <Image
                  src="/images/japan-dest.jpg"
                  alt="Япония"
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.destinationContent}>
                <h3>Япония</h3>
                <div className={styles.destinationInfo}>
                  <span className={styles.infoItem}>
                    🌡️ Лучшее время: Март-Май
                  </span>
                  <span className={styles.infoItem}>
                    💰 Средний бюджет: $2000
                  </span>
                </div>
                <p>
                  Страна восходящего солнца, где древние традиции встречаются с
                  современными технологиями. Посетите Токио, Киото и насладитесь
                  цветением сакуры.
                </p>
                <div className={styles.destinationTags}>
                  <span className={styles.tag}>Культура</span>
                  <span className={styles.tag}>Еда</span>
                  <span className={styles.tag}>Природа</span>
                </div>
              </div>
            </div>

            <div className={styles.destinationCard}>
              <div className={styles.destinationImage}>
                <Image
                  src="/images/iceland-dest.jpg"
                  alt="Исландия"
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.destinationContent}>
                <h3>Исландия</h3>
                <div className={styles.destinationInfo}>
                  <span className={styles.infoItem}>
                    🌡️ Лучшее время: Июнь-Август
                  </span>
                  <span className={styles.infoItem}>
                    💰 Средний бюджет: $2500
                  </span>
                </div>
                <p>
                  Земля огня и льда, где вы можете увидеть северное сияние,
                  гейзеры и водопады. Идеальное место для любителей природы и
                  приключений.
                </p>
                <div className={styles.destinationTags}>
                  <span className={styles.tag}>Природа</span>
                  <span className={styles.tag}>Приключения</span>
                  <span className={styles.tag}>Фотография</span>
                </div>
              </div>
            </div>

            <div className={styles.destinationCard}>
              <div className={styles.destinationImage}>
                <Image
                  src="/images/australia-dest.jpg"
                  alt="Австралия"
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.destinationContent}>
                <h3>Австралия</h3>
                <div className={styles.destinationInfo}>
                  <span className={styles.infoItem}>
                    🌡️ Лучшее время: Сентябрь-Ноябрь
                  </span>
                  <span className={styles.infoItem}>
                    💰 Средний бюджет: $3000
                  </span>
                </div>
                <p>
                  Континент контрастов с уникальной природой, прекрасными
                  пляжами и современными городами. Посетите Сидней, Большой
                  Барьерный риф и пустыню.
                </p>
                <div className={styles.destinationTags}>
                  <span className={styles.tag}>Пляжи</span>
                  <span className={styles.tag}>Природа</span>
                  <span className={styles.tag}>Города</span>
                </div>
              </div>
            </div>

            <div className={styles.destinationCard}>
              <div className={styles.destinationImage}>
                <Image
                  src="/images/italy-dest.jpg"
                  alt="Италия"
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.destinationContent}>
                <h3>Италия</h3>
                <div className={styles.destinationInfo}>
                  <span className={styles.infoItem}>
                    🌡️ Лучшее время: Апрель-Июнь
                  </span>
                  <span className={styles.infoItem}>
                    💰 Средний бюджет: $2000
                  </span>
                </div>
                <p>
                  Страна искусства, истории и вкусной еды. Посетите Рим,
                  Венецию, Флоренцию и насладитесь итальянской кухней и
                  культурой.
                </p>
                <div className={styles.destinationTags}>
                  <span className={styles.tag}>Культура</span>
                  <span className={styles.tag}>Еда</span>
                  <span className={styles.tag}>История</span>
                </div>
              </div>
            </div>

            <div className={styles.destinationCard}>
              <div className={styles.destinationImage}>
                <Image
                  src="/images/brazil-dest.jpg"
                  alt="Бразилия"
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.destinationContent}>
                <h3>Бразилия</h3>
                <div className={styles.destinationInfo}>
                  <span className={styles.infoItem}>
                    🌡️ Лучшее время: Декабрь-Март
                  </span>
                  <span className={styles.infoItem}>
                    💰 Средний бюджет: $2500
                  </span>
                </div>
                <p>
                  Страна карнавалов, пляжей и тропических лесов. Посетите
                  Рио-де-Жанейро, Амазонку и насладитесь бразильской культурой.
                </p>
                <div className={styles.destinationTags}>
                  <span className={styles.tag}>Пляжи</span>
                  <span className={styles.tag}>Природа</span>
                  <span className={styles.tag}>Культура</span>
                </div>
              </div>
            </div>

            <div className={styles.destinationCard}>
              <div className={styles.destinationImage}>
                <Image
                  src="/images/egypt-dest.jpg"
                  alt="Египет"
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.destinationContent}>
                <h3>Египет</h3>
                <div className={styles.destinationInfo}>
                  <span className={styles.infoItem}>
                    🌡️ Лучшее время: Октябрь-Апрель
                  </span>
                  <span className={styles.infoItem}>
                    💰 Средний бюджет: $1500
                  </span>
                </div>
                <p>
                  Страна древних пирамид, фараонов и Красного моря. Посетите
                  Каир, Луксор и насладитесь пляжным отдыхом в Шарм-эль-Шейхе.
                </p>
                <div className={styles.destinationTags}>
                  <span className={styles.tag}>История</span>
                  <span className={styles.tag}>Пляжи</span>
                  <span className={styles.tag}>Культура</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>О сайте</h3>
            <p>Travel Tips - ваш путеводитель по миру путешествий</p>
          </div>
          <div className={styles.footerSection}>
            <h3>Контакты</h3>
            <p>Email: info@traveltips.com</p>
          </div>
          <div className={styles.footerSection}>
            <h3>Социальные сети</h3>
            <div className={styles.socialLinks}>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          © 2024 Travel Tips. Все права защищены.
        </div>
      </footer>
    </div>
  );
}
