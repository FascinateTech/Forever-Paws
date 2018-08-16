const getAnimals = () =>
  new Promise(resolve =>
    resolve([
      {
        name: 'Peter',
        breed: 'golden corgie',
        age: '3 years old',
        description: 'Lets skip the small talk and go for a walk',
        picture: ['https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg'],
        location: '20057',
      },
      {
        name: 'Bones',
        breed: 'bulldog',
        age: '2 years old',
        description: 'Lets play fetch',
        picture: ['https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg'],
        location: '45693',
      },
      {
        name: 'Rover',
        breed: 'golden corgie',
        age: '1 years old',
        description: 'Cute and fluffy',
        picture: ['https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg'],
        location: '82179',
      },
      {
        name: 'Spot',
        breed: 'pug',
        age: '5 years old',
        description: 'Friendly and playful',
        picture: ['https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg'],
        location: '90210',
      },
      {
        name: 'Last Dog',
        breed: 'Last Dog',
        age: 'Last Dog',
        description: 'Last Dog',
        picture: ['https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg'],
        location: 'Last Dog',
      },
    ])
  );

exports.getAnimals = getAnimals;
