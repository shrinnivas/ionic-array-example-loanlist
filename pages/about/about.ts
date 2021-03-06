import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Data } from "../home/home.service";

@Component({
  selector: "page-about",
  templateUrl: "about.html"
})
export class AboutPage {
  searchTerm: any = "";
  jsonData: any;
  loanList: any;

  constructor(public navCtrl: NavController, public data: Data) {}


  ionViewDidLoad() {
    this.setFilteredItems();
  }

  setFilteredItems() {
    this.jsonData = this.data.filterItems(this.searchTerm);
    this.loanList = this.data.filterLoanItems(this.searchTerm);
  }
  
}
