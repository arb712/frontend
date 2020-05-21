import React, { Component } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
// import { Formik } from "formik";
// import axios from "axios";
import profile from "./../../image/profile.png";

class editProfile extends Component {
	render() {
		return (
			<div>
				<Form>
					<Row className="mb-5 mt-5">
						<Col md={{ offset: 3, span: 6 }}>
							<Card>
								<Card.Img
									src={profile}
									className="mx-auto mb-2 mt-3"
									style={{ width: "10rem" }}
								/>
								<div className="d-flex ml-5 pl-5 mb-3 mt-3 justify-content-center">
									<input type="file" />
								</div>

								<Card.Body>
									<Form>
										<Form.Group controlId="formBasicEmail">
											<Form.Label>Username</Form.Label>
											<Form.Control type="text" placeholder="Username" />
										</Form.Group>

										<Form.Group controlId="formBasicEmail">
											<Form.Label>Full Name</Form.Label>
											<Form.Control type="email" placeholder="Full Name" />
										</Form.Group>

										<Form.Group controlId="formBasicEmail">
											<Form.Label>Email address</Form.Label>
											<Form.Control type="email" placeholder="Enter email" />
										</Form.Group>

										<Form.Group controlId="formBasicEmail">
											<Form.Label>Phone Number</Form.Label>
											<Form.Control type="email" placeholder="Phone Number" />
										</Form.Group>
										<Button
											variant="outline-danger"
											className="buttonProfile "
											block
										>
											Save
										</Button>
									</Form>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Form>
			</div>
		);
	}
}

export default editProfile;