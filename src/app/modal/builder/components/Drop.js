import React, { Component } from "react";
import Dropzone from "react-dropzone";
import DropboxChooser from "react-dropbox-chooser";
import "./Drop.css";
// import firebase from 'firebase'
var config = {
	apiKey: "AIzaSyAJDOUDEqCU9VGQQv_js0AFzucYzX5tu9s",
	authDomain: "book-82d80.firebaseapp.com",
	databaseURL: "https://book-82d80.firebaseio.com",
	projectId: "book-82d80",
	storageBucket: "book-82d80.appspot.com",
	messagingSenderId: "121132924717"
};
const uploadToFirebase = file => {
	// Creating a ref to firebase storage
	// var ref = firebase.storage().ref();
	// // putting file to firebase
	// ref.child(file.name).put(file).then(function(snapshot) {
	// 	console.log("File uploaded!");
	// 	// console.log(snapshot)
	// });
};
class Drop extends Component {
	constructor(props) {
		super(props);
		// firebase.initializeApp(config);
	}

	state = {
		file: null
	};

	onDrop = (dropFiles, err, e) => {
		this.setState({
			file: dropFiles[0]
		});
	};

	upload = () => {

		if (this.state.file){
			this.props.upload(
				this.props.book.id,
				this.props.page,
				this.state.file
			);
		}

	};

	onSuccessDropbox = file => {
		this.fetchFromUrl(file[0].link, file[0].name);
	};

	fetchFromUrl(url, name) {
		fetch(url, {
			method: "GET",
			mode: "no-cors"
		})
			.then(response => {
				console.log(response.blob());
				return response.blob();
			})
			.then(myBlob => {
				return new File([myBlob], name);
			})
			.then(file => {
				uploadToFirebase(file);
				this.setState({
					files: file
				});
				console.log(this.state.files);
			});
	}
	render() {
		return (
			<div styleName="Drop">
				<Dropzone
					ref={el => (this.dropzone = el)}
					id="dropZone"
					onDrop={files => this.onDrop(files)}
				>
					<img id="dropZoneImage" src={require("./img/upload.png")} />
					<p styleName="text">Перенесите сюда файл</p>
					<p styleName="text">или</p>
					<p styleName="text">Нажмите здесь</p>
				</Dropzone>
				<DropboxChooser
					appKey={"zd54fs45x0wugg3"}
					multiselect={false}
					success={files => this.onSuccessDropbox(files)}
					linkType={"direct"}
				>
					<a href="#" id="button">
						<img
							src={require("./img/dropbox.png")}
							style={{ display: "inline-block" }}
						/>
						<p
							style={{
								fontSize: "14px",
								fontFamily: "Helvetica",
								color: "#636363",
								display: "inline-block",
								margin: "10px",
								paddingLeft: "5px"
							}}
						>
							Загрузить с Dropbox
						</p>
					</a>
				</DropboxChooser>
				{this.state.file &&
					<img
						style={{ height: 200, width: 200 }}
						src={this.state.file.preview}
					/>}
			</div>
		);
	}
}

export default Drop;
