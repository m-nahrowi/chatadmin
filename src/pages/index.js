import Image from "next/image";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });
import React, { useState } from "react";
import Head from "next/head";
import Response from "../components/response";
import Message from "../components/message";

export default function Home() {
	const [inputText, setInputText] = useState("");
	const [listData, setListData] = useState([]);

	const SearchInput = () => {
		setListData((prevList) => [...prevList, inputText]);
		setInputText("");
	};

	return (
		<div style={styles.container}>
			<Head>
				<title>ChatAI</title>
				<meta name="description" content="Ask AI anything" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* Header */}
			<div style={styles.header}>
				<Image src="/icons/robot.png" alt="Robot Icon" width={32} height={32} style={styles.icon} />
				<h1 style={{ fontSize: "24px", fontWeight: "800", color: "#323232" }}>ChatAI</h1>
			</div>

			{/* Content */}
			<div style={{ paddingHorizontal: "16px", marginBottom: "80px" }}>
				{listData.map((item, index) => (
					<div key={index}>
						<Message message={item} />
						<Response prompt={item} />
					</div>
				))}
			</div>

			{/* Search-Bar */}
			<div style={styles.searchBar}>
				<input
					placeholder="Ask to AI"
					style={styles.input}
					value={inputText}
					onChange={(e) => setInputText(e.target.value)}
				/>
				<button onClick={SearchInput} style={styles.button}>
					<Image src="/icons/right-arrow.png" alt="Right Arrow" width={32} height={32} style={styles.icon} />
				</button>
			</div>
		</div>
	);
}

const styles = {
	container: {
		display: "flex",
		flexDirection: "column",
		gap: "16px",
		paddingTop: "36px",
		height: "100vh",
		// justifyContent: "space-between",
	},
	header: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		padding: "16px",
		margin: "8px",
		gap: "8px",
	},
	icon: {
		width: "32px",
		height: "32px",
	},
	searchBar: {
		backgroundColor: "#ffffff",
		width: "100%",
		position: "fixed",
		bottom: 0,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		padding: "16px",
		gap: "8px",
	},
	input: {
		backgroundColor: "#fff",
		width: "100%",
		fontSize: "16px",
		padding: "16px 24px",
		borderRadius: "32px",
		borderWidth: "1px",
		borderColor: "grey",
	},
	button: {
		background: "none",
		border: "none",
		padding: "0",
		cursor: "pointer",
	},
};

