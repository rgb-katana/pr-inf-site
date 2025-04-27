import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Facts() {
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
          <h2>Интересные факты</h2>
          <p>Удивительные и познавательные факты о разных странах мира</p>
        </section>

        <section className={styles.factsSection}>
          <div className={styles.factsGrid}>
            <div className={styles.factCard}>
              <div className={styles.factImage}>
                <Image
                  src="/images/japan-fact.jpg"
                  alt="Япония"
                  width={400}
                  height={250}
                  className={styles.image}
                />
              </div>
              <div className={styles.factContent}>
                <h3>Япония</h3>
                <ul>
                  <li>
                    В Японии нет уличных мусорных баков, но улицы остаются
                    чистыми
                  </li>
                  <li>В Японии больше домашних животных, чем детей</li>
                  <li>В Японии есть остров, населенный только кроликами</li>
                  <li>В Японии есть кафе, где можно пообщаться с совами</li>
                </ul>
              </div>
            </div>

            <div className={styles.factCard}>
              <div className={styles.factImage}>
                <Image
                  src="/images/iceland-fact.jpg"
                  alt="Исландия"
                  width={400}
                  height={250}
                  className={styles.image}
                />
              </div>
              <div className={styles.factContent}>
                <h3>Исландия</h3>
                <ul>
                  <li>В Исландии нет комаров</li>
                  <li>В Исландии нет фамилий в привычном понимании</li>
                  <li>
                    В Исландии есть специальное слово для обозначения погоды,
                    когда нельзя выйти из дома
                  </li>
                  <li>
                    В Исландии есть горячие источники, где можно купаться
                    круглый год
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.factCard}>
              <div className={styles.factImage}>
                <Image
                  src="/images/australia-fact.jpg"
                  alt="Австралия"
                  width={400}
                  height={250}
                  className={styles.image}
                />
              </div>
              <div className={styles.factContent}>
                <h3>Австралия</h3>
                <ul>
                  <li>В Австралии больше кенгуру, чем людей</li>
                  <li>В Австралии есть розовое озеро</li>
                  <li>
                    В Австралии есть забор длиной 5614 км для защиты от кроликов
                  </li>
                  <li>
                    В Австралии есть пляж с белым песком, который светится в
                    темноте
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.factCard}>
              <div className={styles.factImage}>
                <Image
                  src="/images/italy-fact.jpg"
                  alt="Италия"
                  width={400}
                  height={250}
                  className={styles.image}
                />
              </div>
              <div className={styles.factContent}>
                <h3>Италия</h3>
                <ul>
                  <li>
                    В Италии находится самый маленький суверенный
                    город-государство в мире - Ватикан
                  </li>
                  <li>В Италии есть город, где все жители живут в пещерах</li>
                  <li>В Италии есть остров, где запрещено умирать</li>
                  <li>В Италии есть ресторан, который работает с 1725 года</li>
                </ul>
              </div>
            </div>

            <div className={styles.factCard}>
              <div className={styles.factImage}>
                <Image
                  src="/images/brazil-fact.jpg"
                  alt="Бразилия"
                  width={400}
                  height={250}
                  className={styles.image}
                />
              </div>
              <div className={styles.factContent}>
                <h3>Бразилия</h3>
                <ul>
                  <li>
                    В Бразилии находится самый большой тропический лес в мире -
                    Амазонка
                  </li>
                  <li>В Бразилии есть пляж с разноцветным песком</li>
                  <li>В Бразилии есть остров, где запрещено рожать</li>
                  <li>
                    В Бразилии есть река, которая меняет цвет в зависимости от
                    времени года
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.factCard}>
              <div className={styles.factImage}>
                <Image
                  src="/images/egypt-fact.jpg"
                  alt="Египет"
                  width={400}
                  height={250}
                  className={styles.image}
                />
              </div>
              <div className={styles.factContent}>
                <h3>Египет</h3>
                <ul>
                  <li>
                    Великая пирамида в Гизе - единственное из семи чудес света
                    древнего мира, которое сохранилось до наших дней
                  </li>
                  <li>В Египте есть город, где все здания розового цвета</li>
                  <li>
                    В Египте есть оазис, где растут пальмы, которым более 2000
                    лет
                  </li>
                  <li>
                    В Египте есть храм, который был полностью перенесен на новое
                    место
                  </li>
                </ul>
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
