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
		file: null,
		croppedImage: null
	};

	onDrop = (dropFiles, err, e) => {
		const reader = new FileReader();
		reader.onload = (file => {
			return e => {
				this.setState({ fileURL: e.target.result });
			};
		})(dropFiles[0]);
		reader.readAsDataURL(dropFiles[0]);
	};

	upload = () => {
		if (this.state.final) {
			this.props.upload(
				this.props.book.id,
				this.props.page,
				this.state.final
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
	setEditorRef = editor => {
		this.editor = editor;
	};
	imageChange = e => {
		let canvas = this.editor.getImageScaledToCanvas();
		let dataurl = canvas.toDataURL("img/jpg", 2);
		this.setState({ final: dataurl });
	};

	render() {
		return (
			<div styleName="Drop">
				{!this.state.fileURL &&
					<Dropzone
						ref={el => (this.dropzone = el)}
						id="dropZone"
						onDrop={files => this.onDrop(files)}
					>
						<img
							id="dropZoneImage"
							src={require("./img/upload.png")}
						/>
						<p styleName="text">Перенесите сюда файл</p>
						<p styleName="text">или</p>
						<p styleName="text">Нажмите здесь</p>
					</Dropzone>}
				<div style={{ cursor: "all-scroll" }}>
					{this.state.fileURL &&
						<div style={{ position: "relative" }}>
							<div
								onClick={() => this.setState({ fileURL: null })}
								style={{
									position:"absolute",
									right: "1%",
									top: "1%",
									paddingTop: "3%",
									fontSize: 17,
									backgroundColor: "black",
									width: 40,
									height: 40,
									borderRadius: 20,
									color: "white",
									fontWeight: "bold"
								}}
							>
								x
							</div>
							<AvatarEditor
								// style={{ width: 200 }}
								ref={this.setEditorRef}
								image={this.state.fileURL && this.state.fileURL}
								onImageChange={this.imageChange}
								// crossOrigin="anonymous"
								onImageReady={this.imageChange}
								width={400}
								height={400}
								border={20}
								color={[255, 255, 255, 0.6]} // RGBA
								scale={1}
								rotate={0}
							/>
						</div>}
				</div>
			</div>
		);
	}
}

export default Drop;
