import Image from 'next/image';
import styles from './page.module.css';

export default function Tips() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Travel Tips</h1>
        <nav className={styles.nav}>
          <a href="/">Главная</a>
          <a href="/tips">Советы</a>
          <a href="/facts">Факты</a>
          <a href="/destinations">Направления</a>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h2>Советы путешественникам</h2>
          <p>Полезные рекомендации для комфортного и безопасного путешествия</p>
        </section>

        <section className={styles.tipsSection}>
          <div className={styles.tipsGrid}>
            <div className={styles.tipCard}>
              <div className={styles.tipIcon}>📱</div>
              <h3>Планирование поездки</h3>
              <ul>
                <li>Изучите местные обычаи и традиции</li>
                <li>Сделайте копии важных документов</li>
                <li>Загрузите офлайн-карты</li>
                <li>Проверьте прогноз погоды</li>
                <li>Изучите местные законы и правила</li>
              </ul>
            </div>

            <div className={styles.tipCard}>
              <div className={styles.tipIcon}>💰</div>
              <h3>Бюджет и финансы</h3>
              <ul>
                <li>Используйте местные приложения для экономии</li>
                <li>Бронируйте жилье заранее</li>
                <li>Изучите местные цены</li>
                <li>Возьмите несколько способов оплаты</li>
                <li>Сохраните контакты банка</li>
              </ul>
            </div>

            <div className={styles.tipCard}>
              <div className={styles.tipIcon}>🎒</div>
              <h3>Сборы и багаж</h3>
              <ul>
                <li>Возьмите универсальный адаптер</li>
                <li>Упакуйте аптечку первой помощи</li>
                <li>Не забудьте зарядные устройства</li>
                <li>Возьмите дождевик или зонт</li>
                <li>Упакуйте вещи в герметичные пакеты</li>
              </ul>
            </div>

            <div className={styles.tipCard}>
              <div className={styles.tipIcon}>🏥</div>
              <h3>Здоровье и безопасность</h3>
              <ul>
                <li>Сделайте необходимые прививки</li>
                <li>Возьмите страховку</li>
                <li>Изучите местные больницы</li>
                <li>Сохраните контакты экстренных служб</li>
                <li>Будьте осторожны с местной едой</li>
              </ul>
            </div>

            <div className={styles.tipCard}>
              <div className={styles.tipIcon}>🌍</div>
              <h3>Культура и этикет</h3>
              <ul>
                <li>Изучите базовые фразы на местном языке</li>
                <li>Уважайте местные традиции</li>
                <li>Одевайтесь соответственно</li>
                <li>Будьте вежливы с местными жителями</li>
                <li>Фотографируйте с разрешения</li>
              </ul>
            </div>

            <div className={styles.tipCard}>
              <div className={styles.tipIcon}>🚗</div>
              <h3>Транспорт</h3>
              <ul>
                <li>Изучите местный транспорт</li>
                <li>Скачайте приложения такси</li>
                <li>Проверьте расписание</li>
                <li>Бронируйте билеты заранее</li>
                <li>Изучите маршруты</li>
              </ul>
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
