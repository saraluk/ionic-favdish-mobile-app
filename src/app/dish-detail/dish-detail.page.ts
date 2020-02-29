import { Component, OnInit } from "@angular/core";
import { NavParams, ModalController } from "@ionic/angular";

@Component({
  selector: "app-dish-detail",
  templateUrl: "./dish-detail.page.html",
  styleUrls: ["./dish-detail.page.scss"]
})
export class DishDetailPage implements OnInit {
  cuisine;
  dishImage;
  dishName;
  restaurantName;
  description;
  constructor(
    private navParams: NavParams,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.cuisine = this.navParams.get("cuisine");
    this.dishImage = this.navParams.get("dishImage");
    this.dishName = this.navParams.get("dishName");
    this.restaurantName = this.navParams.get("restaurantName");
    this.description = this.navParams.get("description");
  }
  closeModal() {
    this.modalController.dismiss();
  }
}
