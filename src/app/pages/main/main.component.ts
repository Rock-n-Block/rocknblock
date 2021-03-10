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

  public techSelect = 'mobile-develop';
  public techID = 2;

  public technologies = [
    {
      icon: 'dapp-develop',
      text: 'Smart contract audit',
    },
    {
      icon: 'investment',
      text: 'Writing technical specifications, development of architecture for blockchain projects',
    },
    {
      icon: 'mobile-develop',
      text: 'Development of mobile applications for working with blockchain',
    },
    {
      icon: 'smart-contract',
      text: 'Development of testing platforms',
    },
    {
      icon: 'technical',
      text: 'Creation of an investment cabinet',
    },
    {
      icon: 'testing-develop',
      text: 'Development of DAPP, DeFi (and other) applications on the Ethereum network',
    },
  ];

  public caseID = 0;
  public caseTitle: string;
  public cases = [
    {
      name: 'ducatus',
      title: 'Ducatus Wallet',
      text:
        'Ducatus Wallet for iOS. Manage your funds. Now supporting Bitcoin, Bitcoin Cash and Ethereum. The Ducatus wallet provides safe and easy access to your Ducatus coins. Ducatus is a fully decentralised cryptocurrency which works just like Bitcoin but faster! Your wallet can be used to send coins to anywhere in the world and to buy items from the luxury collection in the online Ducatus store as well as from a growing number of other participating merchant partners.',
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
      text:
        'No longer does one need a bank account to access low rate loans, remunerated savings, instantaneous and free cross border payments.Census Wallet is the App that enables you to control your card and unleash the power of the Open Finance, including savings, loans, staking, digital assets investments. Take control of your wealth from the palm of your hand without the need of a bank account. Census Cards are making Bitcoin and cryptocurrencies simple to embrace. It’s a Smart Note, as convenient as credit card and as easy to use as cash with encryption security on top.',
      link: {
        show: true,
        title: 'census.cx',
        url: 'https://census.cx/',
      },
      images: [1, 2, 3],
    },
    {
      name: 'quras',
      title: 'Quras Wallet',
      text: 'Quras wallet is a tool that allows for interacting with the secret contract platform and fulfill various privacy protection needs.',
      link: {
        show: true,
        title: 'quras.io',
        url: 'https://quras.io/',
      },
      images: [1, 2, 3],
    },
    {
      name: 'pion',
      title: 'Yeild Farming - PION',
      text:
        'A stablecoin with a token price of $ 1 by changing the issue of issued tokens through a smart contract. By analogy with such projects as AMPL and RMPL, a decentralized mechanism for changing the number of tokens for users has been developed, while the exact time of the rebase is unknown in advance and is determined by a smart contract. <br/><br/> In addition, a second token is available to users, convertible with stablecoin at a rate of 1: 1, which allows you to fix the number of tokens pending the next rebase at a more favorable rate.<br/><br/>Additionally, a stablecoin can generate income from yield farming by staking the LP2 Uniswsap token.',
      link: {
        show: true,
        title: 'site.com',
        url: 'https://site.com/',
      },
      images: [1, 2],
    },
    {
      name: 'axion',
      title: 'Web3 frontend and backend integration - Axion Dashboard',
      text:
        'In addition to smart contracts that implement business logic, the project needed a powerful visual tool that allows collecting financial statistics on the development of the project as a whole, and in the context of individual user wallets and time periods.<br><br>For this, a dashboard was created with information about the project. To implement instant access to all information on the project, a centralized database was developed that stores all information about events occurring on the contract, received in real time from the Ethereum network.',
      link: {
        show: true,
        title: 'site.com',
        url: 'https://site.com/',
      },
      images: [1, 2, 3],
    },
    {
      name: 'scanner',
      title: 'Сканеры',
      text: 'For the implementation of many blockchain projects, the use of blockchain scanners is required to obtain information about events and changes in the status of contracts. We have developed universal scanners for such networks as Bitcoin, Ethereum, Tron, EOS, NEO, Waves, Binance and their analogues.',
      link: {
        show: false,
      },
      images: [1],
    },
  ];

  // {
  //   name: 'hex',
  //   title: 'Hex Wallet',
  //   text: 'Hex Wallet for iOS. Manage your funds. Now supporting Bitcoin, Bitcoin Cash and Ethereum. The Hex wallet provides safe and easy access to your Hex coins. Hex is a fully decentralised cryptocurrency which works just like...',
  //   link: {
  //     show: true,
  //     title: 'hex.com',
  //     url: 'https://hex.com/',
  //   },
  //   images: [1, 2, 3],
  // },
  // {
  //   name: 'jetcoin',
  //   title: 'Jetcoin Wallet',
  //   text: 'Jetcoin Wallet for iOS. Manage your funds. Now supporting Bitcoin, Bitcoin Cash and Ethereum. The Jetcoin wallet provides safe and easy access to your Jetcoin coins. Jetcoin is a fully decentralised cryptocurrency which works just like...',
  //   link: {
  //     show: true,
  //     title: 'jetcoin.com',
  //     url: 'https://jetcoin.com/',
  //   },
  //   images: [1, 2, 3],
  // },

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

  public changeTech(state: string): void {
    if (state === 'prev') {
      this.techID = this.techID === 0 ? this.technologies.length - 1 : this.techID - 1;
    }
    if (state === 'next') {
      this.techID = this.techID === this.technologies.length - 1 ? 0 : this.techID + 1;
    }
    this.techSelect = this.technologies[this.techID].icon;
  }

  ngOnInit(): void {}
}
