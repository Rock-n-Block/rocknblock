import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { slider } from './slider';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [slider],
})
export class MainComponent implements OnInit {
  public technologyID = 2;
  public technologies = [
    {
      icon: 'snow',
      title: 'Rust',
      text: 'is a systems programming language that supports functional and procedural programming. It is primarily used for writing safe and latency-critical applications.',
    },
    {
      icon: 'el',
      title: 'Rust',
      text: 'is a systems programming language that supports functional and procedural programming. It is primarily used for writing safe and latency-critical applications.',
    },
    {
      icon: 'rust',
      title: 'Rust',
      text: 'is a systems programming language that supports functional and procedural programming. It is primarily used for writing safe and latency-critical applications.',
    },
    {
      icon: 'c',
      title: 'Rust',
      text: 'is a systems programming language that supports functional and procedural programming. It is primarily used for writing safe and latency-critical applications.',
    },
    {
      icon: 'typescript',
      title: 'Rust',
      text: 'is a systems programming language that supports functional and procedural programming. It is primarily used for writing safe and latency-critical applications.',
    },
    {
      icon: 'x',
      title: 'Rust',
      text: 'is a systems programming language that supports functional and procedural programming. It is primarily used for writing safe and latency-critical applications.',
    },
  ];

  public caseID = 0;
  public caseTitle: string;
  public cases = [
    {
      name: 'ducatus',
      title: 'Ducatus Wallet',
      text: 'Ducatus Wallet for iOS. Manage your funds. Now supporting Bitcoin, Bitcoin Cash and Ethereum. The Ducatus wallet provides safe and easy access to your Ducatus coins. Ducatus is a fully decentralised cryptocurrency which works just like...',
      link: {
        show: true,
        title: 'ducatuscoins.com',
        url: 'https://ducatuscoins.com/',
      },
      images: [1, 2, 3],
    },
    {
      name: 'census',
      title: 'Census Wallet',
      text: 'Census Wallet for iOS. Manage your funds. Now supporting Bitcoin, Bitcoin Cash and Ethereum. The Census wallet provides safe and easy access to your Census coins. Census is a fully decentralised cryptocurrency which works just like...',
      link: {
        show: true,
        title: 'census.cx',
        url: 'https://census.cx/',
      },
      images: [1, 2, 3],
    },
    {
      name: 'hex',
      title: 'Hex Wallet',
      text: 'Hex Wallet for iOS. Manage your funds. Now supporting Bitcoin, Bitcoin Cash and Ethereum. The Hex wallet provides safe and easy access to your Hex coins. Hex is a fully decentralised cryptocurrency which works just like...',
      link: {
        show: true,
        title: 'hex.com',
        url: 'https://hex.com/',
      },
      images: [1, 2, 3],
    },
    {
      name: 'jetcoin',
      title: 'Jetcoin Wallet',
      text: 'Jetcoin Wallet for iOS. Manage your funds. Now supporting Bitcoin, Bitcoin Cash and Ethereum. The Jetcoin wallet provides safe and easy access to your Jetcoin coins. Jetcoin is a fully decentralised cryptocurrency which works just like...',
      link: {
        show: true,
        title: 'jetcoin.com',
        url: 'https://jetcoin.com/',
      },
      images: [1, 2, 3],
    },
    {
      name: 'quras',
      title: 'Quras Wallet',
      text: 'Quras Wallet for iOS. Manage your funds. Now supporting Bitcoin, Bitcoin Cash and Ethereum. The Quras wallet provides safe and easy access to your Quras coins. Quras is a fully decentralised cryptocurrency which works just like...',
      link: {
        show: true,
        title: 'quras.com',
        url: 'https://quras.com/',
      },
      images: [1, 2, 3],
    },
  ];

  public partners = ['axion', 'binence', 'bw', 'changelly', 'ducatus', 'enq', 'eos', 'lancor', 'neo', 'okex', 'quras', 'rsk', 'teambrella', 'tron', 'waves'];

  constructor(private metaTagService: Meta, private titleService: Title) {
    this.titleService.setTitle('Rock`n`Block');
    this.metaTagService.addTags([{ name: 'keywords', content: 'Blockchain, Rocknblock, Wallets, Crypto, Cryptocurrency, DeFi' }, { name: 'robots', content: 'index, follow' }, { name: 'author', content: 'Amary Filo' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { name: 'date', content: '20121-03-05', scheme: 'YYYY-MM-DD' }, { charset: 'UTF-8' }]);
    this.metaTagService.updateTag({ name: 'description', content: 'Blockchain custom development for business and startups' });

    this.caseTitle = this.cases[this.caseID].title;
  }

  public changeSlide(state: string): void {
    if (state === 'prev') {
      this.caseID = this.caseID === 0 ? this.cases.length - 1 : this.caseID - 1;
    }
    if (state === 'next') {
      this.caseID = this.caseID === this.cases.length - 1 ? 0 : this.caseID + 1;
    }
    this.caseTitle = this.cases[this.caseID].title;
  }

  ngOnInit(): void {}
}
