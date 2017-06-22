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
		this.setState(
			{
				file: dropFiles[0]
			},
			() => {
				const reader = new FileReader();
				console.log(this.state.file)
				let whatever=reader.readAsDataURL(this.state.file);
				console.log(whatever)
				// console.log(this.state.file);
				// const test_file = reader.readAsDataURL(this.state.file.preview);
				// console.log(test_file);
				// let canvas=this.editor.getImageScaledToCanvas()


				// let canvas = document.createElement("canvas");
				// let context = canvas.getContext("2d");
				// context.drawImage({src:this.state.file.preview}, 0, 0); // i assume that img.src is your blob url
				// let dataurl = canvas.toDataURL("img/jpg", 1);
				// console.log(dataurl)
			}
		);
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

	onFileLoad = (evt) => {
		const reader = new FileReader();
		console.log("here we go")
        reader.onload = ((file)=>{
        	console.log(file,"file")
            return (e)=>{
            	// console.log(e.target.result, "in onload")
            	this.setState({fileURL:e.target.result})
            }
        })(evt.target.files[0]);
        reader.readAsDataURL(evt.target.files[0]);
		// console.log("er re", uri)
        // setTimeout(()=>{console.log(this.state.fileURL)},1500)
        // console.log(evt.targetxd,"here we go ", evt.target)
        // const uri=reader.readAsBinaryString(evt.target.files[0]);
        // console.log(uri, "datauri")
	}

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

	// this.state.croppedImage = this.editorRef.getImage();
	// console.log("thisstatefile", this.state.file)
	// if (this.state.file) {
	// 		this.editor.getImageScaledToCanvas().toBlob(e=>console.log(e))
	// }

	setEditorRef = editor => {
		this.editor = editor;
	};
	imageChange=(e)=>{
		let canvas=this.editor.getImageScaledToCanvas()
		let dataurl = canvas.toDataURL("img/jpg", 2);
		let newurl=canvas.toBlob(console.log)
		this.setState({final:dataurl})
		console.log(dataurl,"here")
	}

	render() {
		return (
			<div styleName="Drop">
				{!this.state.file &&
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
				<AvatarEditor
					// style={{ width: 200 }}
					ref={this.setEditorRef}
					image={this.state.fileURL&&this.state.fileURL}
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
				<img src={this.state.croppedImage} alt="" />
				<input type='file' onChange={this.onFileLoad}/>
			</div>
		);
	}
}

export default Drop;
