import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
  return (
    <img
      className='avatar'
      src={getImageUrl(person, size > 90 ? 'b' : 's')}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      size={80}
      person={{
        name: 'Gregorio Y. Zara',
        imageId: '7vQD0fP',
      }}
    />
  );
}
