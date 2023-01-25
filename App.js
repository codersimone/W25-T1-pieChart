import './App.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  const lostTvRemotes = {
    labels: ["50% found between sofa cushions", "4% found in the refrigerator or freezer", "2% found outside the house"],
    datasets: [  
      {
        label: '% of lost TV remotes',
        data: [50, 4, 2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
      }
    ]
  };

  return (
      <Pie data={lostTvRemotes} />
  );
}

export default App;