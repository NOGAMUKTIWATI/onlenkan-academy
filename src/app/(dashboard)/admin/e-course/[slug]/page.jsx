export default function page({ params }) {
  return (
    <div>
      <h1>{params.slug}</h1>
    </div>
  );
}
