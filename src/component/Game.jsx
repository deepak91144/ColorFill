import React, { useState, useEffect } from "react";
const Game = () => {
	const arr = [1, 2, 3, 4, 5, 6];
	const [selectedBox, setSelectedBox] = useState([]);
	const [intervalId, setIntervalId] = useState(null);
	const fillTheColor = (ind) => {
		setSelectedBox((pre) => {
			return [...pre, ind];
		});
	};
	const bringBack = () => {
		const newArr = [...selectedBox];
		let id = setInterval(() => {
			newArr.pop();
			setSelectedBox((pre) => {
				return [...newArr];
			});
		}, 1000);
		setIntervalId(id);
	};
	useEffect(() => {
		if (selectedBox.length === arr.length) {
			bringBack();
		}
		if (selectedBox.length === 0) {
			if (intervalId !== null) {
				clearInterval(intervalId);
			}
		}
	}, [selectedBox]);

	useEffect(() => {
		return () => {
			if (intervalId !== null) {
				clearInterval(intervalId);
			}
		};
	}, []);

	return (
		<>
			<div className="gameCon">
				<div className="con">
					{arr.map((ele, ind) => {
						return (
							<>
								<div
									key={ind}
									className={`childCon ${
										selectedBox.includes(ind) ? "activeBox" : ""
									}`}
									onClick={() => {
										fillTheColor(ind);
									}}
								></div>
							</>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Game;
