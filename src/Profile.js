import { getImageUrl } from './utils.js';

export function Profile({
  name,
  imageID,
  imageSize = 70,
  profession,
  awards,
  discovery,
}) {
  return (
    <section className='profile'>
      <h2>{name}</h2>
      <img
        className='avatar'
        src={getImageUrl(imageID)}
        alt={name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profession: </b>{profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>({awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>{discovery}
        </li>
      </ul>
    </section>
  );
}
