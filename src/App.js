import Button from "./Button";

export default function App() {
  return (
    <div>
      <div>
        <Button primary secondary>
          Click here!
        </Button>
      </div>
      <div>
        <Button>Buy Now!</Button>
      </div>
      <div>
        <Button>See Deal!</Button>
      </div>
      <div>
        <Button>Hide Ads!</Button>
      </div>
    </div>
  );
}
