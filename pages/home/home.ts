import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Data } from "./home.service";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  searchTerm: any = "";
  jsonData: any;
  loanList: any;
  loanData: any;
  constructor(public navCtrl: NavController, public data: Data) {}

  ionViewDidLoad() {
    this.setFilteredItems();
    this.loanDataFilter();
  }

  setFilteredItems() {
    this.jsonData = this.data.filterItems(this.searchTerm);
    this.loanList = this.data.filterLoanItems(this.searchTerm);
  }
  
  loanDataFilter() {
    this.loanData = this.data.loanList;
    // console.log(JSON.stringify(this.loanData));
    // filter()
    const filteredItems = this.loanData.filter((item) => {
      // return item.emiAmt > 0;
      return item.totalDueAmt >= 10000;
      // return item.loanNo === '672';
    });
    console.log('filter() =', filteredItems);

    ////////////////////////////////////////////////////////////
        // map() 
    const mapItems = this.loanData.map((item) => {
      // return item.emiAmt > 0;
      return item.loanNo;
    });
    console.log('map() =', mapItems);

    ////////////////////////////////////////////////////////////
        // find() 
    const foundItem = this.loanData.find((item) => {
      // return item.emiAmt > 0;
      // return item.name === 'Srinivas Vemula';
      return item.loanNo === '672';
    });
    console.log('find() =', foundItem);

    ////////////////////////////////////////////////////////////
        // foreach() 
        console.log('// foreach()  ');
    this.loanData.forEach((item) => {
      console.log(item.loanNo +' '+item.name);
    });

    ////////////////////////////////////////////////////////////
        // some() 
    const hasAllElements = this.loanData.some((item) => {
      return item.totalDueAmt >= 10000 ;
    });
    console.log('// some() ');
    console.log(hasAllElements);

    ////////////////////////////////////////////////////////////
        // every() 
    const hasAllElementsItem = this.loanData.every((item) => {
      return item.loanNo = '672';
    });
    console.log('// every() ');
    console.log(hasAllElements);

    ////////////////////////////////////////////////////////////
        // reduce() //totals
    const total = this.loanData.reduce((curerentTotal, item) => {
      return item.totalDueAmt + curerentTotal;
    }, 0);
    console.log('// reduce() totalDueAmt Total =');
    console.log(total);

    ////////////////////////////////////////////////////////////
        // includes() //totals
        const arrayList = [1,2,3,4,5]
    const includeResult = arrayList.includes(2);
    console.log('// includes() result = '+ includeResult);
    ////////////////////////////////////////////////////////////
        // includes() //totals

    const loanincludeResult = mapItems.includes('670');
    console.log('// includes() result = '+ loanincludeResult);    
  }
}
