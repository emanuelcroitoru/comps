import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase} from "react-icons/go";

function ButtonPage() {
	return (
		<div>
			<div>
				<Button className='mb-5' outline primary onClick={() => console.log(11)}>
					<GoBell />
					Click me
				</Button>
			</div>
			<div>
				<Button secondary rounded outline>
					<GoCloudDownload />
					Buy Now
				</Button>
			</div>
			<div>
				<Button warning rounded outline>
					<GoDatabase />
					Hide ads
				</Button>
			</div>
			<div>
				<Button danger>Do the thing</Button>
			</div>
			<div>
				<Button success rounded>Do the thing</Button>
			</div>
		</div>
	);
}

export default ButtonPage;
