import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {
  data;
  constructor() {
    this.data = [
      {
        id: "dish1",
        dishName: "Shirashi Don",
        cuisine: "Japanese",
        restaurantName: "Sushi Lin",
        dishImage: "assets/IMG_1423.JPG",
        description: ""
      },
      {
        id: "dish2",
        dishName: "Spaghetti cream sauce",
        cuisine: "Italian",
        restaurantName: "Nostro",
        dishImage: "assets/IMG_5500.jpg",
        description: ""
      },
      {
        id: "dish3",
        dishName: "Yum Som-O",
        cuisine: "Thai",
        restaurantName: "Ugly Baby",
        dishImage: "assets/IMG_8995.jpg",
        description: ""
      },
      {
        id: "dish4",
        dishName: "The Classic Tonkotsu Ramen",
        cuisine: "Japanese",
        restaurantName: "Ichiran Ramen",
        dishImage: "assets/IMG_5462.jpg",
        description: ""
      },
      {
        id: "dish5",
        dishName: "Pancake with Mixed Fruit",
        cuisine: "French",
        restaurantName: "Cafe Luluc",
        dishImage: "assets/IMG_5510.jpg",
        description:
          "The pancake was crispy on the outside, and fluffy and buttery on the inside. Amazing!"
      },
      {
        id: "dish6",
        dishName: "Pancake",
        cuisine: "American",
        restaurantName: "Bubby's Tribeca",
        dishImage: "assets/IMG_2750.jpg",
        description: "Pancakes are huge fluffy and delicious!"
      },
      {
        id: "dish7",
        dishName: "Kao Pad Pla Too",
        cuisine: "Thai",
        restaurantName: "Boran",
        dishImage: "assets/IMG_3790.jpg",
        description: ""
      },
      {
        id: "dish8",
        dishName: "Summer Shack Clambake Lobster",
        cuisine: "American",
        restaurantName: "Summer Shack",
        dishImage: "assets/IMG_3683.JPG",
        description:
          "Lobster Roll was really good. The lobster filling wasn't too heavy as there was already a lot of butter due to the fact that they used a toasted brioche bun. Thus, the roll itself was quite flavorful, soft, and delicious!"
      },
      {
        id: "dish9",
        dishName: "Sukiyaki",
        cuisine: "Japanese",
        restaurantName: "Shabu tatsu",
        dishImage: "assets/IMG_3582.jpg",
        description: ""
      },
      {
        id: "dish10",
        dishName: "Linguine all' Astice",
        cuisine: "Italian",
        restaurantName: "Piccola Cucina",
        dishImage: "assets/IMG_9339.jpg",
        description:
          "Flavorful yet light with plenty of lobster meat in a savory and creamy tomato sauce."
      },
      {
        id: "dish11",
        dishName: "Sushi Dinner Set",
        cuisine: "Japanese",
        restaurantName: "Taiki",
        dishImage: "assets/IMG_3333.jpg",
        description:
          "Fish was fresh and size of each piece of sushi was great. Not too big and not too small."
      },
      {
        id: "dish12",
        dishName: "Escargot with garlic chili sauce",
        cuisine: "French",
        restaurantName: "Le Paddock",
        dishImage: "assets/IMG_3209.jpg",
        description: ""
      }
    ];
  }

  setData(data) {
    this.data.unshift(data);
  }

  getData() {
    return this.data;
  }

  updateData(data) {
    this.data = data;
  }
}
