import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";

@Injectable()
export class Data {
  jsonData: any;
  loanList: any;

  constructor() {
    this.jsonData = [
      { id: 1, label: "saw", name: "Prithivi" },
      { id: 2, label: "saw1", name: "Abimanyu" },
      { id: 3, label: "saw2", name: "malliga" },
      { id: 3, label: "saw2", name: "Gowdaman" },
      { id: 3, label: "saw2", name: "Neethi" },
      { id: 3, label: "saw2", name: "abirami1" },
      { id: 3, label: "saw2", name: "abirami2" },
      { id: 3, label: "saw2", name: "Harrish" },
      { id: 3, label: "saw2", name: "Lokesh" },
      { id: 3, label: "saw2", name: "Deepak" },
      { id: 3, label: "saw2", name: "malliga" },
      { id: 3, label: "saw2", name: "malliga" }
    ];

    this.loanList = [
      {
        loanId: 5,
        customerId: 3,
        dpImg1: "assets\\avatar1.png",
        name: "Ramu Vanga",
        mobileNo: "9825277277",
        pendingBalance: 22320,
        emiPaidAmt: 2480,
        totalDueAmt: 24800,
        loanNo: "524",
        paidEmi: 1,
        totalDues: 10,
        emiAmt: 2480,
        progress: 0.1
      },
      {
        loanId: 1,
        customerId: 2,
        dpImg1: "assets\\avatar1.png",
        name: "Satish Katkam",
        mobileNo: "9825677677",
        pendingBalance: 8680,
        emiPaidAmt: 3720,
        totalDueAmt: 12400,
        loanNo: "525",
        paidEmi: 3,
        totalDues: 10,
        emiAmt: 1240,
        progress: 0.3
      },
      {
        loanId: 7,
        customerId: 1,
        dpImg1: "assets\\avatar1.png",
        name: "Srinivas Vemula",
        mobileNo: "9848382723",
        pendingBalance: 12400,
        emiPaidAmt: 0,
        totalDueAmt: 12400,
        loanNo: "528",
        paidEmi: 0,
        totalDues: 10,
        emiAmt: 1240,
        progress: 0
      },
      {
        loanId: 8,
        customerId: 4,
        dpImg1: "assets\\avatar1.png",
        name: "Nilesh Jella",
        mobileNo: "9825411440",
        pendingBalance: 17920,
        emiPaidAmt: 4480,
        totalDueAmt: 22400,
        loanNo: "529",
        paidEmi: 2,
        totalDues: 10,
        emiAmt: 2240,
        progress: 0.2
      },
      {
        loanId: 10,
        customerId: 13,
        dpImg1: "assets\\avatar1.png",
        name: "Shrinidhi",
        mobileNo: "989868888",
        pendingBalance: 11200,
        emiPaidAmt: 0,
        totalDueAmt: 11200,
        loanNo: "555",
        paidEmi: 0,
        totalDues: 10,
        emiAmt: 1120,
        progress: 0
      },
      {
        loanId: 16,
        customerId: 11,
        dpImg1: "assets\\avatar1.png",
        name: "Shiva",
        mobileNo: "64523789456",
        pendingBalance: 12400,
        emiPaidAmt: 0,
        totalDueAmt: 12400,
        loanNo: "665",
        paidEmi: 0,
        totalDues: 10,
        emiAmt: 1240,
        progress: 0
      },
      {
        loanId: 12,
        customerId: 4,
        dpImg1: "assets\\avatar1.png",
        name: "Nilesh Jella",
        mobileNo: "9825411440",
        pendingBalance: 16800,
        emiPaidAmt: 0,
        totalDueAmt: 16800,
        loanNo: "666",
        paidEmi: 0,
        totalDues: 10,
        emiAmt: 1680,
        progress: 0
      },
      {
        loanId: 14,
        customerId: 9,
        dpImg1:
          "https: //static.asianetnews.com/images/01e5bzcqa1psdhfv6h9s13aqe9/saipallavi-white-saree-images-download-8592944-jpg.jpg",
        name: "Heroin one",
        mobileNo: "987654320",
        pendingBalance: 24800,
        emiPaidAmt: 0,
        totalDueAmt: 24800,
        loanNo: "667",
        paidEmi: 0,
        totalDues: 10,
        emiAmt: 2480,
        progress: 0
      },
      {
        loanId: 13,
        customerId: 5,
        dpImg1: "assets\\avatar1.png",
        name: "Srinivas Vemula",
        mobileNo: "9848382723",
        pendingBalance: 1240,
        emiPaidAmt: 0,
        totalDueAmt: 1240,
        loanNo: "669",
        paidEmi: 0,
        totalDues: 10,
        emiAmt: 124,
        progress: 0
      },
      {
        loanId: 15,
        customerId: 9,
        dpImg1:
          "https: //static.asianetnews.com/images/01e5bzcqa1psdhfv6h9s13aqe9/saipallavi-white-saree-images-download-8592944-jpg.jpg",
        name: "Heroin one",
        mobileNo: "987654320",
        pendingBalance: 12400,
        emiPaidAmt: 0,
        totalDueAmt: 12400,
        loanNo: "670",
        paidEmi: 0,
        totalDues: 10,
        emiAmt: 1240,
        progress: 0
      },
      {
        loanId: 17,
        customerId: 8,
        dpImg1: "assets\\avatar1.png",
        name: "Nilesh Jella",
        mobileNo: "9825411440",
        pendingBalance: 24800,
        emiPaidAmt: 0,
        totalDueAmt: 24800,
        loanNo: "671",
        paidEmi: 0,
        totalDues: 10,
        emiAmt: 2480,
        progress: 0
      },
      {
        loanId: 18,
        customerId: 9,
        dpImg1:
          "https: //static.asianetnews.com/images/01e5bzcqa1psdhfv6h9s13aqe9/saipallavi-white-saree-images-download-8592944-jpg.jpg",
        name: "Heroin one",
        mobileNo: "987654320",
        pendingBalance: 12200,
        emiPaidAmt: 0,
        totalDueAmt: 12200,
        loanNo: "672",
        paidEmi: 0,
        totalDues: 10,
        emiAmt: 1250,
        progress: 0
      }
    ];
  }

  filterItems(searchTerm) {
    return this.jsonData.filter(item => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

  filterLoanItems(searchTerm) {
    return this.loanList.filter(item => {
      return item.loanNo.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

  loanListData() {
    return this.loanList;
  }
}
