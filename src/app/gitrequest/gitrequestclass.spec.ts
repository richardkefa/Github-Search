import { Gitrequestclass } from './gitrequestclass';

describe('Gitrequestclass', () => {
  it('should create an instance', () => {
    expect(new Gitrequestclass("","","","",0,0,"",new Date(),"")).toBeTruthy();
  });
});
