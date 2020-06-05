import React from 'react';
import {
  IonItem,
  IonLabel,
  IonNote
  } from '@ionic/react';
import { Message } from '../data/messages';
import './MessageListItem.css';



const MessageListItem: React.FC<any> = ({ bug }) => {
  return (
    <IonItem routerLink={`/message/${bug.id}`} detail={false}>
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {bug.name}
          <span className="date">
            <IonNote>10-Jun-2020</IonNote>
          </span>
        </h2>
        <h3>{bug.isCompleted}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </IonLabel>
    </IonItem>
  );
};

export default MessageListItem;
