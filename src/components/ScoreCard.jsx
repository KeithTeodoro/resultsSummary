export default function ScoreCard({ children, className, title, score }) {
  return (
    <>
      <div
        className={`p-3 mb-3 rounded-lg flex flex-row justify-between items-center ${className}`}
      >
        <div>
          <p>{title}</p>
        </div>
        <div>
          <p>{score}/100</p>
        </div>
      </div>
    </>
  );
}
