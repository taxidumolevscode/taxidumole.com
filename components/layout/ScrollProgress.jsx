export default function ScrollProgress({ progress }) {
  return (
    <div 
      className="fixed top-0 right-0 w-1 bg-white z-50 mix-blend-difference"
      style={{ height: `${progress * 100}%`, transition: 'height 0.1s linear' }}
    />
  );
}
