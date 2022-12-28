import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import FormLogin from '../components/FromLogin';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader >
        <IonToolbar>
          <IonTitle >ปล่อย Share</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <FormLogin />
      </IonContent>
    </IonPage>
  );
};

export default Home;

