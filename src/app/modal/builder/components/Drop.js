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
	// 	//("File uploaded!");
	// 	// //(snapshot)
	// });
};
import AvatarEditor from "react-avatar-editor";
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
		document.body.style.oveflow="hidden"
	};

	upload = () => {
		if (this.state.file) {
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
				//(response.blob());
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
				//(this.state.files);
			});
	}
	render() {
		return (
			<div styleName="Drop">
				{!this.state.file&&<Dropzone
					ref={el => (this.dropzone = el)}
					id="dropZone"
					onDrop={files => this.onDrop(files)}
				>
					<img id="dropZoneImage" src={require("./img/upload.png")} />
					<p styleName="text">Перенесите сюда файл</p>
					<p styleName="text">или</p>
					<p styleName="text">Нажмите здесь</p>
				</Dropzone>}

				{this.state.file &&
					<AvatarEditor
						image={this.state.file.preview}
						width={250}
						height={250}
						border={20}
						color={[255, 255, 255, 0.6]} // RGBA
						scale={1}
						rotate={0}
					/>}
			</div>
		);
	}
}

export default Drop;
