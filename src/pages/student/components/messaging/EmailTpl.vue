<template>
		<div class="email-tpl">
				<div class="mix over category-newsletters" style="display: inline-block;">
						<ul class="photo-grid newsletters">
								<li>
										<div class="target">
												<figure>
														<div class="img_wrapper">
																<div class="draw-device browser" id="Foodies-browser">
																		<div class="bar white"></div>
																		<div class="screen">
																				<img
																						alt="Foodies Newsletters Email Template"
																						title="Foodies"
																						src="//i3.campaignmonitor.com/assets/images/email-templates/newsletters/ptl_template_4.jpg?ver=16397"
																						class="loaded"/>
																		</div>
																</div>
														</div>
												</figure>
												<a class="info" data-noqs="true">
													<span class="inner">
														<span class="cmbtn">Start Building</span>
													</span>
												</a>
										</div>
								</li>
						</ul>
				</div>
		</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
.email-tpl {
		width: 225px;
		height: 280px;
		margin-right: 10px;
		margin-bottom: 5px;
		display: inline-block;
		position: relative;
}

.mix .photo-grid li {
		display: inline-block;
		width: 100%;
}

.mix .photo-grid img {
		display: block;
		height: auto;
		max-width: 100%;
		-webkit-transition: all 0.3s ease-in-out;
		-moz-transition: all 0.3s ease-in-out;
		-ms-transition: all 0.3s ease-in-out;
		-o-transition: all 0.3s ease-in-out;
		transition: all 0.3s ease-in-out;
}

.mix .photo-grid figure {
		overflow: hidden;
		position: relative;
		margin: 0;
}

.mix .photo-grid figcaption {
		font-size: 10px;
		background-color: rgba(101, 185, 255, 0.9);
		color: #fff;
		display: table;
		height: 100%;
		left: 0;
		-ms-filter: 'alpha(opacity=@calc_val)';
		filter: alpha(opacity=0);
		-moz-opacity: 0;
		-khtml-opacity: 0;
		opacity: 0;
		position: absolute;
		right: 0;
		top: 0;
		-webkit-transition: all 0.3s ease-in-out;
		-moz-transition: all 0.3s ease-in-out;
		-ms-transition: all 0.3s ease-in-out;
		-o-transition: all 0.3s ease-in-out;
		transition: all 0.3s ease-in-out;
		-webkit-transition-delay: 100ms;
		-moz-transition-delay: 100ms;
		transition-delay: 100ms;
		z-index: 20;
		border: 1px solid #fff;
}

.mix .photo-grid figcaption p {
		display: table-cell;
		position: relative;
		top: -40px;
		width: 270px;
		vertical-align: middle;
		text-align: center;
		text-shadow: 1px 1px 0 #32a2ff;
		font-size: 2.6em;
		line-height: 1.23em;
		font-weight: 700;
		-webkit-transition: all 0.3s ease-in-out;
		-moz-transition: all 0.3s ease-in-out;
		-ms-transition: all 0.3s ease-in-out;
		-o-transition: all 0.3s ease-in-out;
		transition: all 0.3s ease-in-out;
		color: #fff;
		padding: 22px;
		table-layout: fixed;
		-webkit-font-smoothing: antialiased;
}

.mix .photo-grid li:hover figcaption {
		-ms-filter: 'alpha(opacity=@calc_val)';
		filter: alpha(opacity=100);
		-moz-opacity: 1;
		-khtml-opacity: 1;
		opacity: 1;
}

.mix .photo-grid li:hover figcaption p {
		-webkit-transform: translateY(40px);
		-moz-transform: translateY(40px);
		-ms-transform: translateY(40px);
		-o-transform: translateY(40px);
		transform: translateY(40px);
}

.mix .photo-grid figcaption {
		background-color: rgba(81, 207, 219, 0.9);
}

.mix .photo-grid figcaption p {
		text-shadow: 1px 1px 0 #2bc0ce;
}

@-moz-document url-prefix() {
		.mix .photo-grid li:hover figcaption p {
				-webkit-transform: none;
				-moz-transform: none;
				-ms-transform: none;
				-o-transform: none;
				transform: none;
		}
}
.target {
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
		-webkit-perspective: 1000px;
		perspective: 1000px;
		position: relative;
		display: block;
}

.target figure,
.target .info {
		background-size: cover;
		background-position: center;
		-webkit-transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
		-o-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
		-webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		text-align: center;
		min-height: 280px;
		height: auto;
		color: #fff;
		font-size: 0.6rem;
}

.target .info {
		background: #111324;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
}

.target .info .inner .no-hover {
		pointer-events: none;
}

.target figure:after {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		width: 100%;
		height: 100%;
		content: '';
		display: block;
		opacity: 0.6;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
}

.target:hover figure,
.target:hover .info {
		-webkit-transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
		-o-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
		-webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
}

.target .info {
		-webkit-transform: rotateY(180deg);
		transform: rotateY(180deg);
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
}

.target .info .inner {
		-webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
		transform: translateY(-50%) translateZ(60px) scale(0.94);
		top: 50%;
		position: absolute;
		left: 0;
		width: 100%;
		padding: 2rem;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		outline: 1px solid transparent;
		-webkit-perspective: inherit;
		perspective: inherit;
		z-index: 0;
		opacity: 0;
		transition: 0.3s ease;
}

.target figure {
		-webkit-transform: rotateY(0deg);
		transform: rotateY(0deg);
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
}

.target:hover .info {
		-webkit-transform: rotateY(0deg);
		transform: rotateY(0deg);
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
}

.target:hover .info .inner {
		opacity: 1;
}

.target:hover figure {
		-webkit-transform: rotateY(-180deg);
		transform: rotateY(-180deg);
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
}
.cmbtn {
		padding: 9px 24px;
		background-color: #fff;
		color: #51cfdb;
		border: 1px solid #fff;
		border-radius: 5px;
		font-weight: bold;
}
</style>
