import React from 'react';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonDatetime,
} from '@ionic/react';
import { useLocalStorage } from './hooks';
import BiorhythmCard from './components/BiorhythmCard';

function App() {
  const [dob, setDOB] = useLocalStorage('birthDate', '');
  const [targetDate, setTargetDate] = useLocalStorage(
    'targetDate',
    new Date().toISOString()
  );

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {dob && <BiorhythmCard birthDate={dob} targetDate={targetDate} />}
        <IonItem>
          <IonLabel position="floating">Date of Birth:</IonLabel>
          <IonDatetime
            displayFormat="DD-MMM-YYYY"
            value={dob}
            onIonChange={(e) => setDOB(e.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Target Date:</IonLabel>
          <IonDatetime
            displayFormat="DD-MMM-YYYY"
            value={targetDate}
            onIonChange={(e) => setTargetDate(e.detail.value)}
          />
        </IonItem>
      </IonContent>
    </IonApp>
  );
}

export default App;
