import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
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
          <h2>Путешествуйте с умом</h2>
          <p className={styles.heroDescription}>
            Полезные советы и интересные факты для ваших приключений
          </p>
        </section>

        <section className={styles.aboutSection}>
          <div className={styles.aboutContent}>
            <h2>О нашем сайте</h2>
            <p>
              Travel Tips - это ваш надежный путеводитель в мире путешествий. Мы
              создали этот ресурс, чтобы помочь вам сделать ваши путешествия
              более комфортными, безопасными и запоминающимися.
            </p>
            <div className={styles.aboutFeatures}>
              <div className={styles.aboutFeature}>
                <h3>Полезные советы</h3>
                <p>
                  Практические рекомендации по планированию поездок, упаковке
                  вещей и адаптации к новым местам
                </p>
              </div>
              <div className={styles.aboutFeature}>
                <h3>Интересные факты</h3>
                <p>
                  Увлекательная информация о разных странах и их уникальных
                  особенностях
                </p>
              </div>
              <div className={styles.aboutFeature}>
                <h3>Популярные направления</h3>
                <p>
                  Обзоры самых интересных мест для путешествий с описанием их
                  главных достопримечательностей
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.popularDestinations}>
          <h2>Популярные направления</h2>
          <div className={styles.destinationsGrid}>
            <div className={styles.destinationCard}>
              <Image
                src="/images/japan.jpg"
                alt="Япония"
                width={300}
                height={200}
                className={styles.destinationImage}
              />
              <h3>Япония</h3>
              <p>Страна восходящего солнца</p>
            </div>
            <div className={styles.destinationCard}>
              <Image
                src="/images/iceland.jpg"
                alt="Исландия"
                width={300}
                height={200}
                className={styles.destinationImage}
              />
              <h3>Исландия</h3>
              <p>Земля огня и льда</p>
            </div>
            <div className={styles.destinationCard}>
              <Image
                src="/images/australia.jpg"
                alt="Австралия"
                width={300}
                height={200}
                className={styles.destinationImage}
              />
              <h3>Австралия</h3>
              <p>Континент контрастов</p>
            </div>
            <div className={styles.destinationCard}>
              <Image
                src="/images/italy.jpg"
                alt="Италия"
                width={300}
                height={200}
                className={styles.destinationImage}
              />
              <h3>Италия</h3>
              <p>Страна искусства и истории</p>
            </div>
            <div className={styles.destinationCard}>
              <Image
                src="/images/brazil.jpg"
                alt="Бразилия"
                width={300}
                height={200}
                className={styles.destinationImage}
              />
              <h3>Бразилия</h3>
              <p>Страна карнавалов и пляжей</p>
            </div>
            <div className={styles.destinationCard}>
              <Image
                src="/images/egypt.jpg"
                alt="Египет"
                width={300}
                height={200}
                className={styles.destinationImage}
              />
              <h3>Египет</h3>
              <p>Страна фараонов и пирамид</p>
            </div>
          </div>
        </section>

        <section className={styles.tipsSection}>
          <h2>Советы путешественникам</h2>
          <div className={styles.tipsGrid}>
            <div className={styles.tipCard}>
              <div className={styles.tipIcon}>📱</div>
              <h3>Планирование</h3>
              <ul>
                <li>Изучите местные обычаи и традиции</li>
                <li>Сделайте копии важных документов</li>
                <li>Загрузите офлайн-карты</li>
              </ul>
            </div>
            <div className={styles.tipCard}>
              <div className={styles.tipIcon}>💰</div>
              <h3>Бюджет</h3>
              <ul>
                <li>Используйте местные приложения для экономии</li>
                <li>Бронируйте жилье заранее</li>
                <li>Изучите местные цены</li>
              </ul>
            </div>
            <div className={styles.tipCard}>
              <div className={styles.tipIcon}>🎒</div>
              <h3>Сборы</h3>
              <ul>
                <li>Возьмите универсальный адаптер</li>
                <li>Упакуйте аптечку первой помощи</li>
                <li>Не забудьте зарядные устройства</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.factsSection}>
          <h2>Интересные факты</h2>
          <div className={styles.factsGrid}>
            <div className={styles.factCard}>
              <h3>Япония</h3>
              <p>
                В Японии нет уличных мусорных баков, но улицы остаются чистыми.
                Местные жители носят мусор с собой и сортируют его дома. Это
                часть их культуры и уважения к окружающей среде.
              </p>
            </div>
            <div className={styles.factCard}>
              <h3>Исландия</h3>
              <p>
                В Исландии нет комаров. Это единственная страна в мире, где эти
                насекомые не обитают. Причина в том, что комары не могут выжить
                в суровом климате острова.
              </p>
            </div>
            <div className={styles.factCard}>
              <h3>Австралия</h3>
              <p>
                В Австралии больше кенгуру, чем людей. Их популяция составляет
                около 50 миллионов особей, в то время как население страны -
                около 25 миллионов человек.
              </p>
            </div>
            <div className={styles.factCard}>
              <h3>Италия</h3>
              <p>
                В Италии находится самый маленький суверенный город-государство
                в мире - Ватикан. Его площадь составляет всего 0.44 квадратных
                километра.
              </p>
            </div>
            <div className={styles.factCard}>
              <h3>Бразилия</h3>
              <p>
                В Бразилии находится самый большой тропический лес в мире -
                Амазонка. Он производит 20% всего кислорода на Земле и является
                домом для более чем 390 миллиардов деревьев.
              </p>
            </div>
            <div className={styles.factCard}>
              <h3>Египет</h3>
              <p>
                Великая пирамида в Гизе - единственное из семи чудес света
                древнего мира, которое сохранилось до наших дней. Она была
                построена более 4500 лет назад.
              </p>
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
