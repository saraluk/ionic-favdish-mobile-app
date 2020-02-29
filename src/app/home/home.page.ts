import { Component, OnInit, ViewChild } from "@angular/core";
import { DataService } from "../service/data.service";
import { ModalController } from "@ionic/angular";
import { DishDetailPage } from "../dish-detail/dish-detail.page";
import { ActionSheetController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  data;
  section = {};
  dataCount;
  constructor(
    private dataService: DataService,
    private modalController: ModalController,
    private actionSheetController: ActionSheetController
  ) {
    console.log("HomePage Constructor");
  }

  ngOnInit() {
    this.data = this.dataService.getData();
    this.dataCount = this.data.length;
    this.renderCard();
    console.log("Render() in ngOnInit");
  }

  ngDoCheck() {
    if (this.dataCount !== this.data.length) {
      this.dataCount = this.data.length;
      console.log("Data Count", this.dataCount);
      this.section = {};
      this.renderCard();
    }
  }

  renderCard() {
    for (let i = 0; i < this.data.length; i++) {
      let currentItem = this.data[i];
      if (this.section[currentItem.cuisine]) {
        this.section[currentItem.cuisine].push(currentItem);
      } else {
        this.section[currentItem.cuisine] = [currentItem];
      }
    }
  }

  onClickNewDish() {
    console.log("Create New favDish");
  }

  async viewDishDetail(dish) {
    const modal = await this.modalController.create({
      component: DishDetailPage,
      componentProps: {
        cuisine: dish.cuisine,
        dishImage: dish.dishImage,
        dishName: dish.dishName,
        restaurantName: dish.restaurantName,
        description: dish.description
      }
    });
    return await modal.present();
  }
  async onClickMoreActionSheet(d) {
    let data = d;
    const actionSheet = await this.actionSheetController.create({
      buttons: [
        {
          text: "Delete",
          role: "destructive",
          icon: "trash",
          handler: () => {
            console.log("Delete clicked");
            var filtered = this.data.filter(value => {
              return value.id != data.id;
            });
            this.dataService.updateData(filtered);
            this.data = this.dataService.getData();
            console.log("Current data", this.data);
            console.log("Current dataService", this.dataService.getData());
          }
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });
    await actionSheet.present();
  }

  handleSearchInput(ev: any) {
    let val = ev.target.value;
    if (val && val.trim() != "") {
      var filteredData = this.data.filter(value => {
        if (value.dishName.toLowerCase().indexOf(val.toLowerCase()) > -1) {
          return value;
        }
        if (
          value.restaurantName.toLowerCase().indexOf(val.toLowerCase()) > -1
        ) {
          return value;
        }
        if (value.cuisine.toLowerCase().indexOf(val.toLowerCase()) > -1) {
          return value;
        }
      });
      this.data = filteredData;
    } else {
      this.data = this.dataService.getData();
    }
  }
}
