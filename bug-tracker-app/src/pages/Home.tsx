import MessageListItem from '../components/MessageListItem';
import React, { useState } from 'react';
import { Message, getMessages } from '../data/messages';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
  IonButton
} from '@ionic/react';
import './Home.css';
import { bindActionCreators } from 'redux';
import bugActionCreators from '../actions';
import { connect } from 'react-redux';

/* const Home: React.FC = () => {

  const [messages, setMessages] = useState<Message[]>([]);

  useIonViewWillEnter(() => {
    const msgs = getMessages();
    setMessages(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bugs</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Bugs
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton expand="full" color="primary" onClick={_ => null}>Create New</IonButton>
        <IonList>
          {messages.map(m => <MessageListItem key={m.id} message={m} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
}; */

class Home extends React.Component<any>{
  refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  }

  getData = () => {
    this.props.load();
  }

  render = () => {
    console.dir(this.props.bugs);
    return (
      <IonPage id="home-page">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Bugs - {this.props.bugs.length} </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonRefresher slot="fixed" onIonRefresh={this.refresh}>
            <IonRefresherContent></IonRefresherContent>
          </IonRefresher>

          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">
                Bugs
            </IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonButton expand="full" color="primary" onClick={_ => null}>Create New</IonButton>
          <IonButton expand="full" color="primary" onClick={_ => this.getData()}>Get Bugs</IonButton>
        </IonContent>
      </IonPage>
    )
  }
}

function mapStateToProps(storeState : any){
  return { bugs : storeState.bugsState}
}

function mapDispatchToProps(dispatch : any){
  return bindActionCreators(bugActionCreators, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
