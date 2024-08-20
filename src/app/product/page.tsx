import React from 'react';
import styles from './page.module.sass';

export default function HomePage() {
  return (
    <div className={styles.mainContent}>
      <header className={styles.header}>
        <h1>My Responsive Page</h1>
      </header>
      <main>
        <section className={styles.section}>
          <h2>Section Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            convallis diam eu sem suscipit, a facilisis sem luctus.
          </p>
        </section>
        <section className={styles.section}>
          <h2>Another Section</h2>
          <p>
            Curabitur auctor magna eu purus convallis, ac feugiat odio egestas.
            Ut vestibulum varius nisi, eu luctus nisi.
          </p>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 My Website</p>
      </footer>
    </div>
  );
}
