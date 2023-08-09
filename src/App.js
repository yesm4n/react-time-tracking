import data from './Data';
import jeremy from './images/image-jeremy.png';
import exercise from './images/exercise.svg';
import play from './images/play.svg';
import selfcare from './images/selfcare.svg';
import social from './images/social.svg';
import study from './images/study.svg';
import work from './images/work.svg';
import { useState } from 'react';

export default function App() {
  const [time, setTime] = useState('daily');
  const images = [work, play, study, exercise, social, selfcare];

  return (
    <div className="container">
      <div className="hero">
        <Profile setTime={setTime} />
        <Card data={data} time={time} images={images} />
      </div>
    </div>
  );
}

function Profile({ setTime }) {
  return (
    <div className="card">
      <div className="card-profile">
        <div className="card-padding">
          <img src={jeremy} alt="Jeremy Robson" />
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div className="card-buttons card-padding">
        <Button onClick={() => setTime('daily')}> Daily </Button>
        <Button onClick={() => setTime('weekly')}> Weekly </Button>
        <Button onClick={() => setTime('monthly')}> Monthly </Button>
      </div>
    </div>
  );
}

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

function Card({ data, time, images }) {
  return (
    <>
      {data.map((title, index) => (
        <div className="card" key={title.title}>
          <div className="card-padding">
            <img src={images[index]} alt={title.title} />
            <h4>{title.title}</h4>
            <h2>{title.timeframes[time].current}hrs</h2>
            <p>Last Week - {title.timeframes[time].previous}hrs</p>
          </div>
        </div>
      ))}
    </>
  );
}
