import { Mail, Phone, Globe, MapPin, Briefcase } from 'lucide-react';

import { Avatar } from '@/components/avatar';
import { Description } from '@/components/description';
import { Title } from '@/components/title';
import type { User } from '@/services/users';

import styles from './user-details.module.scss';

interface UserDetailsProps {
  user: User;
}

export const UserDetails = ({ user }: UserDetailsProps) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Avatar />
        <div>
          <Title>{user.name}</Title>
          <Description color="muted">@{user.username}</Description>
        </div>
      </header>

      <div className={styles.infoGrid}>
        <div className={styles.infoItem}>
          <Mail className={styles.icon} />
          <a href={`mailto:${user.email}`} className={styles.value}>
            {user.email}
          </a>
        </div>
        <div className={styles.infoItem}>
          <Phone className={styles.icon} />
          <a href={`tel:${user.phone}`} className={styles.value}>
            {user.phone}
          </a>
        </div>

        <div className={styles.infoItem}>
          <MapPin className={styles.icon} />
          <Description size="lg" disableGutter>
            {user.address.street}, {user.address.suite} {user.address.city},{' '}
            {user.address.zipcode}
          </Description>
        </div>
        <div className={styles.infoItem}>
          <Globe className={styles.icon} />
          <a
            href={`https://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.value}
          >
            {user.website}
          </a>
        </div>
        <div className={styles.infoItem}>
          <Briefcase className={styles.icon} />
          <div>
            <Description size="lg" disableGutter>
              {user.company.name}
            </Description>
            <Description color="muted" disableGutter>
              {user.company.catchPhrase}
            </Description>
            <Description color="muted" disableGutter>
              {user.company.bs}
            </Description>
          </div>
        </div>
      </div>
    </div>
  );
};
