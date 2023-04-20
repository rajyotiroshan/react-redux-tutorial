import Button from "./Button";

export default function App() {
  return (
    <div>
      <div>
        <Button primary>Primay</Button>
      </div>
      <div>
        <Button secondary>Secondary</Button>
      </div>
      <div>
        <Button warning>Warning</Button>
      </div>
      <div>
        <Button danger>Danger</Button>
      </div>

      <div>
        <Button success>Success</Button>
      </div>
    </div>
  );
}
