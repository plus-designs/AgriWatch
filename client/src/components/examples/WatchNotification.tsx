import WatchNotification from '../WatchNotification';

export default function WatchNotificationExample() {
  return (
    <WatchNotification 
      notification={{
        id: '1',
        type: 'rain',
        message: 'Rain alert at 4pm'
      }}
      onDismiss={() => console.log('Dismissed')}
      onViewDetails={() => console.log('View details')}
    />
  );
}
