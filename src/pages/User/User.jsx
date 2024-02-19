import React, { useState, useEffect } from "react";
import Web3 from "web3";
import axios from "axios";
import { useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Button = ({ children }) => (
	<button className="w-full text-white bg-[#020227] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
		{children}
	</button>
);

const User = () => {
	const [profile, setProfile] = useState();
	const [loading, setLoading] = useState({ state: true, msg: "" });
	const [infoLink, setInfoLink] = useState("");
	const [templateLink, setTemplateLink] = useState("");
	const [owner, setOwner] = useState("");

	const { user } = useParams()
	console.log(user);

	useEffect(() => {
		if (!user) return;
		(async () => {
			setLoading({ state: true, msg: "Getting Metadata" });
			const network = user?.split("@")[1]?.toLowerCase();
			const username = user?.split("@")[0];
			console.log(username, network);
			let web3Provider;
			let contractAddress;
			if (!network || !username) return;
			switch (network) {
				case "rinkeby":
					web3Provider =
						"https://rinkeby.infura.io/v3/f0362c1f5aea42abb1d875f7a0f8692d";
					contractAddress = "0x13356777Ef8547d9e2F94a3C0ED2020c1Cd04e65";
					break;
				case "polygon":
					web3Provider = "polygonProvider";
					contractAddress = "";
					break;
			}
			const web3 = new Web3(new Web3.providers.HttpProvider(web3Provider));
			try {
				const contract = new web3.eth.Contract(abi, contractAddress);
				const userId = web3.utils
					.toBN(web3.utils.soliditySha3(username))
					.toString();
				const charInfo = await contract.methods.charInfo(userId).call();
				const templateObj = (await axios.get(checkLink(charInfo))).data;
				console.log(templateObj);

				if (templateObj?.defaultTemplate === true) {
					setProfile(Object.entries(templateObj));
					console.log(Object.entries(templateObj));
					setLoading({ state: false, msg: "" });
				} else {
					let templateAddress = templateObj.template.address;
					let templateInfo = templateObj.template.info;
					templateAddress = checkLink(templateAddress);
					templateInfo = checkLink(templateInfo);

					setTemplateLink(templateAddress);
					setInfoLink(templateInfo);

					console.log("%ctemplateObj", "color:red", templateObj);
					console.log("iframe link=", templateLink + "?infoLink=" + infoLink);
					setLoading({ state: true, msg: "Loading Template..." });
				}

				const owner = await contract.methods.ownerOf(userId).call();
				setOwner(owner);
			} catch (err) {
				console.log(err);
			}
		})();
	}, [user]);
	if (!templateLink && !profile)
		return (
			<div className="w-100 h-100 flex gap-4 justify-center items-center absolute top-[45%] left-[45%]">
				<h5 className="text-xl">{loading.msg}</h5>
				<LoadingSpinner />
			</div>
		);
	return (
		<React.Fragment>
			<div className="w-full h-full container mx-auto flex justify-center items-center bg-zinc-50">
				{templateLink && (
					<iframe
						className="w-full h-full"
						src={templateLink + "?infoLink=" + infoLink}
						frameBorder="0"
						onLoad={() => setLoading({ state: false, msg: "" })}
					></iframe>
				)}
				{profile && (
					<div className="flex flex-col items-center w-full">
						{/* <div className="w-full flex flex-col justify-center items-center"> */}
						{profile.map((item, index) => {
							if (item[0] === "Telegram")
								return (
									<a
										href={`https://t.me/${item[1]}`}
										target="_blank"
										rel="noreferrer"
										key={index}
										className="w-full sm:w-1/4 px-2 sm:px-0"
									>
										<Button variant="contained" fullWidth>
											{item[0]}
										</Button>
									</a>
								);
							else if (item[0] === "Email")
								return (
									<a
										href={`mailto: ${item[1]}`}
										target="_blank"
										rel="noreferrer"
										key={index}
										className="w-full sm:w-1/4 px-2 sm:px-0"
									>
										<Button variant="contained" fullWidth className="">
											{item[0]}
										</Button>
									</a>
								);
							else if (item[0] === "Phone number")
								return (
									<a
										href={`tel: ${item[1]}`}
										target="_blank"
										rel="noreferrer"
										key={index}
										className="w-full sm:w-1/4 px-2 sm:px-0"
									>
										<Button variant="contained" fullWidth>
											{item[0]}
										</Button>
									</a>
								);
							else if (item[0] === "Website")
								return (
									<a
										href={"https://" + item[1]}
										target="_blank"
										rel="noreferrer"
										key={index}
										className="w-full sm:w-1/4 px-2 sm:px-0"
									>
										<Button variant="contained" fullWidth>
											{item[0]}
										</Button>
									</a>
								);
							else if (item[0] === "Facebook")
								return (
									<a
										href={"https://facebook.com/" + item[1]}
										target="_blank"
										rel="noreferrer"
										key={index}
										className="w-full sm:w-1/4 px-2 sm:px-0"
									>
										<Button variant="contained" fullWidth>
											{item[0]}
										</Button>
									</a>
								);
							else if (item[0] === "Instagram")
								return (
									<a
										href={"https://instagram.com/" + item[1]}
										target="_blank"
										rel="noreferrer"
										key={index}
										className="w-full sm:w-1/4 px-2 sm:px-0"
									>
										<Button variant="contained" fullWidth>
											{item[0]}
										</Button>
									</a>
								);
							else if (item[0] === "Linkedin")
								return (
									<a
										href={"https://www.linkedin.com/in/" + item[1]}
										target="_blank"
										rel="noreferrer"
										key={index}
										className="w-full sm:w-1/4 px-2 sm:px-0"
									>
										<Button variant="contained" fullWidth>
											{item[0]}
										</Button>
									</a>
								);
							else if (item[0] === "Discord")
								return (
									<div key={index} style={{ width: "100%", padding: "0 1rem" }}>
										{/* <Tooltip
											title="Copy ID"
											onClick={() => navigator.clipboard.writeText(item[1])}
										> */}
										<Button
											variant="contained"
											fullWidth
											sx={{ margin: "1rem 0" }}
										>
											{item[0]}
										</Button>
										{/* </Tooltip> */}
									</div>
								);
						})}
						{owner && (
							<a
								className="w-full sm:w-1/4 px-2 sm:px-0"
								href={`https://dapp.lott.link/newmessage?to=${owner}`}
								target="_blank"
								rel="noreferrer"
							>
								<button className="w-full text-white bg-[#020227] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
									On Chain Message
								</button>
							</a>
						)}
					</div>
				)}
			</div>
			{loading.state && (
				<div className="w-100 h-100 flex gap-4 justify-center items-center absolute top-[45%] left-[45%]">
					<div className="text-xl">{loading.msg}</div>
					<LoadingSpinner />
				</div>
			)}
		</React.Fragment>
	);
};

export default User;

const abi = [
	{
		inputs: [{ internalType: "uint256", name: "charId_", type: "uint256" }],
		name: "charInfo",
		outputs: [{ internalType: "string", name: "charName_", type: "string" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
		name: "ownerOf",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
];
const checkLink = (link) => {
	if (!link) return;
	const protocol = link.split("://")[0];
	if (protocol.toLowerCase().includes(["http", "https"])) return link;
	else if (protocol.toLowerCase().includes(["ipfs"]))
		return "https://ipfs.infura.io/ipfs/" + link.split("://")[1];
	else return link;
};
const LoadingSpinner = () => {
	return (
		<svg
			role="status"
			className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
			viewBox="0 0 100 101"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
				fill="currentColor"
			/>
			<path
				d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
				fill="currentFill"
			/>
		</svg>
	);
};
