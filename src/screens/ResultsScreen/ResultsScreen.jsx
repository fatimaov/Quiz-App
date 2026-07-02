import styles from './ResultsScreen.module.css';
import logo from '../../assets/logo-desktop-on-light.svg';
import Button from '../../components/Button';
import ResultsCard from '../../components/ResultsCard';
import ScreenLayout from '../../components/ScreenLayout/ScreenLayout';

function ResultsScreen({ score, totalQuestions, onReturnHome }) {
  
  return (
    <ScreenLayout>
      <img src={logo} alt="devquiz" className={styles.logo} />
      <h1 className={styles.headerTitle}>Quiz Complete</h1>

      <ResultsCard score={score} totalQuestions={totalQuestions} />

      <div className={styles.actions}>
        <Button onClick={onReturnHome}>
          Return Home →
        </Button>
      </div>
    </ScreenLayout>
  );
}

export default ResultsScreen;
