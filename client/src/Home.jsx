import Card from './components/Card';

export default function Home() {
  return (
    <main className="p-4 space-y-2">
      <div className="flex flex-wrap gap-4">
        <Card
          imgUri="/images/galaxy.webp"
          title="Galaxy"
        >
          A vast system of billions of stars, gas, and dust bound together by gravity, often arranged in spiral arms or elliptical shapes and spanning thousands of light-years across the cosmos.
        </Card>
        <Card
          imgUri="/images/asteroid.webp"
          title="Asteroid"
        >
          An asteroid is a small rocky body that orbits the sun, typically found in the asteroid belt between Mars and Jupiter.
        </Card>
        <Card
          imgUri="/images/black-hole.webp"
          title="Black Hole"
        >
          A black hole is a region of space where the gravitational pull is so strong that nothing, not even light, can escape from it.
        </Card>
      </div>
    </main>
  )
}
