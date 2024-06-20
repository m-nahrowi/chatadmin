import React from "react";
import Image from "next/image";

const date = new Date();

export default function Message(props) {
	return (
		<div style={styles.message}>
			<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
				<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
					<Image src="/icons/user.png" alt="User Icon" width={28} height={28} style={styles.icon} />
					<span style={{ fontWeight: 500 }}>Username</span>
				</div>
				<span style={{ fontSize: "10px", fontWeight: "600" }}>
					{date.getHours()}:{date.getMinutes()}
				</span>
			</div>
			<p style={{ fontSize: "14px", width: "100%", flex: 1, paddingLeft: "0" }}>{props.message}</p>
		</div>
	);
}

const styles = {
	message: {
		display: "flex",
		flexDirection: "column",
		gap: "8px",
		backgroundColor: "#f1f2f3",
		marginBottom: "8px",
		padding: "16px",
		borderRadius: "16px",
	},
	icon: {
		width: "28px",
		height: "28px",
	},
};
