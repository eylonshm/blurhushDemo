const animals = ['cat', 'dog', 'duck', 'fox', 'panda', 'bunny', 'koala']

export const getRandomAnimal = () => {
  const randomArrIndex = Math.floor(Math.random() * animals.length)
  return animals[randomArrIndex]
}
