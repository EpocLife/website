import { ReactComponent as AppStoreBadge } from '../assets/images/appStore.svg';

const AppStoreLink = ({ url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <AppStoreBadge style={{ width: '150px', height: 'auto' }} />
  </a>
);
export default AppStoreLink;