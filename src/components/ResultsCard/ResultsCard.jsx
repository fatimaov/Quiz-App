import styles from './ResultsCard.module.css';

function ResultsCard({ score, totalQuestions }) {
  const percentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;

    // hardcoding for now, but potentially could be dynamic based on quiz category and score percentage
  let resultTitle, resultDescription;
  switch (true){
    case percentage >= 80: 
      resultTitle = 'Great Work!';
      resultDescription = 'You really know your stuff. Keep it up!';
      break;
    case percentage >= 50: 
      resultTitle = "Good Effort!";
      resultDescription = `A little more practice and you'll ace it.`; 
      break;
    default:
      resultTitle = "Keep going!"; 
      resultDescription = `Review the topic and try again - you'll get there.`;
  }

  return (
    <div className={styles.resultsCard}>
            <div className={styles.scoreCard}>
                <div className={styles.scoreRing}  style={{ '--score-pct': `${Math.min(percentage, 100)}%` }}/> 
                <div className={styles.scoreRingMask} />
                <div className={styles.scoreEllipseOutsideBorder} />
                <div className={styles.scoreEllipseInsideBorder} />
                <div className={styles.scoreText}>
                  <span className={styles.scoreNumbers}>{score}/{totalQuestions}</span>
                  <span className={styles.scoreLabel}>Score</span>
                </div>
              </div>
    
              <div className={styles.resultsCopy} aria-live="polite">
                <h2>{resultTitle}</h2>
                <p>{resultDescription}</p>
              </div>
    </div>
  )
}

export default ResultsCard;
