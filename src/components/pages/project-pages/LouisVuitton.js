import React from 'react';
import '../../../App.css';


function LouisVuitton () {
	return (
		<div className="project__container" >
			<div>
                {/* <img src='images/project images/LV Motion Design Package-02.png' ></img>
                <img src='images/project images/LV Motion Design Package-03.png' ></img>
                <img src='images/project images/LV Motion Design Package-04.png' ></img>
                <img src='images/project images/LV Motion Design Package-09.png' ></img> */}
                <video src='videos/LouisVuitton.mp4' className="project__video" autoPlay loop/>
			</div>
		</div>
	)
}

export default LouisVuitton;