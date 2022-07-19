import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../asset/logo.png';
import './Wiki.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import '../../components/NavigationBar/NavigationBar.css';

function Wiki() {
	return (
		<div className="container-fluid" id="main-container">
			<img src={require('../../asset/logo.png')} className="img-fluid" alt="Bottle Genie app logo" id="logo" />
			<h3 id="heading">BOTTLE WIKI</h3>
			<section className="box" id="wiki-article">
				<p>
					In Germany, there is a <b>bottle return system</b>. When you buy certain products, you pay a{' '}
					<b>deposit</b> (<i>Pfand</i>) for the container. When you return the empty container, you get your
					deposit back. This encourages people to return their empty bottles. The empty bottles are recycled
					or reused.
				</p>
				<p>
					<b>
						The <i>Pfand</i> system
					</b>{' '}
					is a big part of sorting your trash in Germany. It's a bit confusing, but this guide will help you.
				</p>
				<h5>Common bottles with a deposit</h5>
				<p>
					These bottles have a deposit. You can return them at any store that sells them, and you will get
					some money back.
				</p>
				<p>
					<ul className="returnable">
						<li>
							<b>
								Single-use (<i>Einweg</i>) plastic bottles
							</b>{' '}
							- 0.25€
						</li>
						<li>
							<b>
								Multiple-use (<i>Mehrweg</i>) glass and plastic bottles
							</b>{' '}
							- 0.08€ to 0.15€
						</li>
					</ul>
				</p>
				<h5>Common bottles with no deposit</h5>
				<p>These bottles can still be recycled, but there is no deposit on them.</p>
				<p>
					<ul className="non-returnable">
						<li>Milk cartons and bottles</li> <li>Most wine bottles</li>{' '}
						<li>Bottles purchased in other countries</li>
						<li>
							Containers with the{' '}
							<a href="https://allaboutberlin.com/images/gruene-punkt-pfand.png">Grüne Punkt</a> logo -
							these go in the yellow recycling bin
						</li>
					</ul>
				</p>
				<h5>
					How to identify <i>Pfand</i> bottles
				</h5>
				<p>
					Sometimes, there is a logo on the label, near the barcode, or it's written directly on the
					container. Sometimes, there is no indication. For example, beer bottles rarely have a <i>Pfand</i>{' '}
					symbol.
				</p>
				<h5>
					<i>Pfand</i> logos
				</h5>
				<p>
					If you see one of these logos on the bottle, it has a deposit. You can return it and get your money
					back.
				</p>
				<p>
					{' '}
					<img
						src={require('../../asset/pfand-logos.png')}
						className="img-fluid"
						alt="Pfand symbols"
						id="pfand-logos"
					/>
				</p>
				<h5>
					<i>Pfand</i> keywords
				</h5>
				<p>
					Look for these keywords on the label and on the container. It tells you if the bottle has a{' '}
					<i>Pfand</i>.
				</p>
				<p>
					<b>
						With <i>Pfand</i>:
					</b>{' '}
					"Pfand-Glas", "Mehrwegflasche"
					<br />
					<b>
						Without <i>Pfand</i>:
					</b>{' '}
					"Pfandfrei", "Ohne Pfand"
				</p>
				<h5>
					<i>Einweg and Mehrweg</i>
				</h5>
				<p>
					There are two types of containers with a deposit: single-use (<b>
						<i>Einweg</i>
					</b>) and multiple-use (<b>
						<i>Mehrweg</i>
					</b>). Multiple-use containers will be cleaned up and reused. Single-use containers will be
					destroyed and recycled.
				</p>
				<h5>Where to return bottles in Germany?</h5>
				<p>
					If a business sells <i>Pfand</i> containers, it must accept <i>Pfand</i> returns. It does not have
					to accept container types it doesn't sell. For example, Aldi and Lidl only sell single-use (<i>Einweg</i>)
					bottles, so they don't accept multiple use (<i>Mehrweg</i>) bottles. If a store is larger than 200
					m², it must accept containers from all brands, not just the brands it sells.
				</p>{' '}
				<ul>
					<li>
						<b>Supermarkets:</b> look for a bottle return machine (<b>Pfandautomat</b>). They are near the
						entrance, or at the back of the store. The machine will print a coupon. You must bring that
						coupon to the cash register to get your money back.
					</li>{' '}
					<li>
						<b>
							Beverage stores (<i>Getränkemarkt</i>):
						</b>{' '}
						if you have a lot of bottles to return, this is the right place.
					</li>
					<li>
						<b>
							<i>Spätis</i>:
						</b>{' '}
						late night stores will accept the bottles they sold you. They are not a good place to return a
						lot of bottles.
					</li>
					<li>
						<b>Charities:</b> some charities will accept bottle donations.{' '}
						<a href="https://pfandgeben.de/">Pfandgeben</a> is the best way to find them.
					</li>
				</ul>
				<h5>Leaving bottles under trash cans</h5>
				<p>
					In Berlin, you can leave your empty bottles next to a trash can. Some people collect empty bottles
					to earn a bit of money. You make their job easier, because they don't need to search inside the
					trash bin.
				</p>
				Source: allaboutberlin.com
			</section>
			<NavigationBar />
		</div>
	);
}

export default Wiki;
