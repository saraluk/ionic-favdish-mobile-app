import { Component } from "@angular/core";
import { DataService } from "../service/data.service";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { File } from "@ionic-native/file/ngx";
import { AlertController } from "@ionic/angular";
import { uuid } from "uuidv4";

@Component({
  selector: "app-new-dish",
  templateUrl: "./new-dish.page.html",
  styleUrls: ["./new-dish.page.scss"]
})
export class NewDishPage {
  id;
  dishName = "";
  cuisine = "";
  restaurantName = "";
  description = "";
  dishImage;
  photos: any = [];
  constructor(
    private dataService: DataService,
    private alertController: AlertController,
    private camera: Camera,
    private file: File
  ) {
    console.log("NewDishPage Constructor");
  }

  onClickSave() {
    if (this.dishName === "" || this.cuisine === "") {
      this.resetInput();
      this.noNameInputAlert();
    } else {
      this.id = this.generateId();
      this.dataService.setData({
        id: this.id,
        dishName: this.dishName,
        cuisine: this.cuisine,
        restaurantName: this.restaurantName,
        description: this.description,
        dishImage: this.dishImage
      });
      console.log(
        "save new favDish = " +
          this.id +
          " : " +
          this.dishName +
          " : " +
          this.cuisine +
          " : " +
          this.restaurantName +
          " : " +
          this.dishImage +
          " : " +
          this.description
      );
      console.log("DataService", this.dataService.getData());
      this.resetInput();
    }
  }

  onClickCancel() {
    console.log("Cancel creating new favDish");
    this.resetInput();
  }

  onClickTakePhoto() {
    this.photos = [];
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    };

    this.camera.getPicture(options).then(
      imageData => {
        let filename = imageData.substring(imageData.lastIndexOf("/") + 1);
        let path = imageData.substring(0, imageData.lastIndexOf("/") + 1);
        this.file.readAsDataURL(path, filename).then(base64data => {
          this.photos.push(base64data);
          this.dishImage = this.photos[0];
        });
      },
      err => {
        console.log(err);
      }
    );
  }

  onClickGetPhoto() {
    this.photos = [];
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    this.camera.getPicture(options).then(
      imageData => {
        let filename = imageData.substring(imageData.lastIndexOf("/") + 1);
        let path = imageData.substring(0, imageData.lastIndexOf("/") + 1);
        this.file.readAsDataURL(path, filename).then(base64data => {
          this.photos.push(base64data);
          this.dishImage = this.photos[0];
        });
      },
      err => {
        console.log(err);
      }
    );
  }

  async noNameInputAlert() {
    const alert = await this.alertController.create({
      header: "Unable to Save",
      message: "Missing value in required(*) field",
      buttons: ["OK"]
    });

    await alert.present();
  }

  resetInput() {
    this.id = "";
    this.dishName = "";
    this.cuisine = "";
    this.restaurantName = "";
    this.description = "";
    this.photos = [];
    this.dishImage = "";
  }

  generateId() {
    return uuid();
  }
}
