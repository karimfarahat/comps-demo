import Button from "../components/Button";
import { GoBell, GoCopilot, GoArchive } from "react-icons/go";

function ButtonPage() {
  return (
    <div>
      <Button primary rounded outline className="mb-5">
        <GoBell />
        Click Me!
      </Button>
      <Button secondary outline>
        <GoArchive />
        Click Me!
      </Button>
      <Button success>
        <GoCopilot />
        Click Me!
      </Button>
      <Button warning outline>
        Click Me!
      </Button>
      <Button danger>Click Me!</Button>
    </div>
  );
}

export default ButtonPage;
