import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MockComponent, MockDirective, MockedDebugElement, ngMocks } from 'ng-mocks';

import { HeaderContent } from '@whf/scaffold/models';
import { selectCmsHeaderLinks } from '@whf/scaffold/store';
import { getCmsContentSuccess } from '@whg/core';
import { CmsContentPart } from '@whg/models';
import { ButtonDirective, TopNavigationComponent } from '@whg/ui-components';

import { HeaderComponent } from './header.component';
import { headerLinks } from './header.mocks';

@Component({
  template: '<whf-header />',
})
class TestWrapperComponent {
  @ViewChild(HeaderComponent, { static: true }) public component!: HeaderComponent;
}

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<TestWrapperComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      declarations: [TestWrapperComponent],
      providers: [provideMockStore({ selectors: [{ selector: selectCmsHeaderLinks, value: headerLinks() }] })],
    })
      .overrideComponent(HeaderComponent, {
        set: {
          imports: [RouterTestingModule, MockComponent(TopNavigationComponent), NgIf, MockDirective(ButtonDirective)],
        },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    store = TestBed.inject(MockStore);
  });

  const component = (): HTMLElement => fixture.nativeElement.querySelector('whf-header');
  const links = (): MockedDebugElement => ngMocks.find(TopNavigationComponent);

  it('should create', () => {
    expect(component()).toBeTruthy();
  });

  describe('#initialization', () => {
    let spy: jest.SpyInstance;

    beforeEach(() => {
      spy = jest.spyOn(store, 'dispatch').mockImplementation();
      fixture.detectChanges();
    });

    it('should have the links', () => {
      expect(links().componentInstance.menuItems).toEqual(fixture.componentInstance.component.links());
    });

    it('should fetch the header content', () => {
      expect(spy).toHaveBeenNthCalledWith(
        1,
        getCmsContentSuccess({
          translationKey: 'en-mga',
          cmsContentKey: CmsContentPart.Header,
          content: { links: headerLinks() } as HeaderContent,
        })
      );
    });
  });
});
