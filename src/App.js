import data from './Data';
import jeremy from './images/image-jeremy.png';
import Ellipsis from './images/Ellipsis.svg';
import Exercise from './images/Exercise.svg';
import Play from './images/Play.svg';
import Selfcare from './images/Selfcare.svg';
import Social from './images/Social.svg';
import Study from './images/Study.svg';
import Work from './images/Work.svg';
import { useState } from 'react';

export default function App() {
  const [timeFrame, setTimeFrame] = useState('daily');
  const images = [Work, Study, Social, Selfcare, Play, Exercise, Ellipsis];

  return (
    <div className="container">
      <div className="hero">
        <Profile setTimeFrame={setTimeFrame} />
        <Card data={data} timeFrame={timeFrame} images={images} />
      </div>
    </div>
  );
}

function Profile({ setTimeFrame }) {
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
        <Button onClick={() => setTimeFrame('daily')}> Daily </Button>
        <Button onClick={() => setTimeFrame('weekly')}> Weekly </Button>
        <Button onClick={() => setTimeFrame('monthly')}> Monthly </Button>
      </div>
    </div>
  );
}

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

function Card({ data, timeFrame, images }) {
  return (
    <>
      {data.map((title, index) => (
        <div className="card" key={title.title}>
          <div className="card-padding">
            <img src={images[index]} alt={title.title} />
            <h4>{title.title}</h4>
            <h2>{title.timeframes[timeFrame].current}hrs</h2>
            <p>Last Week - {title.timeframes[timeFrame].previous}hrs</p>
          </div>
        </div>
      ))}
    </>
  );
}
