import React from "react";
import "./MyProjects.css";
import Pb from "../../assets/img/pb.png";

export default function MyProjects() {
	return (
		<div class="projects active" id="projects">
			<div class="item-wrap">
				<div class="image">
					<div class="img-wrap">
						<img class="element item-img" src={Pb} alt="Patrick David - Paolo Fornasier" />
						<img class="element item-img--full" src="#" alt="Patrick David - Paolo Fornasier" />
					</div>
				</div>
				<div class="info">
					<h3>
						<span class="s-05 active">
							<span>Paolo_</span>
						</span>
						<span class="s-05 active">
							<span>Fornasier</span>
						</span>
					</h3>
					<p>
						<span class="p-01 active">
							<span>The portfolio of Paolo Fornasier,</span>
						</span>
						<span class="p-01 active">
							<span>a young Italian musician</span>
						</span>
					</p>
				</div>
			</div>
			<div class="item-wrap">
				<div class="image">
					<div class="img-wrap">
						<img class="element item-img" src="#" alt="Patrick David - Barbara Scerbo" />
						<img class="element item-img--full" src="#" alt="Patrick David - Barbara Scerbo" />
					</div>
				</div>
				<div class="info">
					<h3>
						<span class="s-05 active">
							<span>Barbara_</span>
						</span>
						<span class="s-05 active">
							<span>Scerbo</span>
						</span>
					</h3>
					<p>
						<span class="p-01 active">
							<span>The portfolio of Barbara Scerbo,</span>
						</span>
						<span class="p-01 active">
							<span>a young Sicilian designer</span>
						</span>
					</p>
				</div>
			</div>
			<div class="item-wrap">
				<div class="image">
					<div class="img-wrap">
						<img class="element item-img" src="#" alt="Patrick David - Userbot" />
						<img class="element item-img--full" src="#" alt="Patrick David - Userbot" />
					</div>
				</div>
				<div class="info">
					<h3>
						<span class="s-05 active">
							<span>User_</span>
						</span>
						<span class="s-05 active">
							<span>bot</span>
						</span>
					</h3>
					<p>
						<span class="p-01 active">
							<span>Website of Userbot</span>
						</span>
						<span class="p-01 active">
							<span>Human + Artificial Intelligence</span>
						</span>
					</p>
				</div>
			</div>
			<div class="item-wrap">
				<div class="image">
					<div class="img-wrap">
						<img class="element item-img" src="#" alt="Patrick David - 200crowd" />
						<img class="element item-img--full" src="#" alt="Patrick David - 200crowd" />
					</div>
				</div>
				<div class="info">
					<h3>
						<span class="s-05 active">
							<span>200_</span>
						</span>
						<span class="s-05 active">
							<span>crowd</span>
						</span>
					</h3>
					<p>
						<span class="p-01 active">
							<span>UX/UI design of equity</span>
						</span>
						<span class="p-01 active">
							<span>crowdfunding portal</span>
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}
