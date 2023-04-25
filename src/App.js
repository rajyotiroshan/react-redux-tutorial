import Button from "./Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
export default function App() {
  return (
    <div className="btns">
      <div className="btnc-container">
        <div>
          <Button primary>
            <GoBell /> Primay
          </Button>
        </div>
        <div>
          <Button secondary>
            <GoCloudDownload />
            Secondary
          </Button>
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
      {/**Rounded */}
      <div className="btnc-container">
        <div>
          <Button primary rounded>
            Primay
          </Button>
        </div>
        <div>
          <Button secondary rounded>
            Secondary
          </Button>
        </div>
        <div>
          <Button warning rounded>
            Warning
          </Button>
        </div>
        <div>
          <Button danger rounded>
            Danger
          </Button>
        </div>

        <div>
          <Button success rounded>
            Success
          </Button>
        </div>
      </div>

      {/**Rounded */}
      <div className="btnc-container">
        <div>
          <Button primary>
            <GoDatabase /> Primay
          </Button>
        </div>
        <div>
          <Button secondary outline>
            Secondary
          </Button>
        </div>
        <div>
          <Button warning outline>
            Warning
          </Button>
        </div>
        <div>
          <Button danger outline>
            Danger
          </Button>
        </div>

        <div>
          <Button success outline>
            Success
          </Button>
        </div>
      </div>
    </div>
  );
}
