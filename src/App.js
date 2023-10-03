import { Profile } from './Profile';

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name='Maria Skłodowska-Curie'
        imageID='szV5sdG'
        imageSize={70}
        profession='physicist and chemist'
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal',
        ]}
        discovery='polonium (chemical element)'
      />
      <Profile
        name='Katsuko Saruhashi'
        imageID='YfeOqp2'
        imageSize={70}
        profession='geochemist'
        awards={['Miyake Prize for geochemistry', 'Tanaka Prize']}
        discovery='a method for measuring carbon dioxide in seawater'
      />
    </div>
  );
}
