import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MockComponent, MockedDebugElement, ngMocks } from 'ng-mocks';

import { setActiveTranslations } from '@whg/core';

import { WrapperComponent } from './wrapper.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  template: '<whf-wrapper/>',
})
class TestWrapperComponent {
  @ViewChild(WrapperComponent, { static: true }) public component!: WrapperComponent;
}

describe('WrapperComponent', (): void => {
  let fixture: ComponentFixture<TestWrapperComponent>;
  let store: MockStore;

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, WrapperComponent, MockComponent(HeaderComponent)],
      declarations: [TestWrapperComponent],
      providers: [provideMockStore()],
    })
      .overrideComponent(WrapperComponent, {
        set: { imports: [RouterTestingModule, MockComponent(HeaderComponent), MockComponent(FooterComponent)] },
      })
      .compileComponents();

    fixture = TestBed.createComponent(TestWrapperComponent);
    store = TestBed.inject(MockStore);
  }));

  const element = (): HTMLElement => fixture.nativeElement.querySelector('whf-wrapper');
  const header = (): MockedDebugElement => ngMocks.find(HeaderComponent);
  const footer = (): MockedDebugElement => ngMocks.find(FooterComponent);

  it('should create', (): void => {
    expect(element()).toBeTruthy();
  });

  describe('#initialization', () => {
    let spy: jest.SpyInstance;

    beforeEach(() => {
      spy = jest.spyOn(store, 'dispatch').mockImplementation();
      fixture.detectChanges();
    });

    it('should have the frame elements', () => {
      expect(header()).toBeTruthy();
      expect(footer()).toBeTruthy();
    });

    it('should set active translations', () => {
      expect(spy).toHaveBeenNthCalledWith(1, setActiveTranslations({ activeTranslationKey: 'en-mga' }));
    });
  });
});
