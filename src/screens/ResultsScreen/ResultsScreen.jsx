import styles from './ResultsScreen.module.css';
import logo from '../../assets/logo-desktop-on-light.svg';
import decorBottomLeft from '../../assets/card-decor-bottom-left.svg';
import decorTopRight from '../../assets/card-decor-top-right.svg';
import Button from '../../components/Button';
import ResultsCard from '../../components/ResultsCard';

function ResultsScreen({ score, totalQuestions, onReturnHome, onRetakeQuiz }) {
  
  return (
    <div className={styles.canvas}>
      <div className={styles.card}>
        <img src={decorTopRight} alt="" aria-hidden="true" className={styles.decorTopRight} />
        <img src={decorBottomLeft} alt="" aria-hidden="true" className={styles.decorBottomLeft} />

        <header className={styles.header}>
          <img src={logo} alt="devquiz" className={styles.logo} />
        </header>

        <main className={styles.quizContent}>
          <h1 className={styles.headerTitle}>Quiz Complete</h1>

          <ResultsCard score={score} totalQuestions={totalQuestions} />

          <div className={styles.actions}>
            <Button onClick={onReturnHome}>
              Return Home →
            </Button>
          </div> 
        </main>
      </div>
    </div>
  );
}


export default ResultsScreen;
