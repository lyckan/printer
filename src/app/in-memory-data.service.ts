import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const printers = [{
        adminUri: 'http://adminur.se',
        color: false,
        duplex: true,
        id: 232323,
        installed: true,
        isBonjour: true,
        name: 'Das printer',
        uri: 'http://printeruri.se' 
      },
    {
      adminUri: 'http://adminur.se',
        color: false,
        duplex: true,
        id: 132323,
        installed: true,
        isBonjour: true,
        name: 'The printer',
        uri: 'http://printeruri.se' 
      },
      {
        adminUri: 'http://adminur.se',
          color: false,
          duplex: true,
          id: 132322,
          installed: true,
          isBonjour: true,
          name: 'Printer Pete yeah',
          uri: 'http://printeruri.se' 
        }
    ];
    return {printers};
  }
}