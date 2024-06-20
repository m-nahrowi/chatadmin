
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";

const date = new Date();
const API_KEY = "AIzaSyDxATGNueahse-vpeg3PUXSvs7ycIAssD8";
const genAI = new GoogleGenerativeAI(API_KEY);

export default function Response(props) {
	const [generatedText, setGeneratedText] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			const model = genAI.getGenerativeModel({ model: "gemini-pro" });
			const prompt = props.prompt;
			const result = await model.generateContent(prompt);
			const response = await result.response;
			const text = await response.text();
			setGeneratedText(text);
		};
		fetchData();
	}, [props.prompt]);

	return (
		<div style={styles.response}>
			<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
				<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
					<Image src="/icons/robot.png" alt="Robot Icon" width={28} height={28} style={styles.icon} />
					<span style={{ fontWeight: 600 }}>Admin</span>
				</div>
				<span style={{ fontSize: "10px", fontWeight: "600" }}>
					{date.getHours()}:{date.getMinutes()}
				</span>
			</div>
			<ReactMarkdown>{generatedText}</ReactMarkdown>
		</div>
	);
}

const styles = {
	response: {
		display: "flex",
		flexDirection: "column",
		gap: "8px",
		backgroundColor: "#fafafa",
		marginBottom: "8px",
		padding: "16px",
		borderRadius: "16px",
	},
	icon: {
		width: "28px",
		height: "28px",
	},
};
